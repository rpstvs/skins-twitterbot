import { TweetBestItemsDay, TweetWorstItemsDay } from "./tweetWeekly";
import { fetchBestItemsDay, fetchWorstItemsDay } from "./getItems";
import { uploadImage } from "./imageUpload";

async function TweetDay() {
  await TweetBestItemsDay();
  await TweetWorstItemsDay();
}

TweetDay();
