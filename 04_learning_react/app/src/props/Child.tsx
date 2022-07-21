interface ChildProps {
  // props
  color: string;
  // void no return value
  onClick: () => void;
}

// Parent -> Child
// Interface to define what props Child expects to receive

// 2 big checks by TS
// 1. Are we providing the correct props to child when we show it in parent? (parent check)
// 2. Are we using the correctly named + typed props in Child? (Child check)

//apply props as argument
//child here is a function that receive an argument of
//type 'ChildProps' - Downside, TS doesn't understand that we are defining a React Component
// this doesn't tell TS that we are using a React Component
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// All React Components can optionally provide these properties
// propTypes, displayName, defaultProps, contextTypes
// Typscript doesn't know that we're making a React component, so it thinks that 'Child' will not have these properties.
// For example
// Child.displayName - this will show as an err

// Another way of defining a function component
//tells TS that the Child will be a React function component
// 'Child' might have properties assigned to it like 'propTypes' and 'contextTypes'
// 'Child' will receive props object of type 'ChildProps'
// FC is short for FunctionComponent
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// ChildAsFC.displayName - all additional props will now show up;
