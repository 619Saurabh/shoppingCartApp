import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }
  
  return(
    <div className='flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500 mt-2 mb-2 md:mx-5'>
       <div className="flex">
          <div className='w-[30%]'>
             <img src={item.image}/>
          </div>
          <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
             <h1 className="text-gray-700 font-semibold text-lg mt-1">{item.title}</h1>
             <h1>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
             <div className='flex justify-between items-center self-baseline'>
                <p className='font-bold text-lg text-green-600'>${item.price}</p>
                <div 
                onClick={removeFromCart}
                className='bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-2 mr-3'
                >
                   <FcDeleteDatabase />
                </div>
             </div>
          </div>
       </div>
    </div>
  ) ;
};

export default CartItem;
