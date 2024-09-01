import { twitterClient } from "./twitterClient";
import { fetchBestItemsWeek } from "./getItems";
import { uploadImage } from "./imageUpload";

async function Tweet() {
  await TweetBestItemsWeek();
}

const TweetBestItemsWeek = async () => {
  let bestItems = await fetchBestItemsWeek();
  let payload;

  for (const item of bestItems) {
    if (item.price === 0) {
      continue;
    }

    let media_ids = await uploadImage(item.imageurl);

    if (!media_ids) {
      throw new Error("Failed to upload image: mediaId is undefined");
    }

    payload = `
  BEST Performance of the Week:  
  🔫: ${item.itemname}
  💵: $${item.price}
  📈7Day Change: ${item.weekchange}%
  #CS2Skins #CS2Trading #CS2Investing`;
    await twitterClient.v2.tweet(payload, {
      media: { media_ids: [media_ids] },
    });
    await sleep(60000);
  }
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

Tweet();
