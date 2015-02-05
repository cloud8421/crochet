import AppDispatcher from "../dispatcher/AppDispatcher";
import ColorActionTypes from "../constants/ColorConstants";
import ColorStore from "../stores/Color";

const Actions = {
  addColor: function(newColor) {
    AppDispatcher.handleViewAction({
      type: ColorActionTypes.ADD_COLOR,
      color: newColor
    });
  },
  replaceColor: function(oldColor, newColor) {
    AppDispatcher.handleViewAction({
      type: ColorActionTypes.REPLACE_COLOR,
      data: {
        oldColor: oldColor,
        newColor: newColor
      }
    });
  },
  clearColors: function() {
    AppDispatcher.handleViewAction({
      type: ColorActionTypes.CLEAR_COLORS
    });
  }
}

export default Actions;
