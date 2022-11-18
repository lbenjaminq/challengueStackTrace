export const getData = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const products = await response.json();
  return products.results.slice(0, 6);
};

export const getDataFilm = async (url: string) => {
  const response = await fetch(url);
  const films = await response.json();
  return films;
};
