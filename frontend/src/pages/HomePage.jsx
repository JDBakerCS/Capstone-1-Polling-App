import PollCard from "../components/PollCard";
import mockPolls from "../data/mockPolls";

function HomePage() {
  return (
    <main className="page-container">
      <h1>All Polls</h1>

      {mockPolls.length === 0 ? (
        <p className="empty-state">No polls have been created.</p>
      ) : (
        <div className="poll-list">
          {mockPolls.map((poll) => (
            <PollCard key={poll.id} poll={poll} mode="summary" />
          ))}
        </div>
      )}
    </main>
  );
}

export default HomePage;
