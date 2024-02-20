import { ChildComponent } from "./ChildComponent";
const ParentComponent = () => {
  const greetParent = (childname) => {
    // console.log("hello parent");
    alert("hello parent {childname} ");
  };
  return <ChildComponent greetHandler={greetParent} />;
};
export default ParentComponent;
