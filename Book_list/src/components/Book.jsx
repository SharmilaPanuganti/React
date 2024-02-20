import { Image } from "./Image";
import { Title } from "./Title";
import { Author } from "./Author";

const inlineStylee = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
  letterSpacing: "2px",
};
export const Book = ({ img, author, title, Display, id, number, children }) => {
  // const getSing = () => {
  //   {
  //     Display(id);
  //   }
  // };
  return (
    <article className="book">
      <img src={img}></img>
      <h2>{title}</h2>
      <h4 style={inlineStylee}>{author}</h4>
      {/* <button>click --here --</button> */}
      <span>{number}</span>
      {children}
    </article>
  );
};
