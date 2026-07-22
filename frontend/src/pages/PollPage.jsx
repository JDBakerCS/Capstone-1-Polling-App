import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PollCard from "../components/PollCard";
import mockPolls from "../data/mockPolls";

function PollPage() {
const { pollId } = useParams();
  const navigate = useNavigate();
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const poll = mockPolls.find((poll) => String(poll.id) === pollId);

  if (!poll) {
    return (
      <main className="page-container">
        <h1>Poll Not Found</h1>
        <p className="empty-state">The requested poll does not exist.</p>
      </main>
    );
  }

  function handleVote() {
    if (selectedOptionId === null) {
      return;
    }

    navigate(`/polls/${poll.id}/results`);
  }

  return (
    <main className="page-container">
      <h1>Vote</h1>
      <PollCard
        poll={poll}
        mode="vote"
        selectedOptionId={selectedOptionId}
        onOptionSelect={setSelectedOptionId}
        onVote={handleVote}
      />
    </main>
  );
}

export default PollPage;
