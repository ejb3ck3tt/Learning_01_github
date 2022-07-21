import { connect } from "react-redux";
import { RootState } from "../state/reducers/rootReducer";
import * as actionTypes from "../state/types/actionTypes";
import UnsplashComponent from "./UnsplashComponent";

const mapStateToProps = (state: RootState) => {
  return {
    data: state.unsplash.data,
    isLoading: state.isLoading[actionTypes.GET_UNSPLASH],
    error: state.error[actionTypes.GET_UNSPLASH],
    hasMoreListing: state.unsplash.hasMoreListing,
  };
};

export default connect(mapStateToProps, null)(UnsplashComponent);
