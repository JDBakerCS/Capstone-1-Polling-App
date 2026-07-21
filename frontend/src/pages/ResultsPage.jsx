import { useParams } from "react-router-dom";
import PollCard from "../components/PollCard";
import mockPolls from "../data/mockPolls";

function ResultsPage() {
  const { id } = useParams();
  const poll = mockPolls.find((poll) => String(poll.id) === id);

  if (!poll) {
    return (
      <main className="page-container">
        <h1>Poll Not Found</h1>
        <p className="empty-state">The requested poll does not exist.</p>
      </main>
    );
  }

  return (
    <main className="page-container">
      <h1>Poll Results</h1>
      <PollCard poll={poll} mode="results" />
    </main>
  );
}

export default ResultsPage;
