import { NextResponse } from "next/server"

export async function GET() {
  const resumeContent = `Catherine Smereena Dommaty 
1687 Commonwealth Avenue, Boston MA (Open for relocation), 
+1 (214)-516 5983, catherinesmereena.dommaty@gmail.com , Portfolio | LinkedIn | GitHub  

WORK EXPERIENCE 
Ipser Lab: AI Data Prompt Engineer Intern                  May 2025 – Present  
1.Contributed to the development of AI-driven travel agents by designing prompt flows that adapt to user emotion, tone, and intent using 
LangChain and LangGraph.  
2.Designed and tested modular agents with memory-aware behaviors, enabling real-time, personalized responses through structured GenAI 
workflows. 
3.Built Python-based unit tests to validate agent performance across diverse user contexts; optimized routing logic for scalable agent execution. 
4.Collaborated on emotional tone detection and prompt tuning using NLP lexicons, enhancing generative response quality and trust alignment. 
5.Supported multi-agent orchestration and asynchronous task delegation to improve coordination and output consistency across agent chains. 
6.Engineered modular, reusable Generative AI agents capable of adapting to real-time emotional tone, using multimodal NLP prompts, intent 
classification, and structured memory components. 

EDUCATION 
Northeastern University            GPA: 3.8  
Master's Degree, Analytics, Statistical Modelling           
Coursework: Data Mining, Data Modelling, Database Administration, Predictive Modelling, Python, Big Data Technologies, SQL,  
Data Warehousing, Risk Management, Data Visualization, Healthcare Pharmaceutical Analytics  

Osmania University, St. Joseph's Degree & PG College        GPA: 4.0  
Bachelor of Commerce, Information Technology          
Coursework: Python, Data Modelling, Database Management, Statistics, Accounting, Audit administration, Business Tax Law, Economics 

PROJECTS 
Franchise Growth Analytics & Lead Optimization 
• Built a lead scoring model to optimize conversions by analyzing account activity and engagement. 
• Applied statistical tests (t-test, chi-square, Spearman) to identify success drivers. 
• Developed real-time dashboards in Tableau, standardized datasets to reduce inconsistencies by 60%, and automated SQL pipelines 
to enhance reporting and operational decision-making.  

NFL & Housing Data-Predictive Statistical Analysis 
• Built play-type classifiers (KNN, Logistic, Random Forest) (Pandas, NumPy, SciPy), boosting prediction accuracy to 73% using 
engineered features like Down Importance and Time Pressure.  
• Applied stepwise regression on housing data, identifying square meters and cityPartRange as key predictors (R2 = 0.754). 
• Refined feature quality using VIF, IQR-based capping, and SMOTE to reduce noise and balance target classes. 
• Designed modular ML pipelines for EDA and model tuning in Python (Pandas, Scikit-learn, Stats models). 

Customer Churn Prediction Model 
• Built classification models (Logistic Regression, Random Forest) with an 85% accuracy rate to predict churn risk. 
• Conducted A/B testing & experimental design to refine retention strategies based on data-driven insights. 
• Developed a Power BI dashboard for leadership to track real-time churn trends. 

Excel-Based Business Analytics 
• Developed advanced Excel models to solve business problems in inventory management, profitability optimization, and financial 
forecasting. Key projects included EOQ and Monte Carlo simulations, linear programming for profit maximization, and stock 
price forecasting for NFLX and AMZN. Performed cost-benefit analysis and content segmentation using association rule mining. 
• Leveraged Solver, What-If Analysis, and MAPE for validation. Delivered actionable insights on pricing, resource planning, and expansion. 

SKILLS 
Programming Languages: Python, R, SQL 
Data Modeling & Warehousing: Snowflake, Databricks, PostgreSQL, MySQL, Generative AI, Large Language Models (LLM) 
Prompt Engineering: (LLMs), including GPT-based prompt engineering and optimization, 
Data Pipelines & ETL: dbt, Airflow, Python Automation, Data Transformation 
Statistical & Machine Learning: Regression, Classification, Clustering, Feature Engineering, SMOTE, Hyperparameter Tuning 
Big Data Technologies: Hadoop, Spark, PyTorch 
Data Visualization: Tableau, Power BI, Matplotlib, Seaborn 
Model Deployment & APIs: Flask, CI/CD Integration 
Optimization Techniques: Linear Programming, Gradient Descent 
Business Intelligence & Reporting: Dashboarding, Data Storytelling, KPI Reporting 
Data Quality & Annotation Tools: Label Studio, Prodigy, Snorkel, QA Auditing 

CERTIFICATIONS 
Agentic AI Bootcamp: Agentic AI, building autonomous single- and multi-agent systems using LangGraph and LangChain for real-world applications.  
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
