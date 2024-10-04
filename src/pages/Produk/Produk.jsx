import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Produkview from './Produkview'
import ProdukDetail from '../Produk/ProdukDetail';


const Produk = () => {

    const [product, setProduct] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q");

    const search = (input) => {
        setSearchParams({ q: input });
    };

    // Fetch products from the API
    const ambilProduct = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    // Filter products based on the search query
    const searchProduk = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            const filteredProducts = response.data.filter((item) =>
                item.title.toLowerCase().includes(q.toLowerCase())
            );
            setProduct(filteredProducts);
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

    return <Produkview search={search} product={product} />;
};

export default Produk;
