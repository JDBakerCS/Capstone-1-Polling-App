import PollCard from "../components/PollCard";
import { useState, useEffect } from "react";

const API_URL = "https://capstone-1-polling-app.onrender.com";

function HomePage() {
const [Polls, setPolls]= useState([])


  async function allPolls() {
    let response = await fetch(`${API_URL}/polls`);
    let data = await response.json();
    setPolls(data);
  }

  return (
    <main className="page-container">
      <h1>All Polls </h1>
      {Polls.length === 0 ? (
        <p className="empty-state">No polls have been created.</p>
      ) : (
        <div className="poll-list">
          {Polls.map((poll) => (
            <PollCard key={poll.id} poll={poll} mode="summary" />
          ))}
        </div>
      )}
    </main>
  );
}

export default HomePage;
