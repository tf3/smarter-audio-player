export const checkForEquality = (obj1, obj2) => (
  Object.keys(obj1).reduce((isSameSoFar, key) => {
    if (!obj2[key]) return false;
    if (!(obj1[key] === obj2[key])) return false;
    return isSameSoFar && true;
  }, true)
);
