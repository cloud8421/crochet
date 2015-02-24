jest.autoMockOff();

import LayoutStore from '../Layout';
import ColorActions from '../../actions/ColorActions';
import LayoutActions from '../../actions/LayoutActions';

describe('Layout store', () => {
  beforeEach(() => {
    LayoutActions.clearLayout();
  });

  it('starts empty', () => {
    expect(LayoutStore.getLayout().size).toEqual(0);
  });

  describe('generate a layout', () => {
    beforeEach(() => {
      ColorActions.clearColors();
      ColorActions.addColor('#ffffff');
      ColorActions.addColor('#cccccc');
      ColorActions.addColor('#121212');
      LayoutActions.setWidth(3);
      LayoutActions.setHeight(3);
      LayoutActions.generateLayout();
    });

    it('can generate a layout with 9 squares', () => {
      expect(LayoutStore.getLayout().size).toEqual(9);
    });

    it('every square has 3 colors', () => {
      let firstCombination = LayoutStore.getLayout().first();
      expect(firstCombination.size).toEqual(3);
    });
  });

});
