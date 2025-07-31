const mongoose = require('mongoose')


const connectDB = async()=>{try {
    await mongoose.connect('mongodb+srv://nayemmab2:nrKCAH8asOq4ZeiM@cluster0.moqg8qc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    }

    ).then(() => {
        console.log('Database connected');
    }).catch((error) => {
        console.log(error);
    })
} catch (error) {
    console.log(error);
    
}
}

module.exports = connectDB