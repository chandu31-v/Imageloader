import React, { useState, useEffect, useRef } from "react";
import SkeletonLoader from "./skeletonLoader";


function ImageLoader({ url, alt }) {

    const [imageLoaded, setImageLoaded] = useState(false)
    const [error, setError] = useState(false)
    const imageRef = useRef()

    useEffect(() => {

        /*
        // const observer = new IntersectionObserver(
        //     ([viewPoint]) => {
        //         if (viewPoint.isIntersecting) {

        //             setTimeout(() => {

        //                 //to handle case when images does not load
        //                 try {
        //                     setImageLoaded(true)
        //                     observer.unobserve(imageRef.current);
        //                     //throw error
        //                 } catch (e) {
        //                     setError(true)
        //                 }
        //             }, 3000)
        //         }
        //     }
        // );

        // if (imageRef.current) {
        //     observer.observe(imageRef.current);
        // }

        // //clean up code
        // return () => {
        //     if (imageRef.current) {
        //         observer.unobserve(imageRef.current);
        //     }
        //     clearTimeout()
        // }
        */

        setTimeout(() => {

            //to handle case when images does not load
            try {
                setImageLoaded(true)
                //throw error
            } catch (e) {
                setError(true)
            }
        }, 3000)

        return ()=>{
            clearTimeout()
        }


    }, [])

    return (
        <>
            <div className="relative flex justify-center items-center w-full h-full mb-4 p-4">

                <div className={`skeletonLoaderId absolute transition-opacity ease-out duration-300 ${imageLoaded || error ? 'opacity-0' : 'opacity-100'}`}>
                    <SkeletonLoader />
                </div>

                {
                    error ?
                        <p className="text-red-900 font-bold">Error loading image!!</p> :
                        // imageLoaded &&
                        <img
                            src={url}
                            alt={alt}
                            ref={imageRef}
                            // onLoad={onImageLoad}
                            loading="lazy"
                            className={`rounded-lg object-cover fade-in transition-opacity ease-in-out duration-5000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />
                }

            </div>
        </>
    )

}

export default ImageLoader
