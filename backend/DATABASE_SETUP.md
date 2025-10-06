# Database Setup Instructions for Teashop

## Prerequisites
1. Install Node.js (version 14 or higher)
2. Install MongoDB Community Edition or use MongoDB Atlas (cloud)

## Local MongoDB Installation

### Windows:
1. Download MongoDB Community Edition from: https://www.mongodb.com/try/download/community
2. Run the installer and follow the setup wizard
3. Start MongoDB service:
   - Open Command Prompt as Administrator
   - Run: `net start MongoDB`

### Alternative: MongoDB Atlas (Cloud Database)
1. Go to https://www.mongodb.com/atlas
2. Create a free account
3. Create a new cluster
4. Get your connection string and replace the MONGODB_URI in .env file

## Setting Up the Database

1. **Navigate to the backend directory:**
   ```
   cd backend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Create environment file (.env):**
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/teashop
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRE=30d
   MAX_FILE_UPLOAD=1000000
   FILE_UPLOAD_PATH=./public/uploads
   ```

4. **For MongoDB Atlas, update MONGODB_URI:**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/teashop?retryWrites=true&w=majority
   ```

5. **Import sample data into database:**
   ```
   npm run data:import
   ```

6. **Start the server:**
   ```
   npm run dev
   ```

## Database Structure

The database will automatically create these collections:

### Users Collection
- Stores user accounts (customers and admins)
- Includes authentication and profile information

### Products Collection
- Stores tea products, coffee, and accessories
- Includes pricing, descriptions, and inventory

### Orders Collection
- Stores customer orders and order history
- Links to users and products

### Contacts Collection
- Stores contact form submissions
- For customer service management

## Testing the Database

Once the server is running, you can test the API endpoints:

1. **Get all products:**
   GET http://localhost:5000/api/products

2. **Register a new user:**
   POST http://localhost:5000/api/auth/register
   Body: {
     "name": "Test User",
     "email": "test@example.com",
     "password": "password123"
   }

3. **Login:**
   POST http://localhost:5000/api/auth/login
   Body: {
     "email": "test@example.com",
     "password": "password123"
   }

## Common Issues and Solutions

1. **MongoDB connection error:**
   - Make sure MongoDB service is running
   - Check if the MONGODB_URI is correct
   - Ensure MongoDB port (27017) is not blocked

2. **Authentication errors:**
   - Verify JWT_SECRET is set in .env file
   - Check if user credentials are correct

3. **Sample data not loading:**
   - Run `npm run data:destroy` first, then `npm run data:import`
   - Check MongoDB connection

## Database Management

- **Clear all data:** `npm run data:destroy`
- **Reload sample data:** `npm run data:import`
- **View database:** Use MongoDB Compass or any MongoDB GUI tool

## Production Considerations

1. Use MongoDB Atlas for production
2. Set strong JWT_SECRET
3. Enable MongoDB authentication
4. Set up database backups
5. Monitor database performance