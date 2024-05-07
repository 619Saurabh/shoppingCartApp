import { useSelector } from "react-redux";

import CartItem from '../components/CartItem'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react"; 

const Cart = () => {

  const{cart} = useSelector((state) => state);
  const[totalAmount, setTotalAmount] = useState(0);
 
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, cur) => acc + cur.price,0));
  },[cart]);

  return(
    <div className='max-w-[1125px] mx-auto flex flex-col md:flex-row justify-center mb-[30px]'>
      {
        cart.length > 0 ? //if cart is non-empty
        (
          <div className='flex w-full justify-between'>
               <div className=' w-[100%] md:w-[60%] flex flex-col p-2'>
                 {cart.map((item, index) => {
                 return <CartItem key={item.id} item={item} itemIndex={index}/>
                 })}
               </div>  

               <div className="flex flex-col w-1/2 mb-[50px]">
                  <div class="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between">
                  <div>
                     <div className="font-semibold text-xl text-green-800 uppercase">Your Cart</div>
                     <div className="font-semibold text-5xl text-green-700 uppercase">Summary</div>
                     <p className='text-xl mt-3'>
                       <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                     </p>
                  </div>  
               </div> 

               <div className="ml-5 w-full"> 
                  <p className='text-xl text-gray-700 font-semibold'>Total Amount: <span className="font-bold">${totalAmount}</span></p>
                  <button
                  className="bg-green-700 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600
                   font-bold p-3 text-xl w-4/5"
                   >
                      Checkout Now

                  </button>
               </div>
               </div> 


          </div> ) : //if cart is empty
        (
          <div className='min-w-[80vw] min-h-[80vh] flex flex-col items-center justify-center mx-auto'>
             <h1 className='font-semibold text-xl mb-2 capitalize'>Your Cart is empty!</h1>
             <NavLink to="/">
                 <button
                 className='bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300, ease-linear mt-5 border-2 
                 border-green-600 font-semibold hover:text-green-700 p-2 px-7 tracking-wider text-lg capitalize'>
                  Shop now
                 </button>
             </NavLink>
          </div>  
        )
      }
    </div>
  )
};

export default Cart;
