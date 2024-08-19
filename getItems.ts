export type Item = {
  itemName?: string;
  price?: number;
  ImageUrl?: string;
};

export const fetchItems = async () => {
  const resp = await fetch("http://localhost:8080/api/skins/best");
  const items = resp.json();
  return items;
};

// we lack parsing of items.
const logItems = async () => {
  const items = await fetchItems();
  console.log(items);
};

logItems();
