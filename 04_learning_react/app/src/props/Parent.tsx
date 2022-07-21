//parent is where you display the interface
import { ChildAsFC } from "./Child";

const Parent = () => {
  // add the prop
  return (
    // this will have error because we're expecting to receive some Child Props
    // <Child color="red" onClick={() => console.log("Clicked")}>
    //   {/* Anything inside here are children */}
    //   <h1>Test</h1>
    // </Child>

    //No error because it is annotated as React.FC interface does expect to receive children prop
    <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
      {/* Anything inside here are children */}
      <h1>Test</h1>
    </ChildAsFC>
  );
};

export default Parent;
