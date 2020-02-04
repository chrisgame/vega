import accessor from './accessor';
import splitAccessPath from './splitAccessPath';

function fetchValue(path) {
  return path.reduce(function(acc, value) {
    return acc ? acc[value] : null;
  }, {});
}

export default function(field, name) {
  var path = splitAccessPath(field);

  return accessor(
    fetchValue,
    [(field = path.length===1 ? path[0] : field)],
    name || field
  );
}
