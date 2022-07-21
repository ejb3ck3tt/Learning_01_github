import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';
import { isAbsolute } from 'path';

const UnsplashList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchUnsplash } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchUnsplash(term);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
        <button placeholder='Search images'>Search Image</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      <div className='container'>
        {/* {!error && !loading && data.map((urls) => console.log(urls.small))} */}
        {!error &&
          !loading &&
          data.map((urls) => (
            <div>
              <div className='card' key={urls}>
                <img src={urls} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default UnsplashList;
