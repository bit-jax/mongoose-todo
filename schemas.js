const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Schema } = mongoose

//create Mongoose schemas for Todo items as well as Users

//Child Schema
const todoSchema = new Schema({
    title: String,
    complete: Boolean
})

//Parent Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    //Array of subdoccuments
    todos: [todoSchema],
    // Single nested subdocuments. Caveat: single nested subdocs only work
    // in mongoose >= 4.2.0
    child: todoSchema
})

userSchema.statics.signup = async function (username, plainTextPassword) {
    const user = new this()
    user.username = username
    await user.hashPassword(plainTextPassword)
    await user.save()
    return user
  }
  
  userSchema.methods.sanitize = function () {
    return {
      ...this._doc,
      password: undefined
    }
  }
  
  userSchema.methods.hashPassword = function (plainTextPassword) {
    const user = this
    return bcrypt.hash(plainTextPassword, 4).then(hash => {
      user.password = hash
    })
  }
  
  userSchema.methods.comparePassword = function (plainTextPassword) {
    const user = this
    return bcrypt.compare(plainTextPassword, user.password)
  }
  
  const User = mongoose.model('User', userSchema)
  
  module.exports = User

