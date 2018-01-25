module.exports = function (line, metadata) {
  var reg = /package\s+([\w*\.?]+);/g;

  var canResolve = !!line.match(reg);

  if(canResolve) {
    var match = reg.exec(line);

    var package = match[1];

    if(!package) throw Error("It was not possible to resolve the line " + line + ' as a PACKAGE metadata');

    addAsPackage(package, metadata);
  }

  return canResolve;
};

function addAsPackage(value, metadata) {
  metadata.package = value;
}
