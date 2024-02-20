export const NameList = ({ pers }) => {
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
  //   const temp= {names.map(
  //         (name, index) => (
  //           <h2 key={index}>{name}</h2>
  //         ) //// give key for react to undrstand properly
  //       )}
  const personl = persons.map((person) => (
    <h2 key={person.id}>{person.name} </h2>
  ));

  return personl;
};

