import axios from 'axios';
import VoteList from "@/components/AddVoteForm";

const VotePage = async () => {
  const response = await axios.get('http://localhost:3000/restaurant');
  const data = response.data;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-center">Vote for Your Favorite Restaurant Food Packs</h1>
      <VoteList initialData={data} />
    </div>
  );
};

export default VotePage;