import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import NegaraDetail from './NegaraDetail';
import Negaraview from './Negaraview'


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
const Negara = () => {
    const [state,dispatch] = useReducer(reducer, inistial);

    const [product, setProduct] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q");

    const search = (input) => {
        setSearchParams({ q: input });
    };

    // Fetch products from the API
    const ambilProduct = async () => {
            const response = await axios.get(` https://freetestapi.com/api/v1/countries`);
            // setProduct(response.data);
            dispatch({type:"FETCH_BERHASIL",payload:response.data})
    };

    // Filter products based on the search query
    const searchProduk = async () => {
        try {
            const response = await axios.get(`https://freetestapi.com/api/v1/countries?search=${q}`);
            const data= await response.data;
            dispatch({type:"SET_FILTER", payload:data})
            // setProduct(filteredProducts);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        if (!q) {
            ambilProduct();
        } else {
            searchProduk();
        }
    }, [q]);

    console.log(state)

    return <Negaraview search={search} product={state.filterData} />;
};

export default Negara;
