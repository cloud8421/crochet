jest.autoMockOff();

import ColorStore from '../Color';
import ColorActions from '../../actions/ColorActions';

describe('Color store', () => {
  beforeEach(() => {
    ColorActions.clearColors();
  });

  it('starts empty', () => {
    expect(ColorStore.getColors().size).toEqual(0);
  });

  it('can add a color', () => {
    ColorActions.addColor('#ffffff');
    expect(ColorStore.getColors().size).toEqual(1);
    expect(ColorStore.getColors().first()).toEqual('#ffffff');
  });

  it('cannot add the same color twice', () => {
    ColorActions.addColor('#ffffff');
    ColorActions.addColor('#ffffff');
    expect(ColorStore.getColors().size).toEqual(1);
  });

  it('can replace a color', () => {
    ColorActions.addColor('#ffffff');
    ColorActions.addColor('#cccccc');
    ColorActions.addColor('#eeeeee');
    ColorActions.replaceColor('#cccccc', '#000000');
    expect(ColorStore.getColors().size).toEqual(3);
    expect(ColorStore.getColors().toArray()).toEqual(['#ffffff', '#000000', '#eeeeee']);
  });
});

