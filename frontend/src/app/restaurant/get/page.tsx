import axios from 'axios';
import RestaurantList from '@/components/RestaurantList';

export default async function RestaurantPage() {
  try {
    const response = await axios.get('http://localhost:3000/restaurant');
    const data = response.data;

    return (
      <div>
        <h1>Restaurant Data</h1>
        <RestaurantList initialData={data} />
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