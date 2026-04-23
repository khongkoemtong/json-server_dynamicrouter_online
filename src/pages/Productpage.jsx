import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Productpage() {
    const [data, setdata] = useState([])
    const [search , setsearch] = useState("")

    useEffect(() => {
        const FetchAPi = async () => {
            const req = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d8d339a3367eef52270221ac27edf651')
            const res = await req.json()

            setdata(res.results)
        }
        FetchAPi()
    }, [])

    console.log(data)





    const search_data = data.filter(item=>{
        return item.title.toLowerCase().includes(search.toLowerCase())
    })



    

    



    return (
        <div>

           <div className='flex justify-center m-[30px]'>
             <input type="text" onChange={(e)=>{setsearch(e.target.value)}}  className='bg-amber-300' />
           </div>


        <div className='grid grid-cols-4 gap-3'>


          

            {
                search_data.map(pro => (
                  <Link to={`/product/${pro.id}`}>
                    <div>
                        <div
                            class="bg-white border border-slate-200 shadow-sm w-full max-w-sm rounded-lg mx-auto mt-6 overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                            <div class="aspect-[3/2] w-full">
                                <img src={`https://image.tmdb.org/t/p/w500${pro.poster_path}`} class="w-full h-full object-cover" alt="Card image" />
                            </div>

                            <div class="p-4 sm:p-6">
                                <h3 class="text-slate-900 text-base font-semibold dark:text-slate-50">{pro.title}</h3>
                                <p class="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400">{pro.original_title}</p>

                                <a href="#"
                                    class="inline-block mt-6 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                    {pro.release_date}
                                </a>
                            </div>
                        </div>
                    </div>
                  </Link>
                ))
            }





        </div>
        </div>
    )
}

export default Productpage
