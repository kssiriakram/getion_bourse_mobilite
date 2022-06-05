const mongoose = require("mongoose");
//mongodb://localhost:27017/Livraison
mongoose.connect(process.env.DB_USER,

    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false 
    }).then(() => console.log('Connected to mongo'))
    .catch((err) => console.log("Failed to connect to MongoDb", err));
