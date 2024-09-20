import axios from 'axios';
import AddRestaurantForm from '@/components/AddRestaurantForm';

export default async function RestaurantPage() {
  try {
    const response = await axios.get('http://localhost:3000/restaurant');
    const data = response.data;

    return (
      <div>
        <h1>Restaurant Data</h1>
        <AddRestaurantForm  />
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