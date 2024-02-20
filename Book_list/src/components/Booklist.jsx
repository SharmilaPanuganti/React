import { Book } from "./Book";
import { Books } from "./Books";
import { EventExamples } from "./EventExamples";

const img = "https://m.media-amazon.com/images/I/51xwGSNX-EL._SY445_SX342_.jpg";
const author = "jordan moore";
const title = "ikigai";

// const names = ["jhon", "peter"];
// const newNames = names.map((a) => {
//   return <h1>{names}</h1>;
// });

export const Booklist = () => {
  // const someval = "chitti robo";
  // const Display = () => {
  //   console.log(someval);
  // };
  // let checker;
  // const getBook = (checker) => {
  //   const booku = books.find((item) => item.id === checker);
  //   console.log(booku);
  // };

  return (
    <>
      <h1>Amazon Best seller Books</h1>
      <section className="booklist">
        {/* <Book author={author} img={img} title={title}></Book>
      <Book author={author} img={img} title={title} />
      <Book author={author} img={img} title={title} />
      <Book author={author} img={img} title={title} /> */}
        {/* <EventExamples /> */}

        {Books.map((book, index) => {
          return <Book {...book} key={book.id} number={` # ${index + 1}`} />;
        })}
      </section>
    </>
  );
};
