import { useState } from "react";

//user object
const users = [
  { name: "Sarah", age: 20 },
  { name: "Alexander", age: 20 },
  { name: "Mitch", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");

  //assign the value returned from search
  //add a generic type, in this case there is 2 set of possible types of values that can be assigned, a string, number or undefined
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      //returns user name if found
      return user.name === name;
    });

    //update user state after search
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      {/* display name */}
      {/* try to access the user.name if user is a truthy value, if it is undefined then print user value*/}
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};
export default UserSearch;
