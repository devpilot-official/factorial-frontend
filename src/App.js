import { useState, useEffect } from "react";
import './App.css';
import NewOrder from './components/NewOrder';
import OrderList from './components/OrderList';
import moment from "moment";

function App() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      let allOrders = await fetchOrders();
      allOrders = allOrders.data.map((order) => {
        return {
          id: order._id,
          name: order.name,
          orderValue: order.value,
          createdAt: moment(order.createdAt).format('llll'),
        }
      })
      setOrders(allOrders)
    }

    getOrders()
  }, [])

  const fetchOrders = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/metric`);
    const data = await res.json();

    return data
  }

  const addOrder = async (order) => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/metric`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(order)
    })

    let data = await res.json();

    data = {
      id: data.data._id,
      name: data.data.name,
      orderValue: data.data.value,
      createdAt: moment(data.data.createdAt).format('llll'),
    }

    setOrders([ data, ...orders]);
  }

  const filterOrders = async (filter) => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/metric/filter?filter=${filter}`)
    let data = await res.json();
    data = data.data.map((order) => {
        return {
          id: order._id,
          name: order.name,
          orderValue: order.value,
          createdAt: moment(order.createdAt).format('llll'),
        }
      })
    setOrders(data);
  }

  return (
    <div className="container">
      <NewOrder onAdd={addOrder} filters={filterOrders} />
      <OrderList orders={orders} />
    </div>
  );
}

export default App;
