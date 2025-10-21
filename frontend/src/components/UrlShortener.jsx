import React, { useState } from "react";
import axios from "axios";

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originalUrl.trim()) return;
    setLoading(true);
    setShortUrl("");

    try {
      const res = await axios.post("https://bytelink-ekej.onrender.com/api/shorten", { originalUrl });
      setShortUrl(res.data.shortUrl);
      setOriginalUrl("");
    } catch (err) {
      console.error(err);
      alert("Failed to shorten URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-3 w-full"
      >
        <input
          type="url"
          placeholder="🔗 Paste your long URL here..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
          className="flex-1 w-full px-4 py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm dark:bg-gray-800 dark:text-gray-200"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-200 disabled:bg-blue-300 dark:disabled:bg-blue-400"
        >
          {loading ? "Shortening..." : "Shorten"}
        </button>
      </form>

      {/* Result Box */}
      {shortUrl && (
        <div className="mt-5 flex flex-col sm:flex-row items-center gap-3 bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
          <input
            type="text"
            value={shortUrl}
            readOnly
            className="flex-1 w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-100 text-sm sm:text-base focus:outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="w-full sm:w-auto px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
