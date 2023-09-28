// src/index.ts
import express from 'express';
import bookingRoutes from './routes/bookingRoutes';
import BookingService from './services/BookingService';

const app = express();
const port = process.env.PORT || 3000;

// Local storage is available; you can use it
const bookingService = new BookingService();

app.use(express.json());

app.use('/api/bookings', bookingRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

