import React from 'react'
import { Link } from 'react-router-dom';
import "./Stylebaru.scss"

const Berandaview = ({search,product}) => {
    return (
        <div className="dark:bg-black">
            {/* Search Bar */}
            <div className="my-4 flex justify-center">
                <form action="/" className="w-full max-w-md">
                    <input 
                        type="text" 
                        placeholder="Search restaurant..." 
                        className="input input-bordered w-full"
                        onChange={(input) => {search(input.target.value)}}
                        name="q"
                    />
                </form>
            </div>

            {/* Grid untuk menampilkan data restoran */}
            <div className="grid grid-cols-3 gap-4">
                {product?.map((data) => (
                <div className="card bg-white-400 dark:bg-slate-500 dark:text-white w-96 shadow-xl">
                <figure>
                  <img
                    src={"https://restaurant-api.dicoding.dev/images/small/" + data.pictureId}
                    alt={data.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <p className='line-clamp-2'>{data.description}</p>
                  <div className="card-actions justify-end">
                    <Link to={"/detail/" + data.id}>View Details</Link>
                  </div>
                </div>
              </div>     
                    // <div className="col-span-1" key={data.id}>
                    //     <div className="card bg-base-100 w-96 shadow-xl">
                    //         <figure>
                    //             <img
                    //                 src={"https://restaurant-api.dicoding.dev/images/small/" + data.pictureId}
                    //                 alt={data.name} 
                    //             />
                    //         </figure>
                    //         <div className="card-body">
                    //             <h2 className="card-title">{data.name}</h2>
                    //             <p className='line-clamp-2'>{data.description}</p>
                    //             <div className="card-actions justify-end">
                    //                 <Link to={"/detail/" + data.id} className="btn btn-primary">
                    //                     View Details
                    //                 </Link>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                ))}
            </div>
        </div>
    );
}

export default Berandaview