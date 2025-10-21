// import React, { useState } from "react";
// import axios from "axios";

// const UrlShortener = () => {
//   const [originalUrl, setOriginalUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/shorten", { originalUrl });
//       setShortUrl(res.data.shortUrl);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(shortUrl);
//     alert("Copied to clipboard!");
//   };

//   return (
//     <div className="url-box">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="url"
//           placeholder="Enter your long URL..."
//           value={originalUrl}
//           onChange={(e) => setOriginalUrl(e.target.value)}
//           required
//         />
//         <button type="submit">Shorten</button>
//       </form>

//       {shortUrl && (
//         <div className="result">
//           <p>Your short link:</p>
//           <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
//           <button onClick={copyToClipboard}>Copy</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UrlShortener;


// import React, { useState } from "react";
// import axios from "axios";

// const UrlShortener = () => {
//   const [originalUrl, setOriginalUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/shorten", { originalUrl });
//       setShortUrl(res.data.shortUrl);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(shortUrl);
//     alert("Copied to clipboard!");
//   };

//   return (
//     <div className="url-box">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="url"
//           placeholder="Enter your long URL..."
//           value={originalUrl}
//           onChange={(e) => setOriginalUrl(e.target.value)}
//           required
//         />
//         <button type="submit">Shorten</button>
//       </form>

//       {shortUrl && (
//         <div className="result">
//           <p>Your short link:</p>
//           <a href={shortUrl} target="_blank" rel="noreferrer">
//             {shortUrl}
//           </a>
//           <button onClick={copyToClipboard}>Copy</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UrlShortener;






// import React, { useState } from "react";
// import axios from "axios";

// const UrlShortener = () => {
//   const [originalUrl, setOriginalUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!originalUrl) return;
//     setLoading(true);
//     try {
//       const res = await axios.post("http://localhost:5000/shorten", { originalUrl });
//       setShortUrl(res.data.shortUrl);
//       setOriginalUrl("");
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(shortUrl);
//     alert("Copied to clipboard!");
//   };

//   return (
//     <div className="url-container">
//       <form onSubmit={handleSubmit} className="url-form">
//         <input
//           type="url"
//           placeholder="🔗 Paste your long URL here..."
//           value={originalUrl}
//           onChange={(e) => setOriginalUrl(e.target.value)}
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Shortening..." : "Shorten URL"}
//         </button>
//       </form>

//       {shortUrl && (
//         <div className="result-box">
//           <input type="text" value={shortUrl} readOnly />
//           <button onClick={copyToClipboard}>Copy</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UrlShortener;


import React, { useState } from "react";
import axios from "axios";

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originalUrl) return;

    setLoading(true);
    setShortUrl("");

    try {
      // Backend API call
      const res = await axios.post("http://localhost:5000/shorten", {
        originalUrl,
      });

      setShortUrl(res.data.shortUrl);
      setOriginalUrl("");
    } catch (err) {
      console.error("Error shortening URL:", err);
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
    <div className="w-full max-w-md mx-auto mt-8">
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-3"
      >
        <input
          type="url"
          placeholder="🔗 Paste your long URL here..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
          className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 disabled:bg-blue-300"
        >
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>

      {/* Shortened URL Display */}
      {shortUrl && (
        <div className="mt-5 flex flex-col sm:flex-row items-center gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
          <input
            type="text"
            value={shortUrl}
            readOnly
            className="flex-1 w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
