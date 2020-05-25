// Imports
import React from 'react'

// App Imports
import Home from './Containers/Home/index'
import ProductDetails from './Containers/ProductDetails/index'
import CategoryDetails from './Containers/CategoryDetails/index'
import Checkout from './Containers/Checkout/index'
import Cart from './Containers/Cart/index'
import UserProfile from './Containers/UserProfile/index'
import Error from './Containers/Error/index'
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
        path: '/category-details',
        component: CategoryDetails,
        exact: true
    },
    {
        path: '/checkout',
        component: Checkout,
        exact: true
    },
    {
        path: '/cart',
        component: Cart,
        exact: true
    },
    {
        path: '/my-profile',
        component: UserProfile,
        exact: true
    },
    {
        path: '/?params:',
        component: Error,
    },
    {
        component: Error,
    },
]

export default routes
