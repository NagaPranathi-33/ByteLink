import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortId: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Url", urlSchema);
