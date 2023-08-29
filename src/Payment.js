import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import "./Payment.css"
import { useStateValue } from './StateProvider'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from 'axios'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue()
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const[succeeded,setsucceeded]=useState(false)
    const[processing,setprocessing]=useState("")
    const [error, seterror] = useState(null)
    const [disabled, setdisabled] = useState(true)
    const [clientsecret, setclientsecret] = useState(true)
    useEffect(()=>{
       const getClientSecret = async()=>{
            const response = await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setclientsecret(response.data.clientsecret)
       }
       getClientSecret()
    },[basket])
    const handleSubmit = async(event) => {
      event.preventDefault()
      setprocessing(true)
      const payload=await  stripe.confirmCardPayment(clientsecret,{
         payment_method:{
            card:elements.getElement(CardElement)
         }
      }).then(({paymentIntent})=>{
        setsucceeded(true);
        seterror(null)
        setprocessing(false)
        navigate('/orders', { replace: true })
      })
    }
    const handleChange = event => {
        setdisabled(event.empty)
        seterror(event.error ? event.error.message : "")

        // const payload = await stripe 
    }
    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>Checkout(
                    <Link to="/checkout">{basket?.length} items</Link>)</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery adress</h3>
                    </div>
                    <div className="payment_adress">
                        <p>{user?.email}</p>
                        <p>Jb-13Jagannath Colony</p>
                        <p>South Balanda Talcger</p>
                        <p>759116</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payment_item">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            ></CheckoutProduct>
                        ))}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_method">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">


                        <form onSubmit={handleSubmit} >
                            <CardElement onChange={handleChange} />
                            <div className="price_container">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                          <h3>Order Total:{value}</h3>  
                                         
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                                </button>
                            </div>
                                {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default Payment