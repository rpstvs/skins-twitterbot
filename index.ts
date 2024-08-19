import { twitterClient } from "./twitterClient";
import { fetchItems } from "./getItems";

const tweetTransfers = async () => {
  const items = fetchItems();

  await twitterClient.v2.tweet("payload");
  await sleep(60000);
};

function sleep(ms: number): Promise<void> {
  console.log("Esperando 1 minuto");
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

tweetTransfers();
