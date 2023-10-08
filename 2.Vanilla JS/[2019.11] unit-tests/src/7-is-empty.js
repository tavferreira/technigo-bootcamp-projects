export const isEmpty = stringArrayOrObject => {
  const type = typeof stringArrayOrObject;

  if (type === "string") {
    return stringArrayOrObject === "";
  } else if (
    Array.isArray(stringArrayOrObject) &&
    stringArrayOrObject.length === 0
  ) {
    return true;
  } else if (Object.keys(stringArrayOrObject).length === 0) {
    return true;
  }

  return false;
};
