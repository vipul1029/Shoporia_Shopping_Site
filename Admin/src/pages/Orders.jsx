
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])


  const fetchAllOrders = async () => {
    if (!token) {
      return null
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
      console.log(orders)
    }
    catch (error) {
      toast.error(error.message)
    }
  }


  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', { orderId, status: event.target.value }, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      })
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }
  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-6 text-center">Order Page</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map((order, index) => (
          <div key={index} className="border rounded-xl p-4 shadow-md hover:shadow-lg transition-all bg-white">
            <div className="flex items-center gap-3 mb-4">
              <img src={assets.parcel_icon} alt="Parcel" className="w-8 h-8" />
              <h4 className="text-lg font-medium">Order #{index + 1}</h4>
            </div>

            <div className="text-sm mb-2">
              {order.items.map((item, index) => (
                <p key={index} className="text-gray-700">
                  {item.name} × {item.quantity} <span className="text-gray-400">({item.size})</span>
                  {index !== order.items.length - 1 && ","}
                </p>
              ))}
            </div>

            <div className="text-sm text-gray-600 mb-2">
              <p className="font-medium text-black">Delivery Address:</p>
              <p>{order.address.firstName} {order.address.lastName}</p>
              <p>{order.address.street},</p>
              <p>{order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipcode}</p>
              <p>Phone: {order.address.phone}</p>
            </div>

            <div className="text-sm mt-3">
              <p><span className="font-medium">Items:</span> {order.items.length}</p>
              <p><span className="font-medium">Payment Method:</span> {order.paymentMethod}</p>
              <p><span className="font-medium">Payment:</span> {order.payment ? '✅ Done' : '⏳ Pending'}</p>
              <p><span className="font-medium">Date:</span> {new Date(order.date).toLocaleDateString()}</p>
              <p><span className="font-medium">Total:</span> {currency} {order.amount}</p>
            </div>

            <div className="mt-3">
              <label htmlFor={`status-${index}`} className="text-sm font-medium mr-2">Update Status:</label>
              <select value={order.status}
                id={`status-${index}`}
                className="border border-gray-300 rounded px-2 py-1 text-sm w-full md:w-auto"
                defaultValue={order.status} onChange={(event)=> statusHandler(event, order._id)}
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
