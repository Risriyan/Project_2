import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const NegaraDetail = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null); // Set default to null

    const ambilProduct = async () => {
        try {
            const response = await axios.get(`https://freetestapi.com/api/v1/countries/${id}`);
            const data = response.data;
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
                        src={product.flag}
                        alt={product.name} 
                        style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} 
                    />
                    <h1 style={{ textAlign: 'center', marginTop: '20px' }}>{product.name}</h1>
                    <p className="text-lg font-normal">
							Capital City:{" "}
							<span className="font-bold">{product?.capital}</span>
						</p>
						<p className="text-lg font-normal">
							Currency: <span className="font-bold">{product?.currency}</span>
						</p>
						<p className="py-6">
							<span>Population: {product?.population}</span>
							<br />
							<span>Destiny: {product?.destiny}</span>
							<br />
							<span>Land Area: {product?.land_area}</span>
					</p>

                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default NegaraDetail;
