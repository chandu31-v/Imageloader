import React, { Suspense, lazy } from 'react'
//import SkeletonImage from './components/skeletonImage'

const SkeletonImage = lazy(() => import("./components/skeletonImage"))

function App() {

  return (
    <>

    {/* used lazy and suspense to implement lazy loading */}
      <div className="min-h-screen max-w-screen bg-slate-500 p-0 m-0">
        <Suspense fallback={<div>Loading...</div>}>
          <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
        </Suspense>

        {/* <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
      <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
      <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
      <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
      <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
      <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />
      <SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" /> */}

      </div>
    </>
  )
}

export default App
