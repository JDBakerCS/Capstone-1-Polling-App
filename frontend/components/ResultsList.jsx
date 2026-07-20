function ResultsList({ options }) {
  const sortedOptions = [...options].sort(
    (a, b) => b.voteCount - a.voteCount
  );

  return (
    <section>
      <h2>Results</h2>

      {sortedOptions.map((option) => (
        <div key={option.id} className="result-item">
          <span>{option.text}</span>
          <span>{option.voteCount} votes</span>
        </div>
      ))}
    </section>
  );
}

export default ResultsList;
