jest.autoMockOff();

import LayoutStore from '../Layout';
import LayoutActions from '../../actions/LayoutActions';

describe('Layout store', function() {
  beforeEach(function() {
    LayoutActions.clearLayout();
  });

  it('starts empty', function() {
    expect(LayoutStore.getLayout().size).toEqual(0);
  });

  describe('generate a layout', function() {
    beforeEach(function() {
      LayoutActions.generateLayout(9, 3);
    });

    it('can generate a layout with 9 squares', function() {
      expect(LayoutStore.getLayout().size).toEqual(9);
    });

    it('every square has 3 colors', function() {
      let firstCombination = LayoutStore.getLayout().first();
      expect(firstCombination.size).toEqual(3);
    });
  });

});
