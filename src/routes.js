// Imports
import React from 'react'

// App Imports
import Home from './Containers/Home/index'
import ProductDetails from './Containers/ProductDetails/index'
import Checkout from './Containers/Checkout/index'
// Routes
const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/product-details',
        component: ProductDetails,
        exact: true
    },
    {
        path: '/checkout',
        component: Checkout,
        exact: true
    },
    {
        path: '/?params:',
        component: Error,
    },
]

export default routes
