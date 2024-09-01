export const fetchBestItemsDay = async () => {
  const resp = await fetch("http://localhost:8080/api/skins/best");
  const items = await resp.json();
  //console.log(items);
  return items;
};

export const fetchWorstItemsDay = async () => {
  const resp = await fetch("http://localhost:8080/api/skins/worst");
  const items = await resp.json();
  //console.log(items);
  return items;
};

export const fetchBestItemsWeek = async () => {
  const resp = await fetch("http://localhost:8080/api/skins/best/week");
  const items = await resp.json();
  //console.log(items);
  return items;
};
