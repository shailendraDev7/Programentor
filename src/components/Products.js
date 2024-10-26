import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
    return (
        <>
            <div>
                <h3>Products Page</h3>
            </div>
            <nav>
                <Link to='shirts'>Shirts</Link>
                <Link to='jeans'>Jeans</Link>
            </nav>
            {/* //Displays menu */}
            <Outlet/> 
        </>
    )
}

export default Products
