/**
 * isPlainObject
 * @param obj
 * @returns {boolean}
 *
 * isPlainObject({}) === true
 * isPlainObject(Object.create({})) === false
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;

  let proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;

  let baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

export default isPlainObject;
