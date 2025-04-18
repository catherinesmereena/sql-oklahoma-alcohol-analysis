-- Create the database
CREATE DATABASE Oklahoma_Alcohol_Use_DB;

-- Select the database
USE Oklahoma_Alcohol_Use_DB;

-- BRFSS_OK Data Staging Table 
CREATE TABLE Staging_BRFFS_OK (
    Question VARCHAR(255),
    Response VARCHAR(50),
    Break_Out VARCHAR(100),
    Break_Out_Category VARCHAR(100),
    Sample_Size INT,
    Data_Value INT,
    ZipCode VARCHAR(10)
);

-- Demographics Data (Oklahoma) Staging Table
CREATE TABLE Staging_Demographics_OK (
    ZipCode VARCHAR(10),
    City VARCHAR(100),
    County VARCHAR(100)
);

-- Demographics Data Staging Table
CREATE TABLE Staging_Demographics_1 (
    ZipCode VARCHAR(10),
    City VARCHAR(100),
    County VARCHAR(100)
);

-- Select data from BRFSS_OK for verification
SELECT * FROM Staging_BRFFS_OK;

-- Dimension Table for Questions
CREATE TABLE Dim_Question (
    Question_ID INT PRIMARY KEY AUTO_INCREMENT,
    Question VARCHAR(255)
);

-- Insert into Dim_Question from raw BRFSS_OK data
INSERT INTO Dim_Question (Question)
SELECT DISTINCT Question FROM Staging_BRFFS_OK;

-- Dimension Table for Responses
CREATE TABLE Dim_Response (
    Response_ID INT PRIMARY KEY AUTO_INCREMENT,
    Response VARCHAR(50)
);

-- Insert into Dim_Response
INSERT INTO Dim_Response (Response)
SELECT DISTINCT Response FROM Staging_BRFFS_OK;

-- Dimension Table for Locations
CREATE TABLE Dim_Location (
    ZipCode VARCHAR(10) PRIMARY KEY,
    City VARCHAR(100),
    County VARCHAR(100)
);

-- Insert into Dim_Location from Demographics data without duplicates
INSERT INTO Dim_Location (ZipCode, City, County)
SELECT DISTINCT ZipCode, City, County
FROM Staging_Demographics_OK;

-- Dimension Table for Break_Out
CREATE TABLE Dim_Break_Out (
    Break_Out_ID INT PRIMARY KEY AUTO_INCREMENT,
    Break_Out VARCHAR(100)
);

-- Insert into Dim_Break_Out
INSERT INTO Dim_Break_Out (Break_Out)
SELECT DISTINCT Break_Out FROM Staging_BRFFS_OK;

-- Dimension Table for Break_Out_Category
CREATE TABLE Dim_Break_Out_Category (
    Break_Out_Category_ID INT PRIMARY KEY AUTO_INCREMENT,
    Break_Out_Category VARCHAR(100)
);

-- Insert into Dim_Break_Out_Category
INSERT INTO Dim_Break_Out_Category (Break_Out_Category)
SELECT DISTINCT Break_Out_Category FROM Staging_BRFFS_OK;

-- Fact Table for Alcohol Use Data
CREATE TABLE Fact_Alcohol_Use (
    Fact_ID INT PRIMARY KEY AUTO_INCREMENT,
    ZipCode VARCHAR(10),
    Question_ID INT,
    Response_ID INT,
    Break_Out_ID INT,
    Break_Out_Category_ID INT,
    Sample_Size INT,
    Data_Value INT,
    FOREIGN KEY (ZipCode) REFERENCES Dim_Location(ZipCode),
    FOREIGN KEY (Question_ID) REFERENCES Dim_Question(Question_ID),
    FOREIGN KEY (Response_ID) REFERENCES Dim_Response(Response_ID),
    FOREIGN KEY (Break_Out_ID) REFERENCES Dim_Break_Out(Break_Out_ID),
    FOREIGN KEY (Break_Out_Category_ID) REFERENCES Dim_Break_Out_Category(Break_Out_Category_ID)
);

-- Insert data into Fact_Alcohol_Use, joining with Dim_Break_Out and Dim_Break_Out_Category to get the IDs
INSERT INTO Fact_Alcohol_Use (ZipCode, Question_ID, Response_ID, Break_Out_ID, Break_Out_Category_ID, Sample_Size, Data_Value)
SELECT 
    b.ZipCode,  -- ZipCode from Staging_BRFFS_OK
    q.Question_ID,  -- Mapping Question to Question_ID from Dim_Question
    r.Response_ID,  -- Mapping Response to Response_ID from Dim_Response
    bo.Break_Out_ID,  -- Mapping Break_Out to Break_Out_ID from Dim_Break_Out
    boc.Break_Out_Category_ID,  -- Mapping Break_Out_Category to Break_Out_Category_ID from Dim_Break_Out_Category
    b.Sample_Size,  -- Sample_Size from Staging_BRFFS_OK
    b.Data_Value  -- Data_Value from Staging_BRFFS_OK
FROM 
    Staging_BRFFS_OK b
    JOIN Dim_Question q ON b.Question = q.Question  -- Join on Question to get Question_ID
    JOIN Dim_Response r ON b.Response = r.Response  -- Join on Response to get Response_ID
    JOIN Dim_Break_Out bo ON b.Break_Out = bo.Break_Out  -- Join on Break_Out to get Break_Out_ID
    JOIN Dim_Break_Out_Category boc ON b.Break_Out_Category = boc.Break_Out_Category;  -- Join on Break_Out_Category to get Break_Out_Category_ID

-- Drop staging tables to clean up
DROP TABLE Staging_BRFFS_OK;
DROP TABLE Staging_Demographics_OK;

-- Query to check data for age group 18-24 and responses marked as "Yes"
SELECT l.City, 
       f.Data_Value,
       bo.Break_Out,
       r.Response
FROM Fact_Alcohol_Use f
JOIN Dim_Location l ON f.ZipCode = l.ZipCode
JOIN Dim_Break_Out bo ON f.Break_Out_ID = bo.Break_Out_ID
JOIN Dim_Response r ON f.Response_ID = r.Response_ID
WHERE bo.Break_Out = '18-24'
  AND r.Response = 'Yes';

-- Calculate the average adolescent alcohol consumption by ZipCode
SELECT ZipCode, AVG(Data_Value) AS Avg_Alcohol_Use
FROM Fact_Alcohol_Use
WHERE Break_Out_Category_ID = '2' 
AND Break_Out_ID = '5'
AND Question_ID = '1'
GROUP BY ZipCode
ORDER BY Avg_Alcohol_Use DESC;

-- Highest and Lowest alcohol abuse by city for age group 18-24
SELECT 
    l.City, 
    SUM(f.Sample_Size) AS Total_Sample_Size_18_24,  -- Sum of sample size for the 18-24 age group
    SUM(f.Data_Value) AS Total_Data_Value_18_24,    -- Sum of data value for the 18-24 age group
    CASE 
        WHEN SUM(f.Sample_Size) = 0 THEN 0
        ELSE (SUM(f.Data_Value) / SUM(f.Sample_Size) * 100)  -- Calculate the ratio
    END AS Data_Value_to_Sample_Size_Ratio
FROM Fact_Alcohol_Use f
JOIN Dim_Location l ON f.ZipCode = l.ZipCode
JOIN Dim_Break_Out bo ON f.Break_Out_ID = bo.Break_Out_ID
WHERE bo.Break_Out = '18-24'  -- Only for the 18-24 age group
GROUP BY l.City;

-- Highest and Lowest alcohol abuse by county for age group 18-24
SELECT 
    l.County, 
    SUM(f.Sample_Size) AS Total_Sample_Size_18_24,  -- Sum of sample size for the 18-24 age group
    SUM(f.Data_Value) AS Total_Data_Value_18_24,    -- Sum of data value for the 18-24 age group
    CASE 
        WHEN SUM(f.Sample_Size) = 0 THEN 0
        ELSE (SUM(f.Data_Value) / SUM(f.Sample_Size) * 100)  -- Calculate the ratio
    END AS Data_Value_to_Sample_Size_Ratio
FROM Fact_Alcohol_Use f
JOIN Dim_Location l ON f.ZipCode = l.ZipCode
JOIN Dim_Break_Out bo ON f.Break_Out_ID = bo.Break_Out_ID
WHERE bo.Break_Out = '18-24'  -- Only for the 18-24 age group
GROUP BY l.County;

