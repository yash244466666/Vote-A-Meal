import Winner from '../components/Winner';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">Welcome to Vote-A-Meal</h1>
      <Link className="bg-blue-500 text-white px-4 py-2 my-3 rounded-md hover:bg-blue-600" href="/vote">
        Add Your Vote
      </Link>
      <Winner />
    </div>
  );
};

export default Home;