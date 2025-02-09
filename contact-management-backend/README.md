# Contact Management Application Backend

## Overview
This project is a Contact Management Application Backend built using Node.js and Express.js. It allows users to manage their contacts, including adding, updating, deleting, and viewing them. The application uses MongoDB for data storage.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Joi or express-validator for validation

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd contact-management-main
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Conmect your MongoDB locally:
    ``
   mongodb://localhost:27017/ 
   `` 
   
6. Start the application:
   ```
   npm start
   ```

## API Endpoints to test on postman

   
1. **Create Contacts**: POST : `` http://localhost:8000/contacts ``
   ```
   {
	"name": "sam",
    "email": "samcharles.sde@gmail.com",
    "phoneNumber": "7639387947",
    "address": "Thanjavur, Tamil Nadu"
   }
   ```

2. **Read Contacts**: GET : `` http://localhost:8000/contacts ``

3. **Update contact by ID**: PUT : `` http://localhost:8000/contacts/<ID> ``
   ```
   {
	"name": "sam charles",
    "email": "samcharles.sde@gmail.com",
    "phoneNumber": "7639387947",
    "address": "Thanjavur, Tamil Nadu"
   }
   ```

4. **Delete contact by ID**: DELETE : `` http://localhost:8000/contacts/<ID> ``

5. **Fetch a single contact by ID**: GET : `` http://localhost:8000/contacts/<ID> ``
