const Contact = require('../models/contactModel');
const contactService = require('../services/contactService');

// Fetch all contacts
exports.getAllContacts = async (req, res) => {
    try {;
        const contacts = await contactService.getAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contacts', error });
    }
};

// Create a new contact
exports.createContact = async (req, res) => {
    const { name, email, phoneNumber, address } = req.body;
    try {
        const newContact = await contactService.createContact({ name, email, phoneNumber, address });
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: 'Error creating contact', error });
    }
};

// Update an existing contact
exports.updateContact = async (req, res) => {
    const { id } = req.params;
    const { name, email, phoneNumber, address } = req.body;
    try {
        const updatedContact = await contactService.updateContact(id, { name, email, phoneNumber, address });
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(400).json({ message: 'Error updating contact', error });
    }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await contactService.deleteContact(id);
        if (!result) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contact', error });
    }
};

// Fetch a single contact by ID
exports.getContactById = async (req, res) => {
    const { id } = req.params;
    try {
        const contact = await contactService.getContactById(id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contact', error });
    }
};