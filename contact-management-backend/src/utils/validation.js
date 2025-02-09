const Joi = require('joi');

const contactSchema = Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().min(10).max(15).required(),
    address: Joi.string().optional(),
});

const validateContact = (contact) => {
    return contactSchema.validate(contact);
};

module.exports = {
    validateContact,
};