import axios from 'axios';
import EmployeeList from '@/components/EmployeeList';

export default async function EmployeePage() {
  try {
    const response = await axios.get('http://localhost:3000/employee');
    const data = response.data;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4 sm:mb-6 lg:mb-8">
          Employee Data
        </h1>
        <EmployeeList />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
        <p className="text-red-600 text-base sm:text-lg lg:text-xl">
          Error fetching data
        </p>
      </div>
    );
  }
}