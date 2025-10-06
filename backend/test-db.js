const mongoose = require('mongoose');

// Simple test to check MongoDB connection
const testConnection = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/teashop');
    console.log('✅ Successfully connected to MongoDB!');
    
    // Test creating a simple document
    const testSchema = new mongoose.Schema({
      name: String,
      createdAt: { type: Date, default: Date.now }
    });
    
    const TestModel = mongoose.model('Test', testSchema);
    
    // Create a test document
    const testDoc = new TestModel({
      name: 'Database Connection Test'
    });
    
    await testDoc.save();
    console.log('✅ Successfully created test document!');
    
    // Find the test document
    const found = await TestModel.findOne({ name: 'Database Connection Test' });
    console.log('✅ Successfully retrieved test document:', found);
    
    // Clean up - remove test document
    await TestModel.deleteOne({ _id: found._id });
    console.log('✅ Successfully cleaned up test document!');
    
    console.log('\n🎉 Database is working perfectly!');
    console.log('You can now run your main application.');
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('\n🔧 Troubleshooting steps:');
    console.log('1. Make sure MongoDB is installed and running');
    console.log('2. Check if MongoDB service is started');
    console.log('3. Verify the connection string is correct');
    console.log('4. Ensure port 27017 is not blocked');
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed.');
    process.exit();
  }
};

// Run the test
testConnection();