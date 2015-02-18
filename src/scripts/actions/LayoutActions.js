import AppDispatcher from "../dispatcher/AppDispatcher";
import LayoutActionTypes from "../constants/LayoutConstants";
import LayoutStore from "../stores/Layout";

const Actions = {
  generateLayout: function() {
    AppDispatcher.handleViewAction({
      type: LayoutActionTypes.GENERATE_LAYOUT
    });
  },
  clearLayout: function() {
    AppDispatcher.handleViewAction({
      type: LayoutActionTypes.CLEAR_LAYOUT
    });
  },
  restoreLayout: function(layout) {
    AppDispatcher.handleViewAction({
      type: LayoutActionTypes.RESTORE_LAYOUT,
      layout: layout
    });
  },
  setWidth: function(newWidth) {
    AppDispatcher.handleViewAction({
      type: LayoutActionTypes.SET_WIDTH,
      width: newWidth
    });
  },
  setHeight: function(newHeight) {
    AppDispatcher.handleViewAction({
      type: LayoutActionTypes.SET_HEIGHT,
      height: newHeight
    });
  },
  setNumberOfLayers: function(newNumberOfLayers) {
    AppDispatcher.handleViewAction({
      type: LayoutActionTypes.SET_NUMBER_OF_LAYERS,
      numberOfLayers: newNumberOfLayers
    });
  }
}

export default Actions;
