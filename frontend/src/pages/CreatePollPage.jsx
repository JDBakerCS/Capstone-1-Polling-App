import { useState } from "react";

function createOption(id) {
  return {
    id,
    text: "",
    voteCount: 0,
  };
}

function CreatePollPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState([
    createOption(1),
    createOption(2),
  ]);
  const [error, setError] = useState("");
  const [submittedPoll, setSubmittedPoll] = useState(null);

  function handleOptionChange(optionId, text) {
    setOptions((currentOptions) =>
      currentOptions.map((option) =>
        option.id === optionId ? { ...option, text } : option,
      ),
    );
  }

  function handleAddOption() {
    setOptions((currentOptions) => {
      const nextOptionId =
        Math.max(...currentOptions.map((option) => option.id), 0) + 1;

      return [...currentOptions, createOption(nextOptionId)];
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const nonEmptyOptions = options
      .filter((option) => option.text.trim())
      .map((option) => ({ ...option, text: option.text.trim() }));

    if (!trimmedTitle || nonEmptyOptions.length < 2) {
      setError("Enter a title and at least two options.");
      setSubmittedPoll(null);
      return;
    }

    const poll = {
      id: Date.now(),
      title: trimmedTitle,
      description: description.trim(),
      options: nonEmptyOptions,
    };

    setError("");
    setSubmittedPoll(poll);
  }

  return (
    <main className="page-container">
      <h1>Create a Poll</h1>

      <form className="poll-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="poll-title">Title</label>
        <input
          id="poll-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label htmlFor="poll-description">Description</label>
        <textarea
          id="poll-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows="4"
        />

        <fieldset>
          <legend>Options</legend>

          {options.map((option, index) => (
            <div className="form-option" key={option.id}>
              <label htmlFor={`option-${option.id}`}>
                Option {index + 1}
              </label>
              <input
                id={`option-${option.id}`}
                type="text"
                value={option.text}
                onChange={(event) =>
                  handleOptionChange(option.id, event.target.value)
                }
                required={index < 2}
              />
            </div>
          ))}
        </fieldset>

        <button type="button" onClick={handleAddOption}>
          Add Option
        </button>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        <button type="submit">Create Poll</button>
      </form>

      {submittedPoll && (
        <section className="local-preview" aria-live="polite">
          <h2>Local Poll Preview</h2>
          <h3>{submittedPoll.title}</h3>
          {submittedPoll.description && <p>{submittedPoll.description}</p>}
          <ul>
            {submittedPoll.options.map((option) => (
              <li key={option.id}>{option.text}</li>
            ))}
          </ul>
          <p>This poll has not been saved to a backend.</p>
        </section>
      )}
    </main>
  );
}

export default CreatePollPage;
