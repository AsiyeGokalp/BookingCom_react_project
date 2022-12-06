import express from "express"
import { createRoom, updateRoom, deleteRoom, getRoom, getRooms } from "../controllers/room.js"

const router = express.Router()

router.post('/:hotelid', createRoom)
router.put('/:id', updateRoom)
router.delete('/:id/:hotelid', deleteRoom)
router.get('/:id', getRoom)
router.get('/', getRooms)

export default router