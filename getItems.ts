export const fetchItems = async () => {
  const resp = await fetch("http://localhost:8080/api/skins/best");
  const items = await resp.json();
  //console.log(items);
  return items;
};
