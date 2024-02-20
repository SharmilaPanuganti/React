const names = ["apple", "samsung", "redmi", "skoda"];
const persons = [
  {
    id: 1,
    name: "test",
    course: "cse",
  },
  {
    id: 2,
    name: "test2",
    course: "cse",
  },
];

const personl = persons.map((person) => <h2 key={person.id}>{person.name}</h2>);
