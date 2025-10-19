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
    try {
      const res = await axios.post("http://localhost:5000/shorten", { originalUrl });
      setShortUrl(res.data.shortUrl);
      setOriginalUrl("");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div className="url-container">
      <form onSubmit={handleSubmit} className="url-form">
        <input
          type="url"
          placeholder="🔗 Paste your long URL here..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>

      {shortUrl && (
        <div className="result-box">
          <input type="text" value={shortUrl} readOnly />
          <button onClick={copyToClipboard}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
