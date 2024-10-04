import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Berandaview from './Berandaview';
import ProdukDetail from '../Produk/Produk';
import Negara from '../Negara/Negara';


const inistial ={
    data:[],
    filterData:[],
    loading: true,
};

const reducer = (state,action) =>{
    switch(action.type){
        case "FETCH_BERHASIL":
            return{
                ...state,
                data:action.payload,
                filterData:action.payload,
                loading: false,
            };
        case "SET_FILTER" :
             return{
                ...state,
                  filterData:action.payload
            };
            default:
                throw new Error("error di case")

    }
};

const Beranda = () => {
    const [state,dispatch] = useReducer(reducer, inistial);



    // const [product, setProduct] = useState([]);
    const [searchParams,setSearchParams] = useSearchParams();
    const q = searchParams.get("q");

    const search =(input)=> {
        setSearchParams({q: input})
    }

    //  buat mengambil data dari API
    const ambilProduct = async () => {
        const response = await axios.get(`https://restaurant-api.dicoding.dev/list`);
        const data = await response.data.restaurants;
        // setProduct(data);
        dispatch({type:"FETCH_BERHASIL",payload:data})

    };
   
    const searchResto = async () =>{
        try{
            const response = await axios.get(
                `https://restaurant-api.dicoding.dev/search?q=${q}`
            )

            const data= await response.data.restaurants;
            // setProduct(data);
            dispatch({type:"SET_FILTER", payload:data})
        } catch (error){
            console.error("Error fetching data" , error);
        }
    }
    
    useEffect(() => {
        if (!q) {   
            ambilProduct();
        } else{
            searchResto();
        }

    }, [q]);

    console.log(state)

    return (
        <Berandaview search={search} product={state.filterData}/>
       
    )
}

export default Beranda;
