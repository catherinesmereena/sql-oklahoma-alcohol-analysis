import { NextResponse } from "next/server"

export async function GET() {
  const resumeContent = `Catherine Smereena Dommaty 
1687 Commonwealth Avenue, Boston, MA 
catherinesmereena.dommaty@gmail.com ,+1 (214)-516 5983, https://www.linkedin.com/in/catherine-smereena-dommaty-59036828b/ , 
https://github.com/catherinesmereena . 
 
PROFESSIONAL SUMMARY 
 
Data Science and Analytics graduate with hands-on experience in building scalable ML solutions for search, ranking, and query 
understanding. Proficient in Python, SQL, and cloud platforms with a strong focus on NLP and semantic retrieval. Skilled in 
embedding models, anomaly detection, and delivering data-driven strategies that enhance user experience and business performance.  
EDUCATION 
Northeastern University                        Boston, MA 
Master of Professional Studies Analytics, Statistical Analytics.                                                  GPA: 3.8 
Coursework: Data Mining, Data Modelling, Database Administration, Predictive Modelling, Python, Big Data Technologies, 
SQL, Data Warehousing, Risk Management, Data Visualization, Healthcare Pharmaceutical Analytics  
St. Joseph's Degree & PG College                                                                                                               Hyderabad, Telangana 
Bachelor of Commerce, Information Technology.            GPA: 4.0 
Coursework: Python, Data Modelling, Database Management, Statistics, Accounting, Business Tax Law 
PROJECTS  
Franchise Growth Analytics & Lead Optimization  
Built a lead scoring model to optimize conversions by analyzing account activity and engagement. Applied statistical tests (t-test, 
chi-square, Spearman) to identify success drivers. Developed real-time dashboards in Tableau, standardized datasets to reduce 
inconsistencies by 60%, and automated SQL pipelines to enhance reporting and operational decision-making. 
NFL & Housing Data-Predictive Statistical Analysis  
Built play-type classifiers (KNN, Logistic, Random Forest) (Pandas, NumPy, SciPy), boosting prediction accuracy to 73% using 
engineered features like Down Importance and Time Pressure. 
Applied stepwise regression on housing data, identifying square meters and cityPartRange as key predictors (R² = 0.754). 
Refined feature quality using VIF, IQR-based capping, and SMOTE to reduce noise and balance target classes. 
Designed modular ML pipelines for EDA and model tuning in Python (Pandas, Scikit-learn, Stats models). 
Customer Churn Prediction Model 
Built classification models (Logistic Regression, Random Forest) with an 85% accuracy rate to predict churn risk. 
Conducted A/B testing & experimental design to refine retention strategies based on data-driven insights. 
Developed a Power BI dashboard for leadership to track real-time churn trends. 
Netflix Content Analytics & Recommendation Optimization 
Analyzed 8,800+ Netflix titles using R and Python to uncover trends in genre, ratings, and viewer behavior. Applied clustering and 
association rule mining (Apriori, Eclat) to improve content recommendations. Conducted EDA and modeling to guide strategic 
decisions in content acquisition and enhance user engagement. 
Excel-Based Business Analytics  
Developed advanced Excel models to solve business problems in inventory management, profitability optimization, and financial 
forecasting. Key projects included EOQ and Monte Carlo simulations, linear programming for profit maximization, and stock price 
forecasting for NFLX and AMZN. Performed cost-benefit analysis and content segmentation using association rule mining. Leveraged 
Solver, What-If Analysis, and MAPE for validation. Delivered actionable insights on pricing, resource planning, and expansion.  
 
SKILLS 
        
Programming: Python, R, SQL 
Data Science: Visualization, Machine Learning, Predictive 
Analytics, Statistical Modeling, Data Cleaning, Feature 
Engineering 
Visualization: Tableau, Power BI, Matplotlib, Seaborn 
Databases: MySQL, PostgreSQL 
Big Data: Hadoop, Spark 
Optimization Techniques: Linear Programming, Gradient 
Descent, Hyperparameter Tuning 
Model Deployment: Flask 
Business Intelligence: Data Visualization Tools, Business 
Intelligence Reporting, Dashboarding 
Additional Tools: NLP& Query Understanding
 
CERTIFICATIONS 
 Data Science Professional Certificate (2024): Hands-on experience in machine learning, deep learning, and AI frameworks. 
 Python for Data Science Certification: Proficiency in NumPy, Pandas, Scikit-learn, TensorFlow. 
 SQL Programming Certification: Expertise in complex queries, joins, aggregations, and stored procedures.`

  // Set headers for file download
  return new NextResponse(resumeContent, {
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": 'attachment; filename="Catherine_Smereena_Dommaty_Resume.txt"',
    },
  })
}
