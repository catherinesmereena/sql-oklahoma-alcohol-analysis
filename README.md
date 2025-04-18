# sql-oklahoma-alcohol-analysis
Star-schema SQL data warehouse for analyzing adolescent alcohol use in Oklahoma using BRFSS data. Includes data transformation, staging, normalization, and public health insights.
Adolescent Alcohol Use in Oklahoma – SQL Data Warehouse Project

This project analyzes adolescent alcohol use patterns in Oklahoma using the Behavioral Risk Factor Surveillance System (BRFSS) dataset. A star schema–based SQL data warehouse was built to monitor and assess consumption trends among individuals aged 18–24 across cities and counties.

---

##  Objectives
- Identify geographic and demographic trends in alcohol consumption
- Normalize public health data into a star schema for efficient querying
- Use SQL to detect high-risk areas and support data-driven intervention strategies

---

##  Database Design

**Fact Table**:  
- `Fact_Alcohol_Use` – Quantitative data (sample size, data value, population)

**Dimension Tables**:  
- `Dim_Question` – Survey question identifiers  
- `Dim_Response` – Response codes and categories  
- `Dim_Location` – City, County, ZipCode  
- `Dim_Break_Out` – Demographic breakout (e.g., Age group 18–24)  
- `Dim_Break_Out_Category` – Demographic segmentation

---

##  Key Insights
- Ranked counties and cities by alcohol use prevalence  
- Identified high-risk ZIP codes among young adults  
- Revealed demographic patterns for targeted outreach

---

##  Tools & Technologies
- MySQL · SQL · MySQL Workbench · ERDPlus  
- Excel for data staging and cleaning

---

##  Files Included
- `Oklahoma_Alcohol_Use_DB.sql` – SQL schema and sample queries  
- `Alcohol_Use_Report.docx` – Full report with visualizations and analysis  
- `BRFSS_OK_Staging.xlsx`, `Demographics_OK.xlsx`, `Demographics_Staging_1.xlsx` – Raw and cleaned staging data

---

##  Summary
This project showcases how a well-structured SQL data warehouse can support public health monitoring, enabling the identification of behavioral risk patterns and guiding targeted health interventions across geographic and demographic groups.
