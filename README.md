
# Steps to run:
1.clone or download repository in local.

2.In file location enter - npm install.

3.to run - npm run dev.


# Implementation of skeleton Loader

## Components and its implementation:
I have created two components namely skeletonImage.jsx and skeletonLoader.jsx
SkeletonLoader component is loaded when application is mounted and image replaces the loader after image is fetched(here we have used 3sec timeOut). SkeletonLoader has a simple paragraph tag with text “Loading...” which signifies that the image is loading.
SkeletomImage.jsx components takes two props: url and alt, on mount phase, SkeletomLoader component is loaded and later SkeletonImage component is loaded after timeout of 3 seconds.

## Error handling:
We have used try catch to catch any image loading error and display it to user.

## Hooks used:
1.useState - to maintain loading state of image.

2.useEffect - to trigger a setTimeOut when the application is mounted.

3.useRef - to hold the reference of image, to use it for lazy loading.

## Styling:
Tailwind css is used for styling.

## Unit testing(test failed with babel error):
Created a test file “skeletonImage.jsx”, here we are trying to render the skeletonImage component and if the loader component was rendered by checking its id “skeletonLoaderId”.

## Challenges:
Trying to implement lazy-loading was a challenge, tried different methods and implemented it.

Tried multiple ways to implement jest unit testing, but the unit testing is not working and throws the error:

“Support for the experimental syntax 'jsx' isn't currently enabled.
