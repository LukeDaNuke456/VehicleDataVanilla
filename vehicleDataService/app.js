const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/carDataDb');
const vehicleRoutes = require('./src/routes/routes');
const cors = require('cors'); // Import the cors middleware

// const Vehicle = require('./src/models/vehicle');

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', vehicleRoutes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
