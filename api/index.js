import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"
import authRoute from "./routes/auth.js"

const app = express()
dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/auth', authRoute)

app.use((err, req, res, next) => {
  const errStatus = err.status || 500
  const errMessage = err.message || "something went wrong"
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack
  })
})


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb")
  } catch (error) {
    throw (error);
  }
}





app.listen(3000,
  connect(),
  () => console.log('server is connected')
)

