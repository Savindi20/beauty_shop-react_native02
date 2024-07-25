import { createClient } from "@sanity/client";
import { fetchQuery } from "./utils/supports";

const client = createClient({
  projectId: "zdyi6xv7",
  dataset: "production",
  apiVersion: "2024-07-25",
  useCdn: true,
});

export const fetchFeeds = async () => {
  let data = await client.fetch(fetchQuery).then((feeds) => {
    return feeds;
  });
  return data;
};