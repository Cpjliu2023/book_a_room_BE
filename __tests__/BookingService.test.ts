import BookingService from '../src/services/BookingService';
import { Booking } from '../src/models/Booking';

describe('BookingService', () => {
  it('should book a room and return true when the room is available', () => {
    const bookingService = new BookingService();
    const isBooked = bookingService.bookRoom('A', '2023-10-01', 'Jane');
    expect(isBooked).toBe(true);
  });

  it('should not book a room and return false when the room is already booked', () => {
    const bookingService1 = new BookingService();
    const bookingService2 = new BookingService();

    // Book the room first using bookingService1
    bookingService1.bookRoom('A', '2023-10-01', 'John');

    // Attempt to book the same room on the same date using bookingService2
    const isBooked = bookingService2.bookRoom('A', '2023-10-01', 'Jane');
    expect(isBooked).toBe(false);
  });

  it('should return available rooms for a specific date', () => {
    const bookingService = new BookingService();

    // Book some rooms on a specific date
    bookingService.bookRoom('A', '2023-10-01', 'John');
    bookingService.bookRoom('B', '2023-10-01', 'Jane');
    bookingService.bookRoom('C', '2023-10-01', 'Sarah');

    // Check available rooms for the same date
    const availableRooms = bookingService.getAvailableRooms('2023-10-01');
    expect(availableRooms).toEqual(['D']);
  });

  it('should return all rooms as available for a date with no bookings', () => {
    const bookingService = new BookingService();

    // Check available rooms for a date with no bookings
    const availableRooms = bookingService.getAvailableRooms('2023-10-01');
    expect(availableRooms).toEqual(['A', 'B', 'C', 'D']);
  });

  it('should return an empty array for an invalid date format', () => {
    const bookingService = new BookingService();

    // Check available rooms for an invalid date format
    const availableRooms = bookingService.getAvailableRooms('invalid-date');
    expect(availableRooms).toEqual([]);
  });

  it('should handle booking for different dates independently', () => {
    const bookingService = new BookingService();

    // Book Room A for two different dates
    const isBooked1 = bookingService.bookRoom('A', '2023-10-01', 'John');
    const isBooked2 = bookingService.bookRoom('A', '2023-10-02', 'Jane');

    expect(isBooked1).toBe(true);
    expect(isBooked2).toBe(true);

    // Check available rooms for both dates
    const availableRooms1 = bookingService.getAvailableRooms('2023-10-01');
    const availableRooms2 = bookingService.getAvailableRooms('2023-10-02');

    expect(availableRooms1).toEqual(['B', 'C', 'D']);
    expect(availableRooms2).toEqual(['B', 'C', 'D']);
  });
});
