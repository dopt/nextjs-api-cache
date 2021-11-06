import cacheData, { del } from "memory-cache";

export default async function handler(req, res) {
  let value = cacheData.get("key");
  if (value) {
    cacheData.del("key")
  }
  res.status(200).json({ message: 'cleared' })
}
