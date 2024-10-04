import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Detail = () => {

    const {id} = useParams();

    const [product, setProduct] = useState(null); // Set default to null

    const ambilProduct = async () => {
        try {
            const response = await axios.get(`https://restaurant-api.dicoding.dev/detail/${id}`); // Correct endpoint
            const data = response.data.restaurant; // Accessing the correct part of the data
            setProduct(data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    useEffect(() => {
        ambilProduct();
    }, [id]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>
            {product ? (
                <>
                    <img 
                        src={`https://restaurant-api.dicoding.dev/images/medium/${product.pictureId}`} 
                        alt={product.name} 
                        style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} 
                    />
                    <h1 style={{ textAlign: 'center', marginTop: '20px' }}>{product.name}</h1>
                    {/* Menambahkan deskripsi restoran */}
                    <p style={{ textAlign: 'center', marginTop: '10px', maxWidth: '600px', lineHeight: '1.6' }}>
                        {product.description}
                    </p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Detail;
