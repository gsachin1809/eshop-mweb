// Imports
import React from 'react'

// App Imports
import Home from './Containers/Home/index'
// Routes
const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/?params:',
        component: Error,
    },
]

export default routes
