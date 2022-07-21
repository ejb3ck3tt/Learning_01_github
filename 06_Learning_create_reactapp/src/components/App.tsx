import React, { FunctionComponent } from "react";
import SearchComponent from "./Search";
import UnsplashComponent from "./Unsplash";

const App: FunctionComponent = (props) => {
  return (
    <div className="container">
      <div>
        <h2>Search Cover</h2>
      </div>
      <SearchComponent />
      <UnsplashComponent
        data={[]}
        isLoading={false}
        error={""}
        hasMoreListing={[]}
      />
    </div>
  );
};

export default App;
