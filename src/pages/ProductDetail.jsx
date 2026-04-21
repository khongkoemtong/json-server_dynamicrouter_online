import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

      const [data, setdata] = useState([])
      const {id} = useParams()
    
        useEffect(() => {
            const FetchAPi = async () => {
                const req = await fetch(`http://localhost:3000/product/${id}`)
                const res = await req.json()
    
                setdata(res)
            }
            FetchAPi()
        }, [id])

     



    return (
        <div>

            {
               
                    <div
                class="bg-white p-4 sm:p-6 border border-slate-200 shadow-sm w-full max-w-sm rounded-lg mx-auto mt-6 overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                <div class="aspect-[3/2] w-full flex items-center justify-center">
                    <img src={data.image} class="max-h-full w-auto object-contain" alt="watch product image" />
                </div>

                <hr class="border-slate-300 my-6 dark:border-neutral-700" />

                <div>
                    <h3 class="text-slate-900 text-lg font-semibold dark:text-slate-50">{data.name}</h3>
                    <div class="flex items-center gap-1 mt-3" role="img" aria-label="4.5 out of 5 stars, based on 50 reviews">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-3.5 shrink-0" viewBox="0 0 511.987 511" aria-hidden="true">
                            <path fill="#ffc107"
                                d="M510.652 195.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77c-4.31-10.023-14.122-16.509-25.024-16.509s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 0 0-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0"
                                data-original="#ffc107">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-3.5 shrink-0" viewBox="0 0 511.987 511" aria-hidden="true">
                            <path fill="#ffc107"
                                d="M510.652 195.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77c-4.31-10.023-14.122-16.509-25.024-16.509s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 0 0-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0"
                                data-original="#ffc107">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-3.5 shrink-0" viewBox="0 0 511.987 511" aria-hidden="true">
                            <path fill="#ffc107"
                                d="M510.652 195.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77c-4.31-10.023-14.122-16.509-25.024-16.509s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 0 0-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0"
                                data-original="#ffc107">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-3.5 shrink-0" viewBox="0 0 511.987 511" aria-hidden="true">
                            <path fill="#ffc107"
                                d="M510.652 195.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77c-4.31-10.023-14.122-16.509-25.024-16.509s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 0 0-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0"
                                data-original="#ffc107">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-3.5 shrink-0" fill="#ffc107" viewBox="0 0 511.987 511"
                            aria-hidden="true">
                            <path
                                d="M114.594 501.14c-5.61 0-11.18-1.75-15.934-5.187a27.223 27.223 0 0 1-10.582-28.094l32.938-145.09L9.312 224.81a27.188 27.188 0 0 1-7.976-28.907 27.208 27.208 0 0 1 23.402-18.71l147.797-13.419L230.97 27.027c4.307-10.047 14.119-16.535 25.022-16.535s20.715 6.488 25.024 16.512l58.433 136.77 147.774 13.417c10.882.98 20.054 8.344 23.425 18.711 3.372 10.368.254 21.739-7.957 28.907L390.988 322.75l32.938 145.086c2.414 10.668-1.727 21.7-10.578 28.098-8.832 6.398-20.61 6.89-29.91 1.3l-127.446-76.16-127.445 76.203c-4.309 2.559-9.11 3.864-13.953 3.864zm141.398-112.874c4.844 0 9.64 1.3 13.953 3.859l120.278 71.938-31.086-136.942a27.21 27.21 0 0 1 8.62-26.516l105.473-92.5-139.543-12.671a27.18 27.18 0 0 1-22.613-16.493L255.992 49.895 200.844 178.96c-3.883 9.195-12.524 15.512-22.547 16.43L38.734 208.062l105.47 92.5c7.554 6.614 10.858 16.77 8.62 26.54l-31.062 136.937 120.277-71.914c4.309-2.559 9.11-3.86 13.953-3.86zm-84.586-221.848s0 .023-.023.043zm169.13-.063.023.043c0-.023 0-.023-.024-.043zm0 0"
                                data-original="#000000">
                            </path>
                        </svg>
                        <span aria-hidden="true" class="text-slate-900 ml-1.5 text-sm font-medium dark:text-slate-50">(50)</span>
                    </div>

                    <div class="mt-6 flex justify-between items-center gap-4 flex-wrap">
                        <span class="text-xl text-slate-900 font-bold dark:text-slate-50">${data.price}</span>
                        <a href="#"
                            class="inline-block py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                            Order now
                        </a>
                    </div>
                </div>
            </div>
                
            }

        </div>
    )
}

export default ProductDetail
