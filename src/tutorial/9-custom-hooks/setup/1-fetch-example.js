import React from 'react'
import {useFetch} from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
    // eslint-disable-next-line no-unused-vars
    const {loading, products} = useFetch(url);

    return (
        <div>
            <h2>{loading ? 'loading...' : 'data'}</h2>
        </div>
    )
}

export default Example
