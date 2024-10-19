
const Contact = require('../models/contact'); 


exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.createContact = async (req, res) => {
    console.log(req.body);
    
    const { firstname, lastname, email } = req.body;

    if (!firstname || !lastname || !email) {
        return res.status(400).json({ message: "Firstname, lastname, and email are required." });
    }

    const contact = new Contact(req.body);
    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedContact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json(updatedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.deleteContactById = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json({ message: 'Contact deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.deleteAllContacts = async (req, res) => {
    try {
        await Contact.deleteMany();
        res.status(200).json({ message: 'All contacts deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
