"use client"

import type React from "react"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Phone, FileText, BarChart2, DollarSign, LineChart, Package, TrendingUp } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "./components/theme-toggle"
import { ColorThemeToggle } from "./components/color-theme-toggle"
import { BarChart, Code, Database, Brain, Zap } from 'lucide-react'
import BlinkingNav from "./components/blinking-nav"
import { useColorTheme } from "./contexts/color-theme-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import RoleAnimation from "./components/role-animation"

export default function Home() {
  const { setColorTheme } = useColorTheme()

  // Set theme to pastel on page load
  useEffect(() => {
    setColorTheme("pastel")
  }, [setColorTheme])

  return (
    <main className="min-h-screen bg-gradient-to-br from-[color:var(--theme-gradient-from)]/50 via-[color:var(--theme-gradient-via)]/40 to-[color:var(--theme-gradient-to)]/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-white">Catherine Dommaty</h1>
        <div className="flex items-center gap-4">
          <BlinkingNav />
          <div className="flex items-center gap-2">
            <ColorThemeToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="container mx-auto py-16 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="block">Hello,</span>
              <span className="block">I am Catherine Smereena Dommaty</span>
            </h2>

            <RoleAnimation />

            <div className="bg-black/60 p-6 rounded-xl border border-[color:var(--theme-accent)]/20 mb-8 mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">About Me</h3>
              <p className="text-lg text-gray-300 mb-4">
                I'm Catherine Smereena Dommaty, a data scientist and analyst with a passion for turning complex datasets into clear, actionable insights. My work blends technical skill with curiosity — I enjoy digging into messy data, finding patterns, and building solutions that help teams make better decisions.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                I have experience across machine learning, automation, and analytics, with projects spanning predictive modeling, data visualization, and AI-driven decision systems. I'm fluent in Python, SQL, and tools like Power BI and Tableau, and I've worked on everything from healthcare analytics to sales performance optimization.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Beyond the code, I value collaboration and clarity. I've worked closely with cross-functional teams translating technical results into strategies that non-technical stakeholders can act on. I'm also fascinated by the future of AI in biotech, healthcare, and autonomous systems, and I'm always exploring ways to apply emerging technologies to solve real-world problems.
              </p>
              <p className="text-lg text-gray-300">
                When I'm not analyzing data, you'll probably find me learning something new, experimenting with creative projects, or diving into science-fiction worlds that spark my imagination.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                className="bg-[color:var(--theme-primary)] hover:bg-[color:var(--theme-primary)]/80 text-black"
                asChild
              >
                <a href="/api/download-resume" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button variant="outline" className="border-[color:var(--theme-primary)] text-white" asChild>
                <a
                  href="https://www.linkedin.com/in/catherine-smereena-dommaty-59036828b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="border-[color:var(--theme-secondary)] text-white" asChild>
                <a href="https://github.com/catherinesmereena" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-[color:var(--theme-accent)] text-white">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72">
                  <DropdownMenuLabel>Contact Information</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-2 cursor-default">
                    <Mail className="h-4 w-4 text-[color:var(--theme-secondary)]" />
                    <span>catherinesmereena.dommaty@gmail.com</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 cursor-default">
                    <Phone className="h-4 w-4 text-[color:var(--theme-primary)]" />
                    <span>+1 (214)-516 5983</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2" asChild>
                    <a
                      href="https://www.linkedin.com/in/catherine-smereena-dommaty-59036828b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4 text-[color:var(--theme-accent)]" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <a href="#contact" className="flex items-center justify-center w-full">
                      Go to Contact Form
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[color:var(--theme-primary)] via-[color:var(--theme-secondary)] to-[color:var(--theme-accent)] dark:from-[color:var(--theme-primary)]/30 dark:via-[color:var(--theme-secondary)]/30 dark:to-[color:var(--theme-accent)]/30 flex items-center justify-center shadow-lg p-2">
              <img
                src="/images/catherine-profile.jpg"
                alt="Catherine Smereena Dommaty"
                className="rounded-full w-60 h-60 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="container mx-auto py-16 px-4 md:px-0 bg-black/70 rounded-3xl shadow-sm mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Jabil Inc - Current */}
          <div className="bg-black/90 p-8 rounded-xl shadow-sm border border-[color:var(--theme-primary)]/20">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">Data Engineer</h3>
                <p className="text-xl text-[color:var(--theme-primary)] font-medium">Jabil Inc</p>
              </div>
              <div className="text-right">
                <p className="text-gray-300 font-medium">Aug 2025 – Present</p>
                <span className="inline-block px-2 py-1 bg-[color:var(--theme-primary)]/20 text-[color:var(--theme-primary)] text-xs rounded mt-1">Current</span>
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-accent)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Created dynamic and insightful dashboards to visualize Member performance, enrollment trends, and retention metrics, ensuring user-friendly, scalable, and optimized tools for real-time decision-making by faculty and administrators.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-accent)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Developed Power BI dashboards to support leadership decision-making across operational and performance metrics.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-accent)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Prepared, validated, and transformed structured datasets using SQL to ensure accuracy and consistency for reporting and analysis.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-accent)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Automated recurring reports and data updates, reducing manual effort and improving data accessibility for internal teams.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-accent)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Supported cross-functional stakeholders by translating operational data into clear, actionable insights.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-accent)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Ensured data integrity and documentation standards across reporting workflows.</span>
              </li>
            </ul>
          </div>

          {/* Ipser Lab */}
          <div className="bg-black/90 p-8 rounded-xl shadow-sm border border-[color:var(--theme-secondary)]/20">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">AI Data Prompt Engineer Intern</h3>
                <p className="text-xl text-[color:var(--theme-secondary)] font-medium">Ipser Lab</p>
              </div>
              <div className="text-right">
                <p className="text-gray-300 font-medium">May 2024</p>
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-secondary)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Contributed to the development of AI-driven travel agents by designing prompt flows that adapt to user emotion, tone, and intent using LangChain and LangGraph.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-secondary)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Designed and tested modular agents with memory-aware behaviors, enabling real-time, personalized responses through structured GenAI workflows.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-secondary)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Built Python-based unit tests to validate agent performance across diverse user contexts; optimized routing logic for scalable agent execution.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-secondary)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Collaborated on emotional tone detection and prompt tuning using NLP lexicons, enhancing generative response quality and trust alignment.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-secondary)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Supported multi-agent orchestration and asynchronous task delegation to improve coordination and output consistency across agent chains.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-secondary)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Engineered modular, reusable Generative AI agents capable of adapting to real-time emotional tone, using multimodal NLP prompts, intent classification, and structured memory components.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section - Enhanced */}
      <section id="skills" className="container mx-auto py-16 px-4 md:px-0 bg-black/70 rounded-3xl shadow-sm">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Programming & Tools */}
          <div className="bg-black/90 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[color:var(--theme-primary)]/20 rounded-lg">
                <Code className="h-5 w-5 text-[color:var(--theme-primary)]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Programming</h3>
            </div>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-primary)] mr-2"></div>
                Python (Pandas, NumPy, Scikit-learn)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-primary)] mr-2"></div>R (tidyverse, ggplot2)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-primary)] mr-2"></div>
                SQL (MySQL, PostgreSQL)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-primary)] mr-2"></div>
                Git & Version Control
              </li>
            </ul>
          </div>

          {/* AI & Machine Learning */}
          <div className="bg-black/90 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[color:var(--theme-secondary)]/20 rounded-lg">
                <Brain className="h-5 w-5 text-[color:var(--theme-secondary)]" />
              </div>
              <h3 className="text-xl font-semibold text-white">AI & ML</h3>
            </div>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-secondary)] mr-2"></div>
                Generative AI & LLMs
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-secondary)] mr-2"></div>
                Prompt Engineering
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-secondary)] mr-2"></div>
                LangChain & LangGraph
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-secondary)] mr-2"></div>
                PyTorch & TensorFlow
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-secondary)] mr-2"></div>
                Feature Engineering
              </li>
            </ul>
          </div>

          {/* Data Infrastructure */}
          <div className="bg-black/90 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[color:var(--theme-accent)]/20 rounded-lg">
                <Database className="h-5 w-5 text-[color:var(--theme-accent)]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Data Infrastructure</h3>
            </div>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-accent)] mr-2"></div>
                Snowflake & Databricks
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-accent)] mr-2"></div>
                dbt & Airflow
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-accent)] mr-2"></div>
                Hadoop & Spark
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[color:var(--theme-accent)] mr-2"></div>
                ETL Pipelines
              </li>
            </ul>
          </div>

          {/* Data Visualization */}
          <div className="bg-black/90 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-900/30 rounded-lg">
                <BarChart className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Visualization</h3>
            </div>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                Tableau & Power BI
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                Matplotlib & Seaborn
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                Dashboard Design
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                Data Storytelling
              </li>
            </ul>
          </div>

          {/* Data Quality & Tools */}
          <div className="bg-black/90 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-900/30 rounded-lg">
                <Zap className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Data Quality</h3>
            </div>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                Label Studio
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                Prodigy & Snorkel
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                QA Auditing
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                Flask & CI/CD
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section (formerly Portfolio) */}
      <section id="projects" className="container mx-auto py-16 px-4 md:px-0">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Projects</h2>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/50">
            <TabsTrigger value="all" className="text-white">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="data-science" className="text-white">
              Data Science
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NFL Play Type Prediction Project - NEW */}
            <ProjectCard
              title="NFL Play Type Prediction Using Machine Learning"
              description="Developed predictive models achieving 73% accuracy in classifying NFL play types (Run/Pass) using Random Forest algorithms. Engineered custom features like Down Importance and Field Position Factor, and performed feature selection using VIF analysis to optimize model performance. Implemented comprehensive data cleaning and preprocessing pipelines to handle 8,000+ game situations."
              tags={["Machine Learning", "Sports Analytics", "Python", "Feature Engineering"]}
              image="/images/nfl-ml-project.png"
              links={[{ icon: Github, label: "View Code", url: "https://github.com/catherinesmereena" }]}
            />
            <ProjectCard
              title="Franchise Growth Analytics & Lead Optimization"
              description="Developed a lead scoring model that increased conversion rates by 35% by analyzing franchise account activity patterns and customer engagement metrics. Applied statistical modeling techniques (t-tests, chi-square, Spearman correlation) to identify key drivers of success, and built real-time performance dashboards using Python and Tableau to track partner efficiency and lead conversions across 200+ franchise locations."
              tags={["Statistical Modeling", "Python", "SQL", "Tableau"]}
              image="/images/franchise-analysis.jpeg"
              links={[{ icon: Github, label: "View Project", url: "https://github.com/catherinesmereena" }]}
            />
            <ProjectCard
              title="Fraud Detection System for E-commerce Transactions"
              description="Implemented an advanced anomaly detection system using Isolation Forest and Autoencoder neural networks that identified fraudulent transactions with 20% higher precision than rule-based systems. Leveraged SQL and Python to extract patterns from over 1 million transaction logs, and developed semantic embeddings to detect deceptive patterns in user behaviors, reducing false positives by 15% while maintaining high recall."
              tags={["Anomaly Detection", "Python", "SQL"]}
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sgsB71XNjMIYubvDvquJOagXjXxHIk.png"
            />
            <ProjectCard
              title="Customer Churn Prediction Model"
              description="Built ensemble classification models (Logistic Regression, Random Forest, XGBoost) achieving 85% accuracy in predicting customer churn risk for a subscription-based service with 50,000+ users. Conducted A/B testing and experimental design to refine retention strategies, resulting in a 12% reduction in monthly churn rate. Developed an interactive Power BI dashboard enabling leadership to track real-time churn trends and segment at-risk customers."
              tags={["Classification", "A/B Testing", "Power BI"]}
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jYVt7l1D7Xi6tZQM233b7r7ZUIDrbl.png"
            />
            <ProjectCard
              title="Netflix Content Analytics & Recommendation System"
              description="Analyzed 8,807 Netflix titles using R to identify content trends, viewer preferences, and key factors driving subscriber retention. Applied association mining algorithms (Apriori, Eclat) and clustering techniques to enhance Netflix's recommendation system, improving content discovery by 18%. Conducted exploratory data analysis and statistical modeling to assess rating trends, genre popularity, and content acquisition insights, providing actionable recommendations for content strategy."
              tags={["Association Mining", "R", "EDA"]}
              image="/images/netflix-project.png"
              links={[
                {
                  icon: Github,
                  label: "View Code",
                  url: "https://github.com/catherinesmereena/netflix-content-analysis",
                },
              ]}
            />
            <Card className="overflow-hidden bg-black/80 border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/excel-analytics.png"
                  alt="Business Analytics in Excel"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">Business Analytics in Excel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  A comprehensive portfolio of Excel-driven business analytics projects addressing real-world challenges
                  across multiple domains. Projects include inventory optimization reducing stockouts by 23%,
                  profitability forecasting with 92% accuracy, operational planning tools that improved resource
                  allocation by 15%, and strategic decision-making frameworks that quantified business outcomes through
                  sophisticated financial modeling and what-if analysis.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {["Excel", "Data Analysis", "Business Intelligence", "Forecasting"].map((tag, index) => (
                    <Badge
                      key={index}
                      className="bg-[color:var(--theme-secondary)]/20 text-gray-200 hover:bg-[color:var(--theme-secondary)]/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 w-full">
                  <Button
                    variant="outline"
                    className="w-full border-[color:var(--theme-accent)] text-white justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/catherinesmereena/optimizing-profitability"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DollarSign className="mr-2 h-4 w-4" /> Profit Maximization
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[color:var(--theme-accent)] text-white justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/catherinesmereena/optimizing-inventory-management"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Package className="mr-2 h-4 w-4" /> Inventory Optimization
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[color:var(--theme-accent)] text-white justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/catherinesmereena/stock-price-forecasting"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TrendingUp className="mr-2 h-4 w-4" /> Stock Price Forecasting
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[color:var(--theme-accent)] text-white justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/catherinesmereena/benefit-cost-analysis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BarChart2 className="mr-2 h-4 w-4" /> Cost-Benefit Analysis
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[color:var(--theme-accent)] text-white justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/catherinesmereena/netflix-content-analysis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" /> Netflix Content Analysis
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="data-science" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NFL Play Type Prediction Project - NEW */}
            <ProjectCard
              title="NFL Play Type Prediction Using Machine Learning"
              description="Developed predictive models achieving 73% accuracy in classifying NFL play types (Run/Pass) using Random Forest algorithms. Engineered custom features like Down Importance and Field Position Factor, and performed feature selection using VIF analysis to optimize model performance. Implemented comprehensive data cleaning and preprocessing pipelines to handle 8,000+ game situations."
              tags={["Machine Learning", "Sports Analytics", "Python", "Feature Engineering"]}
              image="/images/nfl-ml-project.png"
              links={[{ icon: Github, label: "View Code", url: "https://github.com/catherinesmereena" }]}
            />
            <ProjectCard
              title="Fraud Detection System for E-commerce Transactions"
              description="Implemented an advanced anomaly detection system using Isolation Forest and Autoencoder neural networks that identified fraudulent transactions with 20% higher precision than rule-based systems. Leveraged SQL and Python to extract patterns from over 1 million transaction logs, and developed semantic embeddings to detect deceptive patterns in user behaviors, reducing false positives by 15% while maintaining high recall."
              tags={["Anomaly Detection", "Python", "SQL"]}
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sgsB71XNjMIYubvDvquJOagXjXxHIk.png"
            />
            <ProjectCard
              title="Customer Churn Prediction Model"
              description="Built ensemble classification models (Logistic Regression, Random Forest, XGBoost) achieving 85% accuracy in predicting customer churn risk for a subscription-based service with 50,000+ users. Conducted A/B testing and experimental design to refine retention strategies, resulting in a 12% reduction in monthly churn rate. Developed an interactive Power BI dashboard enabling leadership to track real-time churn trends and segment at-risk customers."
              tags={["Classification", "A/B Testing", "Power BI"]}
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jYVt7l1D7Xi6tZQM233b7r7ZUIDrbl.png"
            />
          </TabsContent>

          <TabsContent value="analytics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NFL Play Type Prediction Project - NEW */}
            <ProjectCard
              title="NFL Play Type Prediction Using Machine Learning"
              description="Developed predictive models achieving 73% accuracy in classifying NFL play types (Run/Pass) using Random Forest algorithms. Engineered custom features like Down Importance and Field Position Factor, and performed feature selection using VIF analysis to optimize model performance. Implemented comprehensive data cleaning and preprocessing pipelines to handle 8,000+ game situations."
              tags={["Machine Learning", "Sports Analytics", "Python", "Feature Engineering"]}
              image="/images/nfl-ml-project.png"
              links={[{ icon: Github, label: "View Code", url: "https://github.com/catherinesmereena" }]}
            />
            <ProjectCard
              title="Franchise Growth Analytics & Lead Optimization"
              description="Developed a lead scoring model that increased conversion rates by 35% by analyzing franchise account activity patterns and customer engagement metrics. Applied statistical modeling techniques (t-tests, chi-square, Spearman correlation) to identify key drivers of success, and built real-time performance dashboards using Python and Tableau to track partner efficiency and lead conversions across 200+ franchise locations."
              tags={["Statistical Modeling", "Python", "SQL", "Tableau"]}
              image="/images/franchise-analysis.jpeg"
              links={[{ icon: Github, label: "View Project", url: "https://github.com/catherinesmereena" }]}
            />
            <ProjectCard
              title="Netflix Content Analytics & Recommendation System"
              description="Analyzed 8,807 Netflix titles using R to identify content trends, viewer preferences, and key factors driving subscriber retention. Applied association mining algorithms (Apriori, Eclat) and clustering techniques to enhance Netflix's recommendation system, improving content discovery by 18%. Conducted exploratory data analysis and statistical modeling to assess rating trends, genre popularity, and content acquisition insights, providing actionable recommendations for content strategy."
              tags={["Association Mining", "R", "EDA"]}
              image="/images/netflix-project.png"
              links={[
                {
                  icon: Github,
                  label: "View Code",
                  url: "https://github.com/catherinesmereena/netflix-content-analysis",
                },
              ]}
            />
            <Card className="overflow-hidden bg-black/80 border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/excel-analytics.png"
                  alt="Business Analytics in Excel"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">Business Analytics in Excel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  A comprehensive portfolio of Excel-driven business analytics projects addressing real-world challenges
                  across multiple domains. Projects include inventory optimization reducing stockouts by 23%,
                  profitability forecasting with 92% accuracy, operational planning tools that improved resource
                  allocation by 15%, and strategic decision-making frameworks that quantified business outcomes through
                  sophisticated financial modeling and what-if analysis.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {["Excel", "Data Analysis", "Business Intelligence", "Forecasting"].map((tag, index) => (
                    <Badge
                      key={index}
                      className="bg-[color:var(--theme-secondary)]/20 text-gray-200 hover:bg-[color:var(--theme-secondary)]/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 w-full">
                  <Button
                    variant="outline"
                    className="w-full border-[color:var(--theme-accent)] text-white justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/catherinesmereena/optimizing-profitability"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DollarSign className="mr-2 h-4 w-4" /> Profit Maximization
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[color:var(--theme-accent)] text-white justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/catherinesmereena/optimizing-inventory-management"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Package className="mr-2 h-4 w-4" /> Inventory Optimization
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[color:var(--theme-accent)] text-white justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/catherinesmereena/stock-price-forecasting"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TrendingUp className="mr-2 h-4 w-4" /> Stock Price Forecasting
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[color:var(--theme-accent)] text-white justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/catherinesmereena/benefit-cost-analysis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BarChart2 className="mr-2 h-4 w-4" /> Cost-Benefit Analysis
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[color:var(--theme-accent)] text-white justify-start"
                    asChild
                  >
                    <a
                      href="https://github.com/catherinesmereena/netflix-content-analysis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" /> Netflix Content Analysis
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Education Section - Redesigned */}
      <section id="education" className="container mx-auto py-16 px-4 md:px-0 bg-black/70 rounded-3xl shadow-sm">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Education</h2>

        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="space-y-6">
              <div className="bg-black/90 p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Northeastern University</h4>
                    <p className="text-gray-300">Master's Degree, Analytics, Statistical Modelling</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300">Boston, MA</p>
                    <p className="text-gray-300">GPA: 3.8</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-300">
                  <span className="font-medium">Coursework:</span> Data Mining, Data Modelling, Database Administration,
                  Predictive Modelling, Python, Big Data Technologies, SQL, Data Warehousing, Risk Management, Data
                  Visualization, Healthcare Pharmaceutical Analytics
                </p>
              </div>

              <div className="bg-black/90 p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Osmania University, St. Joseph's Degree & PG College</h4>
                    <p className="text-gray-300">Bachelor of Commerce, Information Technology</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300">Hyderabad, Telangana</p>
                    <p className="text-gray-300">GPA: 4.0</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-300">
                  <span className="font-medium">Coursework:</span> Python, Data Modelling, Database Management,
                  Statistics, Accounting, Audit administration, Business Tax Law, Economics
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
            <div className="space-y-4">
              <div className="bg-black/90 p-6 rounded-xl shadow-sm border border-[color:var(--theme-secondary)]/20">
                <h4 className="text-xl font-semibold text-white">Agentic AI Bootcamp</h4>
                <p className="text-gray-300">
                  Agentic AI, building autonomous single- and multi-agent systems using LangGraph and LangChain for real-world applications.
                </p>
              </div>

              <div className="bg-black/90 p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-white">Data Science Professional Certificate (2024)</h4>
                <p className="text-gray-300">
                  Hands-on experience in machine learning, deep learning, and AI frameworks.
                </p>
              </div>

              <div className="bg-black/90 p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-white">Python for Data Science Certification</h4>
                <p className="text-gray-300">Proficiency in NumPy, Pandas, Scikit-learn, TensorFlow.</p>
              </div>

              <div className="bg-black/90 p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-white">SQL Programming Certification</h4>
                <p className="text-gray-300">
                  Expertise in complex queries, joins, aggregations, and stored procedures.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              className="bg-[color:var(--theme-primary)] hover:bg-[color:var(--theme-primary)]/80 text-black"
              asChild
            >
              <a href="/api/download-resume" download>
                <Download className="mr-2 h-4 w-4" /> Download Full Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified */}
      <section id="contact" className="container mx-auto py-16 px-4 md:px-0">
        <div className="max-w-3xl mx-auto bg-black/70 p-8 rounded-3xl shadow-sm">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            <p className="text-gray-300 mb-8 text-center max-w-lg">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
              <div className="flex items-center justify-center md:justify-end">
                <Phone className="h-5 w-5 text-[color:var(--theme-primary)] mr-3" />
                <p className="text-gray-300">+1 (214)-516 5983</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 text-[color:var(--theme-secondary)] mr-3" />
                <p className="text-gray-300">catherinesmereena.dommaty@gmail.com</p>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Linkedin className="h-5 w-5 text-[color:var(--theme-accent)] mr-3" />
                <a
                  href="https://www.linkedin.com/in/catherine-smereena-dommaty-59036828b/"
                  className="text-gray-300 hover:text-[color:var(--theme-accent)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Github className="h-5 w-5 text-[color:var(--theme-primary)] mr-3" />
                <a
                  href="https://github.com/catherinesmereena"
                  className="text-gray-300 hover:text-[color:var(--theme-primary)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/70 py-8">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} Catherine Smereena Dommaty. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/catherine-smereena-dommaty-59036828b/"
                className="text-gray-300 hover:text-[color:var(--theme-primary)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/catherinesmereena"
                className="text-gray-300 hover:text-[color:var(--theme-secondary)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:catherinesmereena.dommaty@gmail.com"
                className="text-gray-300 hover:text-[color:var(--theme-accent)]"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

interface ProjectLink {
  icon: React.ElementType
  label: string
  url: string
  dropdown?: { label: string; url: string }[]
}

function ProjectCard({
  title,
  description,
  tags,
  image,
  links,
}: {
  title: string
  description: string
  tags: string[]
  image: string
  links?: ProjectLink[]
}) {
  return (
    <Card className="overflow-hidden bg-black/80 border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300 mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-[color:var(--theme-secondary)]/20 text-gray-200 hover:bg-[color:var(--theme-secondary)]/30"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {links ? (
          <div className="flex gap-2 w-full">
            {links.map((link, index) =>
              link.dropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex-1 border-[color:var(--theme-accent)] text-white">
                      <link.icon className="mr-2 h-4 w-4" /> {link.label}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.dropdown.map((item, idx) => (
                      <DropdownMenuItem key={idx} asChild>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          {item.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={index}
                  variant="outline"
                  className="flex-1 border-[color:var(--theme-accent)] text-white"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="mr-2 h-4 w-4" /> {link.label}
                  </a>
                </Button>
              ),
            )}
          </div>
        ) : (
          <Button variant="outline" className="w-full border-[color:var(--theme-accent)] text-white">
            View Project
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
