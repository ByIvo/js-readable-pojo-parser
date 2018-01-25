module.exports = function (line, metadata) {
  var reg = /class\s+(\w+)/g;

  var canResolve = !!line.match(reg);

  if(canResolve) {
    var match = reg.exec(line);

    var classResolved = match[1];

    if(!classResolved) throw Error("It was not possible to resolve the line " + line + ' as a CLASS metadata');

    addAsClass(classResolved, metadata);
  }

  return canResolve;
};

function addAsClass(value, metadata) {
  metadata.class = value;
}
