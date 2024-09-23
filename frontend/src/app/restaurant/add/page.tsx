import axios from 'axios';
import AddRestaurantForm from '@/components/restaurant/AddRestaurantForm';

export default async function RestaurantPage() {
  try {
    const response = await axios.get('http://localhost:3000/restaurant');
    const data = response.data;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

        <AddRestaurantForm />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-600">Error fetching data</p>
      </div>
    );
  }
}