const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  link: {
    type: String,
    validate: {
      validator: (v) => /^https?:\/\/(?:www\.)?(?:[\w\d.-]{1,}\.[a-z]{1,3}|(?:\d{1,3}\.){1,3}\d{1,3})(?::[1-9][0-9]{1,4})?(?:(?:\/[\w.-]{1,}){1,})?(?:\/|#|\?)?/.test(v),
      message: (props) => `${props.value} is not a valid url!`,
    },
    required: true,
  },
  likes: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    default: [],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
