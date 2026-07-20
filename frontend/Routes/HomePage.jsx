import { useEffect, useState } from "react";
import PollCard from "../components/PollCard";
import { getPolls } from "../services/pollApi";

function HomePage() {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPolls() {
      try {
        const data = await getPolls();
        setPolls(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadPolls();
  }, []);

  if (loading) {
    return <p>Loading polls...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>All Polls</h1>

      {polls.length === 0 ? (
        <p>No polls have been created.</p>
      ) : (
        polls.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))
      )}
    </main>
  );
}

export default HomePage;