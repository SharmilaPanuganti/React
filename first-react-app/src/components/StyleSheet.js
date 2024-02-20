import "./myStyles.css";
StyleSheet = ({ primary }) => {
  let className = primary ? "primary" : "";
  return <h1 className={`${className} font-xl`}>Styelesheets....</h1>;
};
export default StyleSheet;
