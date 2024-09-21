import axios from 'axios';
import VoteList from "@/components/AddVoteForm";

const VotePage = async () => {
  const response = await axios.get('http://localhost:3000/restaurant');
  const data = response.data;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Vote for Your Favorite Restaurant</h1>
      <VoteList initialData={data} />
    </div>
  );
};

export default VotePage;