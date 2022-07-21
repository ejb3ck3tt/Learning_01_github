import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getUnsplash, setUnsplash } from "../state/action-creators";
import { UnsplashAction } from "../state/types/actionTypes";
import SearchComponent from "./SearchComponent";

const mapDispatchToProps = (dispatch: Dispatch<UnsplashAction>) => ({
  onSearch: (term: string) => {
    dispatch(getUnsplash(term));
  },
  onClear: () => {
    dispatch(setUnsplash([], []));
  },
});

export default connect(null, mapDispatchToProps)(SearchComponent);
