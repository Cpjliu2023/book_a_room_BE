// services/BookingService.ts
import fs from 'fs';
import path from 'path';
import { Booking } from '../models/Booking';

const DATA_DIR = path.join(__dirname, '../../data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

class BookingService {
    private bookings: Booking[] = [];

    constructor() {
        this.loadBookings();
    }

    private loadBookings() {
        try {
            const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
            this.bookings = JSON.parse(data);
        } catch (error) {
            // Handle file read error or missing file
            this.bookings = [];
        }
    }

    private saveBookings() {
        try {
            const data = JSON.stringify(this.bookings, null, 2);
            fs.writeFileSync(BOOKINGS_FILE, data, 'utf-8');
        } catch (error) {
            // Handle file write error
            console.error('Error saving bookings:', error);
        }
    }

    bookRoom(roomId: string, date: string, userId: string): boolean {
        // Check if the room is available for the given date
        const isAvailable = !this.bookings.some(booking => (
            booking.roomId === roomId && booking.date === date
        ));

        if (isAvailable) {
            this.bookings.push(new Booking(roomId, date, userId));
            this.saveBookings(); // Save bookings to the file
        }

        return isAvailable;
    }

    getAvailableRooms(date: string): string[] {
        const bookedRooms = this.bookings
            .filter(booking => booking.date === date)
            .map(booking => booking.roomId);

        // Assuming you have a list of all available rooms
        const allRooms = ['A', 'B', 'C', 'D'];

        return allRooms.filter(room => !bookedRooms.includes(room));
    }
}

export default BookingService;
