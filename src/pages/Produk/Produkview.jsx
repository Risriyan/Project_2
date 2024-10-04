import React from 'react'
import { Link } from 'react-router-dom';
import "./Produk.scss"

const Produkdview = ({search,product}) => {
    console.log(product)
    return (
        <div>
            {/* Search Bar */}
            <div className="my-4 flex justify-center">
                <form action="//" className="w-full max-w-md">
                    <input 
                        type="text" 
                        placeholder="Search product..." 
                        className="input input-bordered w-full"
                        onChange={(input) => {search(input.target.value)}}
                        name="q"
                    />
                </form>
            </div>

            {/* Grid untuk menampilkan data produk */}
            <div className="grid grid-cols-3 lg:grid-cols-3">
                {product?.map((data) => (
                    <div className="col-span-1" key={data.id}>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={data.image}
                                    alt={data.title} 
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.title}</h2>
                                <p className='line-clamp-2'>{data.description}</p>
                                <div className="card-actions justify-end">
                                    <Link to={"/ProdukDetail/" + data.id} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Produkdview