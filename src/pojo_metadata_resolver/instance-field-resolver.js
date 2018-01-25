module.exports = function (line, metadata) {
  var reg = /.*?(\w+)\s+(\w+)\s*(=.*)?;/g;

  var canResolve = !!line.match(reg);

  if(canResolve) {
    var match = reg.exec(line);

    var instanceFieldType = match[1];
    var instanceFieldName = match[2];

    if(!(instanceFieldType || instanceFieldName)) throw Error("It was not possible to resolve the line " + line + ' as a INSTANCE FIELD metadata');

    addAsClass(instanceFieldType, instanceFieldName, metadata);
  }

  return canResolve;
};

function addAsClass(instanceFieldType, instanceFieldName, metadata) {
  if(!metadata.instanceFields) metadata.instanceFields = [];

  metadata.instanceFields.push({
    type: instanceFieldType,
    name: instanceFieldName
  });
}
