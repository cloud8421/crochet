import AppDispatcher from "../dispatcher/AppDispatcher";
import LayoutActionTypes from "../constants/LayoutConstants";
import LayoutStore from "../stores/Layout";

const Actions = {
  generateLayout: function(squaresCount, colorsCount) {
    AppDispatcher.handleViewAction({
      type: LayoutActionTypes.GENERATE_LAYOUT,
      data: {
        squaresCount: squaresCount,
        colorsCount: colorsCount
      }
    });
  },
  clearLayout: function() {
    AppDispatcher.handleViewAction({
      type: LayoutActionTypes.CLEAR_LAYOUT
    });
  }
}

export default Actions;
