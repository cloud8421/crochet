jest.autoMockOff();

import Immutable from 'immutable';
import LayoutRecord from '../../records/layout';
import Paginator from '../paginator';

// For the purpose of this test, the actual properties
// of the single records are not important, so the test just
// sets up a different width.
let collection = Immutable.List([
  new LayoutRecord({width: 5}),
  new LayoutRecord({width: 4}),
  new LayoutRecord({width: 3}),
  new LayoutRecord({width: 5}),
  new LayoutRecord({width: 4}),
  new LayoutRecord({width: 6}),
  new LayoutRecord({width: 7}),
  new LayoutRecord({width: 1})
])

describe('Paginator', function() {
  it('paginates the collection', function() {
    let perPage = 3;
    // uses a nested array to build map so that we can use numbers
    // as keys.
    let expected = new Immutable.OrderedMap([
      [1, collection.slice(0,3)],
      [2, collection.slice(3,6)],
      [3, collection.slice(6,8)]
    ]);
    let paginated = Paginator.paginate(collection, perPage);

    expect(Immutable.is(expected, paginated)).toBe(true);
  });
});
