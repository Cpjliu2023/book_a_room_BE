// src/index.ts
import express from 'express';
import bookingRoutes from './routes/bookingRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/bookings', bookingRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
