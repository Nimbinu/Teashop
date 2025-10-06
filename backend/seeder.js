const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const colors = require('colors');

// Load models
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Contact = require('./models/Contact');

// Load env vars
dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/teashop');

// Sample data
const users = [
  {
    name: 'Admin User',
    email: 'admin@teashop.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    phone: '+1234567890',
    address: '123 Main St, City, Country'
  }
];

const products = [
  {
    name: 'Earl Grey Tea',
    description: 'Classic Earl Grey tea with bergamot oil. Perfect for afternoon tea.',
    price: 15.99,
    discountPrice: 12.99,
    category: 'tea',
    image: 'image 6.jpg',
    rating: 4.5,
    numReviews: 25,
    inStock: true,
    featured: true
  },
  {
    name: 'Green Dragon Well Tea',
    description: 'Premium Chinese green tea with delicate flavor and aroma.',
    price: 22.99,
    category: 'tea',
    image: 'image 7.jpg',
    rating: 4.7,
    numReviews: 18,
    inStock: true,
    featured: true
  },
  {
    name: 'Chamomile Herbal Tea',
    description: 'Soothing chamomile tea perfect for relaxation and sleep.',
    price: 18.99,
    category: 'tea',
    image: 'image 8.jpg',
    rating: 4.3,
    numReviews: 32,
    inStock: true
  },
  {
    name: 'English Breakfast Tea',
    description: 'Bold and robust black tea blend, perfect for morning.',
    price: 16.99,
    discountPrice: 14.99,
    category: 'tea',
    image: 'image 9.jpg',
    rating: 4.6,
    numReviews: 42,
    inStock: true,
    featured: true
  },
  {
    name: 'Premium Coffee Beans',
    description: 'Freshly roasted Arabica coffee beans with rich flavor.',
    price: 24.99,
    category: 'coffee',
    image: 'image 10.jpg',
    rating: 4.8,
    numReviews: 15,
    inStock: true
  },
  {
    name: 'Tea Infuser Set',
    description: 'Stainless steel tea infuser with elegant design.',
    price: 12.99,
    category: 'accessories',
    image: 'image 11.jpg',
    rating: 4.4,
    numReviews: 28,
    inStock: true
  },
  {
    name: 'Gift Tea Collection',
    description: 'Beautiful gift set with 6 different premium teas.',
    price: 49.99,
    discountPrice: 39.99,
    category: 'gift sets',
    image: 'image 12.jpg',
    rating: 4.9,
    numReviews: 12,
    inStock: true,
    featured: true
  },
  {
    name: 'Jasmine Green Tea',
    description: 'Fragrant jasmine-scented green tea from China.',
    price: 19.99,
    category: 'tea',
    image: 'image 13.jpg',
    rating: 4.5,
    numReviews: 21,
    inStock: true
  }
];

// Import data into DB
const importData = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    await Contact.deleteMany();

    // Create users
    const createdUsers = await User.create(users);
    console.log('Users imported successfully'.green.inverse);

    // Create products
    const createdProducts = await Product.create(products);
    console.log('Products imported successfully'.green.inverse);

    console.log('Data imported successfully!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`.red.inverse);
    process.exit(1);
  }
};

// Delete data from DB
const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    await Contact.deleteMany();

    console.log('Data destroyed successfully!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`.red.inverse);
    process.exit(1);
  }
};

// Check command line arguments
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}