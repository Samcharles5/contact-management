# Contact Management Application

This is a full-stack Contact Management Application built with the MERN stack. Although the assessment focused on backend development using Node.js, Express, and MongoDB, I also developed a React frontend to showcase a complete solution.

**Live Demo:** [[LIVE](https://contact-management-frontend-xi.vercel.app/)]

## Features

- **CRUD Operations:** Create, read, update, and delete contacts.
- **Search Contacts:** Fetch a contact by ID.
- **Validation & Error Handling:** Ensures required fields are provided and returns proper HTTP status codes.

## API Endpoints

- **GET /contacts**  
  Fetch all contacts.

- **POST /contacts**  
  Create a new contact.  
  **Fields:** `name`, `email`, `phone`, `address` (optional).

- **PUT /contacts/:id**  
  Update an existing contact by ID.  
  **Fields:** `name`, `email`, `phone`, `address` (optional).

- **DELETE /contacts/:id**  
  Delete a contact by ID.

- **GET /contacts/:id**  
  Fetch a single contact by ID.

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React
- **Testing:** Jest

## Setup & Installation

### Backend
1. **Clone the repository:**
   ```bash
   git clone https://github.com/samcharles5/contact-management-app.git
   cd contact-management-app/backend
