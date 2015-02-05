jest.autoMockOff();

import ColorStore from '../Color';
import ColorActions from '../../actions/ColorActions';

describe('Color store', function() {
  beforeEach(function() {
    ColorActions.clearColors();
  });

  it('starts empty', function() {
    expect(ColorStore.getColors().size).toEqual(0);
  });

  it('can add a color', function() {
    ColorActions.addColor('#ffffff');
    expect(ColorStore.getColors().size).toEqual(1);
    expect(ColorStore.getColors().first()).toEqual('#ffffff');
  });

  it('can replace a color', function() {
    ColorActions.addColor('#ffffff');
    ColorActions.replaceColor(0, '#cccccc');
    expect(ColorStore.getColors().size).toEqual(1);
    expect(ColorStore.getColors().first()).toEqual('#cccccc');
  });
});

