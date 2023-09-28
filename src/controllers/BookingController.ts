// controllers/BookingController.ts
import { Request, Response } from 'express';
import BookingService from '../services/BookingService';

const bookingService = new BookingService();

class BookingController {
    bookRoom(req: Request, res: Response) {
        const { roomId, date, userId } = req.body;

        if (!roomId || !date || !userId) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const isAvailable = bookingService.bookRoom(roomId, date, userId);

        if (isAvailable) {
            return res.status(200).json({ message: 'Room booked successfully' });
        } else {
            return res.status(409).json({ error: 'Room already booked for the date' });
        }
    }

    getAvailableRooms(req: Request, res: Response) {
        const { date } = req.params;

        if (!date) {
            return res.status(400).json({ error: 'Missing date parameter' });
        }

        const availableRooms = bookingService.getAvailableRooms(date);

        return res.status(200).json({ availableRooms });
    }
}

export default BookingController;
