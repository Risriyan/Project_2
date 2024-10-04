import React from 'react';
import { Link } from 'react-router-dom';
import "./Negara.scss";

const Negaraview = ({ search, product }) => {
    console.log(product); // Cek di sini struktur data API

    return (
        <div>
            {/* Search Bar */}
            <div className="my-4 flex justify-center">
                <form action="//" className="w-full max-w-md">
                    <input 
                        type="text" 
                        placeholder="Search country..." 
                        className="input input-bordered w-full"
                        onChange={(input) => {search(input.target.value)}}
                        name="q"
                    />
                </form>
            </div>

            {/* Grid untuk menampilkan data negara */}
            <div className="grid grid-cols-3 lg:grid-cols-3">
                {product?.map((data) => (
                    <div className="col-span-1" key={data.id}>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={data.flag}
                                    alt={data.name} 
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2> {/* Menampilkan nama negara */}
                                <div className="card-actions justify-end">
                                    <Link to={"/NegaraDetail/" + data.id} className="btn btn-primary">
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

export default Negaraview;
