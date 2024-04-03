import axios from "axios";

export default async function handler(req: any, res: any) {
  try {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU5MzYxLCJpYXQiOjE3MTIxNTkwNjEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ0Y2RlMjI4LWJjN2ItNGZmYS1iOWY4LTMzOThmYzY2NTg0YSIsInN1YiI6InNzMDIyMEBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNUIFJhbWFwdXJhbSIsImNsaWVudElEIjoiZDRjZGUyMjgtYmM3Yi00ZmZhLWI5ZjgtMzM5OGZjNjY1ODRhIiwiY2xpZW50U2VjcmV0IjoieVh5c253UGpoZGFxc0NxaSIsIm93bmVyTmFtZSI6IlNhaSBSb2hpdCBTYW5uaWJveWluYSIsIm93bmVyRW1haWwiOiJzczAyMjBAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IlJBMjExMTAwMzAyMDY1NiJ9.hl-iagBG3wcPxGYc63UemvWq1sjFyMv_8aFrQCbd2kk";

    const response = await axios.get("http://20.244.56.144/test/companies", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch companies:", error);
    res.status(500).json({ error: "Failed to fetch companies" });
  }
}
