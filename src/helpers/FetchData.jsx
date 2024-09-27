export const fetchData = async (URL) => {
  const response = await fetch(URL);
  return await response.json();
};
