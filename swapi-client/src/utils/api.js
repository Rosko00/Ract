export async function apiGet(endpoint) {
  const response = await fetch(`https://swapi.dev/api/${endpoint}`);
  const data = await response.json();
  return data;
}
