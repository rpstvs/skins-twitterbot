import { twitterClient } from "./twitterClient";
import { fetchBestItems, fetchWorstItems } from "./getItems";

const TweetBestItems = async () => {
  let bestItems = await fetchBestItems();
  let payload;

  for (const item of bestItems) {
    if (item.price === 0) {
      bestItems = await fetchBestItems();
    }

    payload = `
  🔫: ${item.itemname}
  💵: $${item.price}
  📈24h change: ${item.daychange}%
  #CS2Skins #CS2Trading #CS2Investing`;
    await twitterClient.v2.tweet(payload);
    await sleep(60000);
  }
};

const TweetWorstItems = async () => {
  let WorstItems = await fetchWorstItems();
  let payload;

  for (const item of WorstItems) {
    if (item.price === 0) {
      WorstItems = await fetchWorstItems();
    }
    payload = `
  🔫: ${item.itemname}
  💵: $${item.price}
  📈24h change: ${item.daychange}%
  #CS2Skins #CS2Trading #CS2Investing`;
    await twitterClient.v2.tweet(payload);

    console.log(`skin:${item.itemname}
      Price: $${item.price}
      24h change: ${item.daychange}%
      #CS2Skins #CS2Trading #CS2Investing`);
    await sleep(60000);
  }
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

TweetBestItems();
TweetWorstItems();
