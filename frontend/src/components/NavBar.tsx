import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/add-new-employee">Add new Employee</Link></li>
                <li><Link href="/get-all-employee">Get all Employee</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar