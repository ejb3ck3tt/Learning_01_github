import { useState } from "react"; //hook

const GuestList: React.FC = () => {
  //create state
  const [name, setName] = useState("");
  //create an array to store guests
  // tell typescript what is the type so it won't error out... storing from string to an array but not sure what type it is
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    //call setName to cause the input to empty out
    setName("");
    //get the value of the name and add it to the guests array by calling
    //if you add a name inside the brack, it will remove the previous value
    // setGuests([name]);
    //this will take the current array of guests, take all the different strings out of it, add it to a new array, and then add on name to the very end
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
