import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cartpage.css";


function Total({q,p}){
    const ans=q*p
    
return <p>{ans}</p>
}

export const Cartpage = ()=>{

    const [cartData,setcartData]=useState([])
    const [total,settotal]=useState()
    
   useEffect(()=>{
    axios.get('https://anthropologie-application.herokuapp.com/cart')
    .then(function (response) {
      // handle success
      setcartData(response.data)
  
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
   },[])
   console.log(cartData)

    return(
        <div className="main-Cart">
            <div className="cart-left">
                <div className="producthead">
                    <b>Basket</b>
                </div>
                <div className="productmid">
                    <div>Item</div>
                    <div>Item price</div>
                    <div>Quantity</div>
                    <div>Total price</div>
                </div>
               {
                   cartData.map((e)=>(
                    <div className="productdetails">
                    <div className="prod-img">
                        <img src={e.product_id.image_link[0]}/>
                    </div>
                    <div className="prod-detail">
                        <p>{e.product_id.title}</p>
                       <span><p>Color: </p> <img src={e.product_id.color[0]} alt="" /></span>
                        <p>Size: {e.product_id.size[1]}</p>
                    </div>
                    <div className="prod-price">
                        <p>${e.product_id.price}.00</p>
                    </div>
                  
                    <div className="prod-quantity">
                        <select name="" id="quant" >
                           
                           <option value="">1</option>
                           <option value="">2</option>
                           <option value="">3</option>
                           <option value="">4</option>
                           <option value="">5</option>
                           <option value="">6</option>
                           <option value="">7</option>
                           <option value="">8</option>
                           <option value="">9</option>
                           <option value="">10</option>
                           <option value="">11</option>
                           <option value="">12</option>
                           <option value="">13</option>
                           <option value="">14</option>
                           <option value="">15</option>
                           <option value="">16</option>
                           <option value="">17</option>
                           <option value="">18</option>
                           <option value="">19</option>
                           <option value="">20</option>
                        </select>
                    </div>
                    <div className="prod-total">
                         <Total q={e.quantity} p={e.product_id.price}/>
                         
                    </div>
                </div>
                   ))
               }
                
            </div>
            <div className="cart-right">
                <div className="paymenthead">
                    <b>Order Summary</b>
                </div>
                <div className="paydetailed">
                    <div>Subtotal <span> 88.00</span></div>
                    <div>Shipping <span>TBD</span></div>
                    <div>Estimated Tax <span>0</span></div>
                    <div> <b>Total </b> <span> <b>88.00</b></span></div>

                    <Link to="/payment" id="paybutton"> <button>PROCEED TO CHECKOUT</button></Link>
                </div>
            </div>
        </div>
    )
}