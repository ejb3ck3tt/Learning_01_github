import { useState, useRef, useEffect } from "react";

//user object
const users = [
  { name: "Sarah", age: 20 },
  { name: "Alexander", age: 20 },
  { name: "Mitch", age: 20 },
];

const UserSearch: React.FC = () => {
  // when creating a ref that refer to some kind of an html element, add <someType>, also add null if there is no ref assigned just yet
  //get a reference in the input element
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");

  //assign the value returned from search
  //add a generic type, in this case there is 2 set of possible types of values that can be assigned, a string, number or undefined
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  //hook
  //ensure to envoke only single time
  //to focus. To access the ref, make sure ref.current is actually defined
  // do an early check with a negative case !
  //check first because it might be null
  useEffect(() => {
    //make sure it's a defined value
    //return early, make sure it's not null
    if (!inputRef.current) {
      //if no value
      return;
    }
    inputRef.current.focus();
  }, []);

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
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
