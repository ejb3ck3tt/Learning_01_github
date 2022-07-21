import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector'; //hooks
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  //local state
  const [term, setTerm] = useState('');
  //call action and destructure searchRepositories
  const { searchRepositories } = useActions();
  //add type to help understand ts what type to use
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  //add event type
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //prevents refreshing the page
    event.preventDefault();
    //pass the term
    searchRepositories(term);
  };

  return (
    <div>
      {/* {onSubmit} callback function passing off to onSubmit event handler,  */}
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
