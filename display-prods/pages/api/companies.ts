import axios from "axios";

export default async function handler(req: any, res: any) {
  try {
    const response = await axios.get("http://20.244.56.144/test/companies");
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch companies:", error);
    res.status(500).json({ error: "Failed to fetch companies" });
  }
}
