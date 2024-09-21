import EmployeeForm from '@/components/AddEmployeeForm'
import React from 'react'

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <EmployeeForm />
    </div>
  )
}