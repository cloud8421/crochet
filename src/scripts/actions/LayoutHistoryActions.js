import AppDispatcher from "../dispatcher/AppDispatcher";
import LayoutHistoryActionTypes from "../constants/LayoutHistoryConstants";

const Actions = {
  setPage: function(pageNumber) {
    AppDispatcher.handleViewAction({
      type: LayoutHistoryActionTypes.SET_PAGE,
      pageNumber: pageNumber
    });
  }
}

export default Actions;
