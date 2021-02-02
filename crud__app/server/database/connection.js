// mongo db connection
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongo db connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            // remove unwanted warning in consoel
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB;

