
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (you'll need to set up your own MongoDB database)
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const matrixSchema = new mongoose.Schema({
    Name: String,
    Impact: String,
    Resolution: String,
    // Add other fields as needed
});

const MatrixModel = mongoose.model('Matrix', matrixSchema);

app.use(bodyParser.json());

// API endpoint to fetch matrix data
app.get('/api/matrix', async (req, res) => {
    try {
        const matrixData = await MatrixModel.find();
        res.json(matrixData);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching matrix data' });
    }
});

// Add other API endpoints for CRUD operations (create, update, delete)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
