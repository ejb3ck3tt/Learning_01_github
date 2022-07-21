// Typescript with class components

import { Component } from "react";
// import UserSearch from "../state/UserSearch";

interface UserSearchProps {
  users: {
    name: string;
    age: number;
  }[];
}

interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };
  //define method - callback
  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      //returns user name if found
      return user.name === this.state.name;
    });

    //update user state after search
    this.setState({ user: foundUser });
  };
  render() {
    const { name, user } = this.state;
    return (
      <div>
        User Search
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        {/* passing the callback */}
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
