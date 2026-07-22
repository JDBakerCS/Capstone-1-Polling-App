function ResultsList({ options = [] }) {
  const sortedOptions = [...options].sort(
    (a, b) => (b.voteCount ?? 0) - (a.voteCount ?? 0),
  );

  return (
    <section className="results-list">
      <h2>Results</h2>

      {sortedOptions.length === 0 ? (
        <p className="empty-state">No results are available.</p>
      ) : (
        sortedOptions.map((option) => {
          const voteCount = option.voteCount ?? 0;

          return (
            <div key={option.id} className="result-item">
              <span>{option.text}</span>
              <span>
                {voteCount} {voteCount === 1 ? "vote" : "votes"}
              </span>
            </div>
          );
        })
      )}
    </section>
  );
}

export default ResultsList;
