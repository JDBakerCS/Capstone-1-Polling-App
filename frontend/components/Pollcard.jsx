import { Link } from "react-router-dom";

function PollCard({ poll }) {
  return (
    <article className="poll-card">
      <h2>{poll.title}</h2>

      {poll.description && <p>{poll.description}</p>}

      <Link to={`/polls/${poll.id}`}>View Poll</Link>
    </article>
  );
}

export default PollCard;
