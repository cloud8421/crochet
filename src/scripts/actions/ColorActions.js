import AppDispatcher from "../dispatcher/AppDispatcher";
import ColorActionTypes from "../constants/ColorConstants";
import ColorStore from "../stores/Color";

const Actions = {
  addColor: function(newColor) {
    AppDispatcher.handleViewAction({
      type: ColorActionTypes.ADD_COLOR,
      color: newColor
    });
  }
}

export default Actions;
