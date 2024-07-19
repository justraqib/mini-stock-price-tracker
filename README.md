# Mini Stock Price Tracker

This project is a simple application that tracks stock prices. Users can select stocks from a predefined list, and the application fetches and displays the current price of the selected stock every minute.

## Available Scripts

In the project directory, you can run:

### `docker-compose up --build`

Builds and starts the Docker containers for the backend (Express) and MongoDB.\
The application will be accessible at [http://localhost:3000](http://localhost:3000) for the frontend and [http://localhost:8080](http://localhost:8080) for the backend API.

### `docker-compose down`

Stops and removes the Docker containers. This command is useful when you need to stop the application.

## Project Structure

The project consists of two main parts:

1. **Frontend**: A React application that allows users to select a stock and view its current price.
2. **Backend**: An Express application that serves as a mock API to provide stock prices and interacts with a MongoDB database.

### Frontend (React)

- **Stock Selector**: Dropdown menu for selecting a stock from a predefined list.
- **Price Display**: Shows the current price of the selected stock, updated every minute.

### Backend (Express)

- **Mock API Endpoint**: Provides random stock prices for the predefined stocks. The endpoint is available at `/stock-price/:symbol`.

### Database (MongoDB)

- **Stock Schema**: Stores a list of predefined stocks with their current prices.

## Setup

### Prerequisites

- [Docker](https://www.docker.com/) (for running MongoDB and the application)
- [Docker Compose](https://docs.docker.com/compose/) (for managing multi-container Docker applications)

### Build and Run the Application

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/justraqib/mini-stock-price-tracker.git
   cd mini-stock-price-tracker
