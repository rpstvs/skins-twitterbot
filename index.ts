import { twitterClient } from "./twitterClient";
import { fetchBestItemsDay, fetchWorstItemsDay } from "./getItems";
import { uploadImage } from "./imageUpload";

async function Tweet() {
  await TweetBestItems();
  await TweetWorstItems();
}

const TweetBestItems = async () => {
  let bestItems = await fetchBestItemsDay();
  let payload;

  for (const item of bestItems) {
    if (item.price === 0) {
      bestItems = await fetchBestItemsDay();
    }

    let media_ids = await uploadImage(item.imageurl);

    if (!media_ids) {
      throw new Error("Failed to upload image: mediaId is undefined");
    }

    payload = `
  🔫: ${item.itemname}
  💵: $${item.price}
  📈24h change: ${item.daychange}%
  #CS2Skins #CS2Trading #CS2Investing`;
    await twitterClient.v2.tweet(payload, {
      media: { media_ids: [media_ids] },
    });
    await sleep(60000);
  }
};

const TweetWorstItems = async () => {
  let WorstItems = await fetchWorstItemsDay();
  let payload;

  for (const item of WorstItems) {
    if (item.price === 0) {
      WorstItems = await fetchWorstItemsDay();
    }
    let media_ids = await uploadImage(item.imageurl);

    if (!media_ids) {
      throw new Error("Failed to upload image: mediaId is undefined");
    }

    payload = `
  🔫: ${item.itemname}
  💵: $${item.price}
  📈24h change: ${item.daychange}%
  #CS2Skins #CS2Trading #CS2Investing`;
    await twitterClient.v2.tweet(payload, {
      media: { media_ids: [media_ids] },
    });

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

Tweet();
