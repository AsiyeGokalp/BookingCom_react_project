import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    require: true,
  },
  photos: [String],
  desc: {
    type: String,
    required: true,
  },
  roomNumbers: [{ number: Number }],
},
  { timestamps: true }
)

export default mongoose.model('Room', RoomSchema)