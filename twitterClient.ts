import { TwitterApi } from "twitter-api-v2";
import * as dotenv from "dotenv";
dotenv.config();

export const client = new TwitterApi({
  appKey: process.env.APP_KEY!,
  appSecret: process.env.APP_SECRET!,
  accessToken: process.env.ACCESS_TOKEN!,
  accessSecret: process.env.ACCESS_SECRET!,
});

export const bearer = new TwitterApi(process.env.BEARER_TOKEN!);

export const twitterClient = client.readWrite;
export const twitterBearer = bearer.readOnly;
