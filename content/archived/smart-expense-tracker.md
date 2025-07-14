---
title: "Smart Expense Tracker"
date: 2025-03-21
categories: ["prototype"]
tags: ["Product"]
---

The Smart Expense Tracker with Auto-Categorization is a cloud-native application built on AWS serverless architecture. The system automates the tedious process of expense tracking by leveraging AWS services to process receipts, categorize transactions, and provide financial insights. The application offers several key features including receipt scanning and data extraction using AWS Textract, automatic expense categorization with AI (using AWS Bedrock), comprehensive expense tracking, budget setting with automated alerts via SNS, and financial report generation in CSV or PDF formats.

## System Architecture
The application uses a serverless architecture centered around AWS Lambda functions and Amazon RDS. This design ensures scalability, reliability, and cost efficiency by leveraging AWS managed services.

![Smart Expense Tracker Architecture](/images/projects/smart-expense-tracker/architecture.png)

The Client Application provides a web/mobile interface for user interactions. AWS API Gateway exposes the backend as a RESTful API and routes client requests to appropriate Lambda functions. Four AWS Lambda functions handle all backend operations, with a custom datatier module managing database interactions. Amazon RDS (MySQL) serves as the persistent data store for users, transactions, and receipt metadata. AWS S3 securely stores uploaded receipt images, while AWS Textract processes these images with OCR to extract transaction details. An AI service (AWS Bedrock) automatically categorizes expenses based on merchant and description. Finally, Amazon SNS sends budget alerts via email notifications when spending exceeds predefined thresholds.

## Component Interactions
In the receipt processing flow, a user uploads a receipt image through the frontend application. The API Gateway routes this request to a dedicated Lambda function, which stores the receipt in S3 and creates metadata in RDS. The system then leverages AWS Textract to analyze the image and extract key details such as merchant name, date, and amount. This extracted information is passed to an AI model that categorizes the transaction based on the merchant and description. The complete transaction details are then stored in the RDS database for future reference and analysis.

The budget monitoring process begins when a user sets category-specific budget limits via the frontend. A Lambda function updates these settings in the RDS database. Later, when new transactions are processed, the system evaluates current spending against the budget thresholds. If spending exceeds a predefined limit, the SNS service automatically sends a notification to the user's registered email address, providing timely awareness of their financial situation.

For financial reporting, users can request customized reports through the frontend. A Lambda function queries the relevant transaction data from RDS based on user-specified parameters. This data is then processed and formatted according to the user's preferences, such as report type (transaction details or category summaries) and format (CSV or PDF). The final report is delivered back to the client via the API response, providing valuable insights for financial planning and tax preparation.

## API Specification
The application exposes a RESTful API through AWS API Gateway with the following endpoints:

### 1. Receipt Upload and Analysis
**POST /upload**
- **Purpose**: Upload a receipt image for processing
- **Request Body**: Multipart form data with image file
  - `userid` (required): User identifier
  - `filename`: Name of the receipt image
  - `data`: Base64-encoded image data
- **Process**: The system validates if the user exists, stores the receipt image in S3, creates a receipt record in the database, and initiates asynchronous processing. The function also checks whether the user's current monthly spending exceeds the monthly budget, and sends an email alert to the user through SNS.
- **Response**:
  - Status 200: Success, returns transactionid, userid, amount, category, time
  - Status 400: Bad request (missing parameters)
  - Status 500: Server error

### 2. Expense Retrieval
**GET /expenses**
- **Purpose**: Retrieve user expenses with optional filtering
- **Query Parameters**:
  - `userid` (required): User identifier
  - `start_date` (optional): Filter transactions after this date (YYYY-MM-DD)
  - `end_date` (optional): Filter transactions before this date (YYYY-MM-DD)
  - `category` (optional): Filter by expense category
- **Response**:
  - Status 200: Success, returns list of transactions and summary
  - Status 400: Bad request (missing parameters)
  - Status 500: Server error

### 3. Budget Management
**POST /budget_and_alert**
- **Purpose**: Set monthly spending budget
- **Process**: The system updates the user's budget in the database, checks current month's spending against the budget, and sends an SNS notification if spending exceeds the budget.
- **Response**:
  - Status 200: Budget set successfully
  - Status 400: Bad request (missing parameters)
  - Status 500: Server error

### 4. Financial Reports
**GET /report**
- **Purpose**: Generate and export financial report
- **Query Parameters**:
  - `userid` (required): User identifier
  - `format` (optional): "csv" or "pdf" (default: "csv")
  - `report_type` (optional): "transactions" or "summary" (default: "transactions")
  - `start_date` (optional): Starting date for report
  - `end_date` (optional): Ending date for report
  - `category` (optional): Filter by category
- **Report Types**: The "transactions" type lists all individual transactions with details, while the "summary" type provides aggregated statistics by category (count, total, average, max, min).
- **Output Formats**: The system supports CSV (standard comma-separated values) and PDF (HTML structure that would be converted to PDF) formats.
- **Process**: The system retrieves filtered transaction data from the database, generates the report in the requested format, and encodes the report data as base64 for transmission.
- **Response**:
  - Status 200: Success, returns report data
  - Status 400: Bad request (missing parameters)
  - Status 500: Server error

## Database Schema
The application uses a MySQL database on Amazon RDS with the following schema:

![Database Schema](/images/projects/smart-expense-tracker/sql_schema.png)

- The **Users** table stores basic user information. The `userid` field serves as the primary key and unique identifier for each user. The `email` field contains the user's email address for notifications. The `budget` field is a JSON object storing category-specific budget limits (e.g., {"Food": 500, "Transport": 200}). The `sns_topic_arn` field contains the Amazon SNS topic ARN for sending notifications to this user.

- The **Transactions** table records all user expenditures. The `transactionid` field is an auto-incrementing primary key. The `userid` field is a foreign key reference to the Users table. The `amount` field stores the transaction amount as a decimal with two places of precision. The `category` field contains the expense category (e.g., Food, Transport, Entertainment) assigned by the AI. The `time` field records when the transaction occurred.

- The **Receipts** table tracks uploaded receipt images and their processing status. The `receiptid` field is an auto-incrementing primary key. The `userid` field references the Users table. The `status` field indicates the current processing status (e.g., "uploaded", "processing", "completed", "error"). The `s3_location` field contains the S3 bucket path to the stored receipt image. The `upload_time` field captures when the receipt was uploaded, while `analysis_time` records when processing was completed.

## Lambda Functions
The system is implemented using four main AWS Lambda functions, each dedicated to a specific aspect of the application.

1. The **Receipt Upload and Analysis** function processes receipt images and extracts transaction details. It handles receipt uploads and storage in S3, uses AWS Textract for OCR processing, employs an AI model for merchant recognition and expense categorization, creates transaction records from extracted data, and updates receipt status through processing stages.

2. The **Get Past Expenses** function retrieves and filters transaction records. It supports filtering by date range and category, generates transaction summaries and category breakdowns, calculates spending statistics (totals, counts), and returns a formatted JSON response.

3. The **Set Budget and Trigger Alerts** function updates budget settings and sends alerts. It updates user budget settings in the database, checks current spending against budget limits, sends notifications via SNS when thresholds are exceeded, calculates budget utilization percentages, and supports category-specific budgets.

4. The **Export Financial Reports** function generates financial reports in different formats. It supports multiple report types (transactions, summary), generates reports in CSV or PDF format, applies filtering options (date range, category), and encodes reports as base64 for transmission.

## Conclusion
The Smart Expense Tracker with Auto-Categorization represents a significant improvement over traditional expense tracking applications by leveraging AWS cloud services and artificial intelligence. By automating the tedious aspects of expense management, the system allows users to gain financial insights with minimal effort.