# Book a Room Application

## Table of Contents

- [Overview](#overview)
- [Approach](#approach)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Overview

The "Book a Room" application is a backend service designed to manage meeting room bookings. It allows users to book meeting rooms for specific dates and retrieve information about available rooms on a given date.

## Approach

### Problem Statement

The project aimed to create a simple backend service that fulfills the following requirements:

1. Users can book a meeting room for a specific date.
2. Each meeting room can only have one booking per day.
3. Users can view all available rooms on a specific date.

### Solution

To address these requirements, the following approach was taken:

- Implemented a `BookingService` class to manage room bookings and availability.
- Used Node.js with TypeScript and Express.js to build a RESTful API.
- Stored booking data in memory (later enhanced with JSON file storage).
- Validated input data for date format and availability.
- Wrote comprehensive unit tests using Jest for each API endpoint.

## Getting Started

### Prerequisites

To run the project, you need to have the following software installed on your machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   git clone [project root repo]

2. Install dependencies:
    npm install

Usage
1. Start the application:
    npm start
2. Access the API at http://localhost:3000.


API Documentation

    Create a Booking
    URL: /api/bookings
    Method: POST
    Request Body: JSON
            {
            "roomId": "A",
            "date": "2023-10-01",
            "user": "Jane"
            }
    Response: JSON
            {
            "message": "Booking successful."
            }

    Get Available Rooms
    URL: /api/rooms
    Method: GET
    Query Parameter: date (e.g., date=2023-10-01)
    Response: JSON

            {
            "availableRooms": ["B", "C", "D"]
            }

Testing
    Run the unit tests using Jest:
        npm test

Contributing
    Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

    Fork the repository.
    Create a new branch for your feature or bug fix.
    Make your changes and commit them.
    Push your branch to your fork.
    Submit a pull request to the main repository.




        
    