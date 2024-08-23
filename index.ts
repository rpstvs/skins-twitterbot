import { twitterClient } from "./twitterClient";
import { fetchBestItems, fetchWorstItems } from "./getItems";

const tweetItems = async () => {
  const bestItems = await fetchBestItems();
  const WorstItems = await fetchWorstItems();
  let payload;

  for (const item of bestItems) {
    payload = `
  🔫: ${item.itemname}
  💵: $${item.price}
  📈24h change: ${item.daychange}%`;
    await twitterClient.v2.tweet(payload);
    await sleep(60000);
  }

  payload = ``;
  for (const item of WorstItems) {
    payload = `
  🔫: ${item.itemname}
  💵: $${item.price}
  📈24h change: ${item.daychange}%`;
    await twitterClient.v2.tweet(payload);
    await sleep(60000);
  }
};

function sleep(ms: number): Promise<void> {
  console.log("Esperando 1 minuto");
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

tweetItems();
