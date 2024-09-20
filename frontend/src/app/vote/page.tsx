import axios from 'axios';
import VoteList from "@/components/VoteList";

const VotePage = async () => {
  const response = await axios.get('http://localhost:3000/restaurant');
  const data = response.data;

  return <VoteList initialData={data} />;
};

export default VotePage;