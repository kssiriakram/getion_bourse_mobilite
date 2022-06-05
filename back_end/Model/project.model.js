const mongoose = require('mongoose');
const { isEmail  } = require('validator');
const bcrypt = require('bcrypt');

const projetSchema = new mongoose.Schema(
  {
    title:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        trim: true
    },
    clientname:{
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      trim: true
    },
    rate: {
      type: Number,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true
    },
    progress_level: {
      type: Number,
      required: true,
      validate: [isEmail],
      lowercase: true, 
      unique: true,
      trim: true,
    },
    Size: {
      type: String,
      required:true,
      //max:1024,
      minlength:6
    },   
    Starting_date: {
        type: Date,
        required:true,
        //max:1024,
      },
      Ending_date: {
        type: Date,
        required:true,
        //max:1024,
      },
      Description: {
        type: String,
        required:true,
        //max:1024,
      },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ firstname: 1, lastname: 1 }, { sparse:true});

// play function before save into display: 'block',
userSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next(); 
}); 

userSchema.statics.login = async function(username, password
  ) {
  const user = await this.findOne({ username });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email')
}; 

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;