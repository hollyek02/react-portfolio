const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');


app.use(bodyParser.json());
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

mongoose.connect('mongodb+srv://hollyek2002:dbHollypass@cluster0.76fqg.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0')
   .then(() => {
       console.log('Connected to MongoDB');
   })
   .catch((err) => {
       console.error('Failed to connect to MongoDB', err);
   });

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
