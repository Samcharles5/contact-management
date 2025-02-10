# Contact Management Application

A full-featured Contact Management Application built using the **MERN stack**. While the original backend assessment focused solely on developing the backend, I took the opportunity to also build a complete frontend for a seamless user experience. The application enables users to create, read, update, delete, and search contacts.

**Live Demo Check it out:** ([LIVE](https://contact-management-frontend-xi.vercel.app/))

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)

---

## Overview

This application is a Contact Management System built using the **MERN stack** (MongoDB, Express, React, and Node.js). It allows users to:
- View all contacts.
- Create a new contact.
- Update an existing contact.
- Delete a contact.
- Search contacts by ID (and optionally by name or email).

While the assessment originally required only backend development using Node.js and Express.js with MongoDB, I expanded the project to include a React-based frontend that interacts with the backend via RESTful APIs.

---

## Features

- **CRUD Operations:** Create, read, update, and delete contacts.
- **Search Functionality:** Search contacts by ID (bonus: can be extended to search by name or email).
- **Data Validation & Error Handling:** Ensures required fields are provided and returns appropriate HTTP status codes.
- **Modular & Clean Code:** Code is organized into separate modules with proper commenting and structure.
- **Live Demo:** Access the live version of the application through the provided link.

---

## API Endpoints

The backend is built with Node.js and Express.js and uses MongoDB as the database. Below are the key endpoints:

1. **GET /contacts**
   - **Description:** Fetch a list of all contacts.
   - **Response:** An array of contacts. Each contact includes:
     - Contact ID
     - Name
     - Email
     - Phone Number
     - Address (Optional)
     - Created At (Timestamp)

2. **POST /contacts**
   - **Description:** Create a new contact.
   - **Input Fields:**
     - Name (required)
     - Email (required)
     - Phone Number (required)
     - Address (optional)
   - **Response:** The newly created contact with a unique Contact ID.

3. **PUT /contacts/:id**
   - **Description:** Update an existing contact based on its ID.
   - **Input Fields:**
     - Name (required)
     - Email (required)
     - Phone Number (required)
     - Address (optional)
   - **Response:** The updated contact.

4. **DELETE /contacts/:id**
   - **Description:** Delete a contact based on its ID.
   - **Response:** A success message confirming deletion.

5. **GET /contacts/:id**
   - **Description:** Fetch a single contact by its ID.
   - **Response:** The contact details.

*Bonus Feature (Optional):*  
- **Search Contacts:** Users can search contacts by name or email (implemented as an enhancement).

---

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React.js
- **Testing:** Jest
- **Version Control:** Git

---

## Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or using a cloud provider like MongoDB Atlas)
- Git

### Clone the Repository
```bash
git clone https://github.com/yourusername/contact-management-app.git
cd contact-management-app
