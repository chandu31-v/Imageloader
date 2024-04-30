import React, { useState, useEffect } from "react";
import SkeletonLoader from "./skeletonLoader";
//import LazyLoad from "react-lazyload";


function ImageLoader({ url, alt }) {

    const [imageLoaded, setImageLoaded] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setTimeout(() => {

            //to handle case when images does not load
            try {
                setImageLoaded(true)
                //throw error
            } catch (e) {
                setError(true)
            }
        }, 3000)

        //clean up
        return () => {
            clearTimeout()
        }

    }, [])

    return (
        <>
            <div className="relative flex justify-center items-center w-full h-full mb-4">

                <div className={`skeletonLoaderId absolute transition-opacity ease-out duration-300 ${imageLoaded || error ? 'opacity-0' : 'opacity-100'}`}>
                    <SkeletonLoader />
                </div>

                {
                    error ?
                        <p className="text-red-900 font-bold">Error loading image!!</p> :
                        <img
                            src={url}
                            alt={alt}
                            className={`rounded-lg object-cover transition-opacity ease-in delay-75 duration-2000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />}

            </div>
        </>
    )

}

export default ImageLoader
