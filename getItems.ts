export const fetchBestItems = async () => {
  const resp = await fetch("http://localhost:8080/api/skins/best");
  const items = await resp.json();
  //console.log(items);
  return items;
};

export const fetchWorstItems = async () => {
  const resp = await fetch("http://localhost:8080/api/skins/worst");
  const items = await resp.json();
  //console.log(items);
  return items;
};
