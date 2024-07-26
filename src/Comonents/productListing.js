import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './productComponent';
import axios from "axios";
import {setProducts} from "../Redux/Actions/productActions";

const ProductListing = () => {
    const products  = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const fetchProducts = async () =>{
        const response = (await axios.get("https://fakestoreapi.com/products"))
        dispatch(setProducts(response.data));
    }

    useEffect (()=>{
        fetchProducts();
    },[]);

    console.log(products)
  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
