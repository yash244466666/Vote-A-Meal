import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/employee/add">Add new Employee</Link></li>
                <li><Link href="/employee/get">Get all Employee</Link></li>
                <li><Link href="/restaurant/get">Get all restaurant</Link></li>
                <li><Link href="/restaurant/add">Add Restaurant</Link></li>
                <li><Link href="/vote">Vote</Link></li>
                
            </ul>
        </nav>
    </div>
  )
}

export default NavBar