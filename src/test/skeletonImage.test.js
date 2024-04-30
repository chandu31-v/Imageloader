import React from "react";
import SkeletonImage from "../components/skeletonImage"
//import SkeletonLoader from "../components/skeletonLoader";
import {render,waitFor} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';

describe("SkeletonImage testing",()=>{

    test("SkeletonLoader on component mount",async()=>{
        const {getByTestId} = render(<SkeletonImage url="https://www.shutterstock.com/image-photo/vidhan-soudha-bangalore-_-image-600nw-1433353757.jpg" alt="bangalore-place" />)
        const skeletonLoader = getByTestId('skeletonLoaderId')

        expect(skeletonLoader).toBeInTheDocument();
    })

    // it("SkeletonImage loads after 3 seconds",async()=>{})

    // it("error if image does not load",async()=>{})

})

