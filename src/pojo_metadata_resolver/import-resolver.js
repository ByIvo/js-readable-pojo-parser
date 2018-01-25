module.exports = function (line, metadata) {
  var reg = /import\s+([\w*\.?]+);/g;

  var canResolve = !!line.match(reg);

  if(canResolve) {
    var match = reg.exec(line);

    var importResolved = match[1];

    if(!importResolved) throw Error("It was not possible to resolve the line " + line + ' as a IMPORT metadata');

    addAsImport(importResolved, metadata);
  }

  return canResolve;
};

function addAsImport(value, metadata) {
  if (!metadata.imports) metadata.imports = [];

  metadata.imports.push(value);
}
