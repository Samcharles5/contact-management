const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

console.log('contactController:', contactController);

// GET /contacts - Fetch all contacts
router.get('/', contactController.getAllContacts);

// POST /contacts - Create a new contact
router.post('/', contactController.createContact);

// GET /contacts/:id - Fetch a single contact by ID
router.get('/:id', contactController.getContactById);

// PUT /contacts/:id - Update an existing contact by ID
router.put('/:id', contactController.updateContact);

// DELETE /contacts/:id - Delete a contact by ID
router.delete('/:id', contactController.deleteContact);

module.exports = router;