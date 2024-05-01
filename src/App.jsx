import React from 'react'
import SkeletonImage from './components/skeletonImage'
import LazyLoad from 'react-lazy-load'


function App() {

  return (
    <>
      <div className="flex flex-col items-center min-h-screen max-w-screen bg-slate-500">
        <LazyLoad width={600} height={400} threshold={0.60}>
        <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </LazyLoad>
        <LazyLoad width={600} height={400} threshold={0.60}>
        <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </LazyLoad>
        <LazyLoad width={600} height={400} threshold={0.60}>
        <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </LazyLoad>
        <LazyLoad width={600} height={400} threshold={0.60}>
        <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </LazyLoad>


      </div>
    </>
  )
}

export default App
