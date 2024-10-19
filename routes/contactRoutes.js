
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');


router.get('/', contactController.getContacts); 
router.get('/:id', contactController.getContactById); 
router.post('/', contactController.createContact); 
router.put('/:id', contactController.updateContact); 
router.delete('/:id', contactController.deleteContactById); 
router.delete('/', contactController.deleteAllContacts);

module.exports = router;
