import {useState, useEffect} from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[loading, setLoading] = useState(false);
  const[posts, setPosts] = useState([]);

  
  async function fetchProductsData(){
    setLoading(true);//Showing Loader
    try{
      const res = await fetch(API_URL);//API call
      const data = await res.json();
      setPosts(data);
    }
    catch(error){
      alert("Error in fetching data from API");
      setPosts([]);
    }
    setLoading(false);//removing Loader after fetching data from API call

   }


   useEffect(() => {
    fetchProductsData();
   },[]);


return(
    <div className='min-h-screen flex justify-center items-center mb-[50px]'>
       {
        loading ? <Spinner/> : 
        posts.length > 0 ? 
        (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
           {posts.map((post) => {//Returning a card <Product/> for each product in posts
            return <Product key={post.id} post={post}/>
           })}
        </div>) : 
        <div className='flex justify-center items-center'>
           <p>No Product found </p>
        </div>
       }
    </div>
  )
};


export default Home;
