
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (you'll need to set up your own MongoDB database)
// khushiJ
// C6PEyD7hiAJcIGoj

// mongodb+srv://khushijukanti:<password>@cluster0.ngvjbli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect('mongodb+srv://khushiJ:C6PEyD7hiAJcIGoj@cluster0.xomvsov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Matrix').then(() => {
    console.log("Connected to MongoDB");
})

// mongoose.connect('mongodb://localhost:27017/myapp').then(() => {
//     console.log("Connected to MongoDB");
// })

const matrixSchema = new mongoose.Schema({
    Name: String,
    Impact: String,
    Resolution: String,
    How_to_fix: String,
    Grid: String,
    // Add other fields as needed
});

const MatrixModel = mongoose.model('Matrix', matrixSchema);

app.use(bodyParser.json());

app.use(cors());

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

app.post('/api/matrix', async (req, res) => {
    try {
        const { Name, Impact, Resolution, How_to_fix, Grid } = req.body; // Assuming the request body contains these fields
        const matrixEntry = new MatrixModel({ Name, Impact, Resolution, How_to_fix, Grid });
        await matrixEntry.save();
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data to matrix' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});







//1.  Name: This could be the name of the issue or problem being addressed. For example:
// "Database connection error"
// "UI rendering bug"
// "Login authentication failure"
// 2. Impact: This could indicate the severity or impact level of the issue. For example:
// "High" (indicating critical impact)
// "Medium" (indicating moderate impact)
// "Low" (indicating minor impact)
// 3. Resolution: This could be a brief description of how the issue was resolved or fixed. For example:
// "Updated database configuration settings"
// "Fixed CSS styling in the affected component"
// "Implemented multi-factor authentication for enhanced security"
// 4. How_to_fix: This could provide instructions or steps on how to fix the issue. For example:
// "Restart the database server and check connection settings"
// "Inspect and update CSS rules in the relevant stylesheet"
// "Follow the setup guide for configuring multi-factor authentication"
