import { TwitterApi } from "twitter-api-v2";
import { get } from "https";
import { twitterClient } from "./twitterClient";

export async function uploadImage(url: string) {
  try {
    // Fetch image from URL using https
    const imageData = await new Promise<Buffer>((resolve, reject) => {
      get(url, (response) => {
        const data: Uint8Array[] = [];

        response.on("data", (chunk) => {
          data.push(chunk);
        });

        response.on("end", () => {
          resolve(Buffer.concat(data));
        });

        response.on("error", (err) => {
          reject(err);
        });
      });
    });

    // Upload the image to Twitter
    const mediaId = await twitterClient.v1.uploadMedia(imageData, {
      mimeType: "image/jpeg",
    });

    return mediaId!;
  } catch (error) {
    console.error("Error tweeting the image:", error);
  }
}
