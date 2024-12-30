export default async function handler(req, res) {
  const API_URL = "https://api.spaceflightnewsapi.net/v4/articles";
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles", error });
  }
}
