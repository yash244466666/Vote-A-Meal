import axios from 'axios';
import EmployeeList from '@/components/EmployeeList';

export default async function EmployeePage() {
  try {
    const response = await axios.get('http://localhost:3000/employee');
    const data = response.data;

    return (
      <div>
        <h1>Employee Data</h1>
        <EmployeeList initialData={data} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <p>Error fetching data</p>
      </div>
    );
  }
}