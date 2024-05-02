# Todo List Cloud Native App

A scalable and efficient cloud-native application for managing tasks, leveraging various AWS services and modern web technologies.

## Features

- User authentication and registration with Amazon Cognito.
- Task management capabilities: add, view, and delete tasks.
- Notifications on task deletion using AWS SNS.
- Frontend built with React and styled using Ant Design for a responsive user interface.
- Backend logic executed in AWS Lambda functions.
- Data storage in AWS DynamoDB.
- Application deployed on AWS EC2 instances with Docker containers stored in AWS ECR.

## Demo
https://drive.google.com/file/d/1OfFTDkedJTgRzVj-2kaVGM6OgX1FWekq/view?usp=drive_link

## Prerequisites

- Node.js and npm installed.
- An AWS account.
- Docker installed for containerization.
- Git for version control.

## AWS Services Integration

- **Amazon Cognito**: Manages user authentication.
- **AWS SNS**: Sends notifications upon task deletions.
- **AWS Lambda**: Executes backend logic.
- **Amazon API Gateway**: Exposes Lambda functions as HTTP endpoints.
- **AWS DynamoDB**: Stores tasks and user data.
- **AWS EC2 & AWS ECR**: Hosts and stores the application's Docker containers for deployment.

## Installation

1. Install dependencies
   ```sh
   npm install
2. Configure AWS Services as described in the AWS Integration section.
3. Set up environment variables in a .env file:
   ```sh
   REACT_APP_USER_POOL_ID=<your_cognito_user_pool_id>
   REACT_APP_CLIENT_ID=<your_cognito_app_client_id>
   REACT_APP_SNS_TOPIC_ARN=<your_sns_topic_arn>

## Running the Application Locally
1. Start the application in development mode:
   ```sh
   npm start

## Building and Deploying
1. Build the application
   ```sh
   npm run build
2. Containerize the application using Docker.
3. Push the Docker images to AWS ECR.
4. Deploy the images on AWS EC2 instances.
