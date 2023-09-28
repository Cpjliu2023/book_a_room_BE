// services/BookingService.ts
import { Booking } from '../models/Booking';

class BookingService {
    private bookings: Booking[] = [];

    bookRoom(roomId: string, date: string, userId: string): boolean {
        // Check if the room is available for the given date
        const isAvailable = !this.bookings.some(booking => (
            booking.roomId === roomId && booking.date === date
        ));

        if (isAvailable) {
            this.bookings.push(new Booking(roomId, date, userId));
        }
        console.log(this.bookings)

        return isAvailable;
    }

    getAvailableRooms(date: string): string[] {
        const bookedRooms = this.bookings
            .filter(booking => booking.date === date)
            .map(booking => booking.roomId);
        
        console.log(bookedRooms)

        // Assuming you have a list of all available rooms
        const allRooms = ['A', 'B', 'C', 'D'];

        return allRooms.filter(room => !bookedRooms.includes(room));
    }
}

export default BookingService;
