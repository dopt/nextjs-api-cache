import cacheData from "memory-cache";

export default async function handler(req, res) {
  let value = cacheData.get("key");
  if (!value) {
      const hours = 24;
      const data = { message: "test-data", created: new Date() }
      cacheData.put("key", data, hours * 1000 * 60 * 60);
      value = data;
  }
  res.status(200).json({ value })
}
