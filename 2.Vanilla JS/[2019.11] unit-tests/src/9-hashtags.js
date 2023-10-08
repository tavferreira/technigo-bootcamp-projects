export const hashtags = text => {
  let array = text.split(" ");
  return array.filter(word => word.startsWith("#"));
};
