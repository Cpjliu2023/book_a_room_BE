// routes/bookingRoutes.ts
import { Router } from 'express';
import BookingController from '../controllers/BookingController';

const router = Router();
const bookingController = new BookingController();

router.post('/book', bookingController.bookRoom);
router.get('/available/:date', bookingController.getAvailableRooms);

export default router;
