import Votes from '@/components/VoteList'

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Votes Data</h1>
      <Votes />
    </div>
  )
}

export default page