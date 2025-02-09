// contactService.js

const Contact = require('../models/contactModel');

// Fetch all contacts
const getAllContacts = async () => {
    return await Contact.find();
};

// Create a new contact
const createContact = async (contactData) => {
    const contact = new Contact(contactData);
    return await contact.save();
};

// Update an existing contact
const updateContact = async (id, contactData) => {
    return await Contact.findByIdAndUpdate(id, contactData, { new: true });
};

// Delete a contact
const deleteContact = async (id) => {
    return await Contact.findByIdAndDelete(id);
};

// Fetch a single contact by ID
const getContactById = async (id) => {
    return await Contact.findById(id);
};

module.exports = {
    getAllContacts,
    createContact,
    updateContact,
    deleteContact,
    getContactById,
};