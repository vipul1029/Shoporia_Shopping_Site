import { allOrders, placeOrder, placeOrderStripe , updateStatus , userOrders, verifyStripe} from "../controllers/orderController.js";
import express from 'express'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()


//Admin
orderRouter.post('/list', adminAuth ,allOrders)
orderRouter.post('/status', adminAuth, updateStatus)


//Payment
orderRouter.post('/place', authUser ,placeOrder)
orderRouter.post('/stripe', authUser ,placeOrderStripe)



//User
orderRouter.post('/userOrders', authUser,userOrders)


//verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)



export default orderRouter