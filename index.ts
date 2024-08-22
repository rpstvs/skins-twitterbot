import { twitterClient } from "./twitterClient";
import { fetchItems } from "./getItems";
import axios from "axios";

const tweetTransfers = async () => {
  const items = await fetchItems();
  console.log(items);

  let payload;
  for (const item of items) {
    payload = `
  🔫: $${item.itemname}
  💵: ${item.price}
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

tweetTransfers();
