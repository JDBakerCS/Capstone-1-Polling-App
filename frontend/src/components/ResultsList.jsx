// This function calculates each bar's width compared with the highest vote count.
function getBarWidth(voteCount, highestVoteCount) {
  if (highestVoteCount === 0) {
    return 0;
  }

  return (voteCount / highestVoteCount) * 100;
}

function ResultsList({ options = [] }) {
  const sortedOptions = [...options].sort(
    (a, b) => (b.voteCount ?? 0) - (a.voteCount ?? 0),
  );
  const highestVoteCount = sortedOptions[0]?.voteCount ?? 0;

  return (
    <section className="results-list">
      <h2>Results</h2>

      {sortedOptions.length === 0 ? (
        <p className="empty-state">No results are available.</p>
      ) : (
        sortedOptions.map((option) => {
          const voteCount = option.voteCount ?? 0;
          const barWidth = getBarWidth(voteCount, highestVoteCount);

          return (
            <div
              key={option.id}
              className="result-item"
              style={{ marginBottom: "1rem" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "0.4rem",
                }}
              >
                <span>{option.text}</span>
                <span>
                  {voteCount} {voteCount === 1 ? "vote" : "votes"}
                </span>
              </div>

              <div
                aria-label={`${option.text}: ${voteCount} ${voteCount === 1 ? "vote" : "votes"}`}
                aria-valuemax={highestVoteCount || 1}
                aria-valuemin="0"
                aria-valuenow={voteCount}
                role="progressbar"
                style={{
                  width: "100%",
                  height: "16px",
                  backgroundColor: "var(--border)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${barWidth}%`,
                    height: "100%",
                    backgroundColor: "var(--accent)",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          );
        })
      )}
    </section>
  );
}

export default ResultsList;
