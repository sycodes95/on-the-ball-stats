export const getURLFriendlyString = (str: string) => {
  return str.replace(' ', '-').toLowerCase();
};