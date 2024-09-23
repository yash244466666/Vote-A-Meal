import axios from 'axios';
import Head from 'next/head';
import VoteList from "@/components/vote/AddVoteForm";

const VotePage = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log('API URL:', apiUrl);

  try {
    const response = await axios.get(`${apiUrl}/restaurant`);
    const data = response.data;

    return (
      <>
        <Head>
          <title>Vote for Your Favorite Restaurant Food Packs</title>
          <meta name="description" content="Vote for your favorite restaurant food packs and help us choose the best ones!" />
        </Head>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-center">Vote for Your Favorite Restaurant Food Packs</h1>
          <VoteList initialData={data} />
        </div>
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4 text-center">Error fetching data</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
};

export default VotePage;