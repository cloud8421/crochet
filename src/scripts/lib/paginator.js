import Immutable from 'immutable';

let paginate = function(collection, perPage) {
  return collection.reduce(function(memo, current, index) {
    let lastPageSize = memo.last().size;
    let lastKey = memo.keySeq().last();

    if (lastPageSize == perPage) {
      return memo.set(lastKey + 1, Immutable.List([current]));
    } else {
      return memo.set(lastKey, memo.last().push(current));
    }
  }, new Immutable.OrderedMap([[1, new Immutable.List()]]));
}

export default {
  paginate
}
