import Winner from '../components/Winner';
// import 'tailwindcss/tailwind.css';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Vote-A-Meal</h1>
      <Winner />
    </div>
  );
};

export default Home;