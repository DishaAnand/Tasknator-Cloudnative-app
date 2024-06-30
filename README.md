# 📝 Tasknator Cloud Native App

Tasknator is a user-friendly React-based To-Do list app with AWS SNS email notifications for task deletions. It leverages various AWS services to ensure scalability, security, and efficient deployment.

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application Locally](#running-the-application-locally)
- [Building and Deploying](#building-and-deploying)

## Features
- **User Authentication**: Secure user authentication and registration using Amazon Cognito.
- **Task Management**: Add, view, and delete tasks.
- **Notifications**: Receive email notifications upon task deletions using AWS SNS.
- **Frontend**: Built with React and styled using Ant Design.
- **Backend**: AWS Lambda functions handle backend logic.
- **Data Storage**: Tasks and user data stored in AWS DynamoDB.
- **Deployment**: Containerized application deployed on AWS EC2 instances using Docker and AWS ECR.

## Architecture
Tasknator utilizes a serverless architecture with the following AWS services:
- **Amazon Cognito**: Manages user authentication.
- **AWS SNS**: Sends notifications on task deletions.
- **AWS Lambda**: Executes backend logic.
- **Amazon API Gateway**: Exposes Lambda functions as HTTP endpoints.
- **AWS DynamoDB**: Stores tasks and user data.
- **AWS EC2 & AWS ECR**: Hosts and stores the application's Docker containers for deployment.

![Architecture Diagram](path_to_architecture_diagram.png)  <!-- Add the architecture diagram here -->

## Demo
Check out the live demo [here](https://drive.google.com/file/d/1OfFTDkedJTgRzVj-2kaVGM6OgX1FWekq/view?usp=drive_link).

## Prerequisites
- Node.js and npm installed.
- An AWS account.
- Docker installed for containerization.
- Git for version control.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/DishaAnand/Tasknator-Cloudnative-app.git
    cd Tasknator-Cloudnative-app
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Configuration
1. Configure AWS services and set up environment variables in a `.env` file:
    ```bash
    REACT_APP_USER_POOL_ID=<your_cognito_user_pool_id>
    REACT_APP_CLIENT_ID=<your_cognito_app_client_id>
    REACT_APP_SNS_TOPIC_ARN=<your_sns_topic_arn>
    ```

## Running the Application Locally
1. Start the application in development mode:
    ```bash
    npm start
    ```

## Building and Deploying
1. Build the application:
    ```bash
    npm run build
    ```
2. Containerize the application using Docker:
    ```bash
    docker build -t tasknator-app .
    ```
3. Push the Docker image to AWS ECR:
    ```bash
    aws ecr create-repository --repository-name tasknator-app
    aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com
    docker tag tasknator-app:latest <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/tasknator-app:latest
    docker push <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/tasknator-app:latest
    ```
4. Deploy the Docker container on AWS EC2 instances using your preferred deployment method (e.g., ECS, Kubernetes).
