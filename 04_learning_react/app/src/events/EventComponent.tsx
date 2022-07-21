import React from "react";

const EventComponent: React.FC = () => {
  // const onChange = (e) => {
  //this is the same as type inference, just manually placing it.
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event, "hello");
  };

  return (
    <div>
      {/* type inference system, reason may have error. onChange Understands that there is a callback function to it that have first arg that may called as event and type will be React.ChangeEvent<HTMLInputElement>  */}
      {/* Bear in mind that type inference system is not applied if we define the function ahead of time. It only applies inside the JSX when we define that callback function directly in line*/}
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        <h1>Drag me!</h1>
      </div>
    </div>
  );
};

export default EventComponent;
