import { nanoid } from "nanoid";
import Url from "../models/Url.js";

export const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) return res.status(400).json({ error: "URL required" });

  try {
    let shortId = nanoid(7);
    const newUrl = await Url.create({ originalUrl, shortId });
    res.json({ shortUrl: `${process.env.BASE_URL}/${shortId}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const redirectUrl = async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ shortId });
  if (url) {
    return res.redirect(url.originalUrl);
  } else {
    return res.status(404).json({ error: "URL not found" });
  }
};
