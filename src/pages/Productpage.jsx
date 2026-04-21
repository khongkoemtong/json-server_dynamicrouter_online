import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Productpage() {
    const [data, setdata] = useState([])

    useEffect(() => {
        const FetchAPi = async () => {
            const req = await fetch('http://localhost:3000/product')
            const res = await req.json()

            setdata(res)
        }
        FetchAPi()
    }, [])



    return (
        <div className='grid grid-cols-4 gap-3'>

            {
                data.map(pro => (
                  <Link to={`/product/${pro.id}`}>
                    <div>
                        <div
                            class="bg-white border border-slate-200 shadow-sm w-full max-w-sm rounded-lg mx-auto mt-6 overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                            <div class="aspect-[3/2] w-full">
                                <img src={pro.image} class="w-full h-full object-cover" alt="Card image" />
                            </div>

                            <div class="p-4 sm:p-6">
                                <h3 class="text-slate-900 text-base font-semibold dark:text-slate-50">{pro.name}</h3>
                                <p class="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400">{pro.category}</p>

                                <a href="#"
                                    class="inline-block mt-6 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                    {pro.price}
                                </a>
                            </div>
                        </div>
                    </div>
                  </Link>
                ))
            }





        </div>
    )
}

export default Productpage
