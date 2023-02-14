
const { Schema, model } = require('mongoose');

const userSchema = new Schema(

  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {

      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
}

);

const User = model('User', userSchema);

module.exports = User;

