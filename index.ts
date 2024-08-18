import { twitterClient } from "./twitterClient";

const tweetTransfers = async () => {
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
