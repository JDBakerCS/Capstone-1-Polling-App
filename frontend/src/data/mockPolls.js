const mockPolls = [
  {
    id: 1,
    title: "Favorite programming language?",
    description: "Choose one.",
    options: [
      {
        id: 10,
        text: "JavaScript",
        voteCount: 4,
      },
      {
        id: 11,
        text: "Python",
        voteCount: 3,
      },
      {
        id: 12,
        text: "Java",
        voteCount: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Best time for a team meeting?",
    description: "Select the time that works best for you.",
    options: [
      {
        id: 20,
        text: "Morning",
        voteCount: 2,
      },
      {
        id: 21,
        text: "Afternoon",
        voteCount: 5,
      },
      {
        id: 22,
        text: "Evening",
        voteCount: 0,
      },
    ],
  },
];

export default mockPolls;
