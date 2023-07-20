interface AnyObject {
  [key: string]: unknown;
}

export const removeNonValueFields = <T extends AnyObject>(obj: T): T => {
  const newObj = { ...obj };

  Object.keys(newObj).forEach((key) => {
    if (
      newObj[key] === null ||
      newObj[key] === undefined ||
      newObj[key] === ''
    ) {
      delete newObj[key];
    }
  });

  return newObj;
};
