import ReactDOM from "react-dom";
// import UserSearch from "./state/UserSearch";
// import EventComponent from "./events/EventComponent";
// import UserSearch from "./classes/UserSearch";
import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      {/* <UserSearch /> */}
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
