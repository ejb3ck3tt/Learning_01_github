import React, { FunctionComponent, useState } from "react";

interface Props {
  onSearch(term: string): void;
  onClear(): void;
}

const SearchComponent: FunctionComponent<Props> = (props) => {
  const { onSearch, onClear } = props;
  const [term, setTerm] = useState("");

  return (
    <div className="search-container">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search"
      />
      <button
        onClick={() => {
          onSearch(term);
          setTerm("");
        }}
        className="btn btn-submit"
      >
        Search Cover
      </button>
      <button onClick={onClear} className="btn btn-clear">Clear Results</button>
    </div>
  );
};

export default SearchComponent;
