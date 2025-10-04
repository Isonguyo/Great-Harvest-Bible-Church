import React, { useEffect, useState, useRef } from "react";
import "./BibleVerse.css";

const verseReferences = [
  "John 3:16",
  "Philippians 4:13",
  "Psalm 23:1",
  "Proverbs 3:5",
  "Joshua 1:9",
  "Matthew 11:28",
  "Isaiah 40:31",
  "Psalm 27:1",
  "1 John 4:19",
  "Psalm 46:10",
  "Luke 6:31",
  "Psalm 119:105",
  "Psalm 37:4",
  "Matthew 5:9",
  "John 14:1",
  "Matthew 19:26",
  "1 Thessalonians 5:16-18",
  "Jeremiah 29:11",
  "Romans 12:21",
  "1 Corinthians 16:14"
];

const BibleVerse = () => {
  const [verseText, setVerseText] = useState("");
  const [reference, setReference] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const verseRef = useRef(null);

  // Pick a random verse (same one for each day)
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );

    // Always pick the same verse for today (so it's "daily", not totally random on refresh)
    const randomRef = verseReferences[dayOfYear % verseReferences.length];

    fetch(`https://bible-api.com/${encodeURIComponent(randomRef)}`)
      .then((res) => res.json())
      .then((data) => {
        setVerseText(data.text.trim());
        setReference(data.reference);
      })
      .catch((err) => console.error("Error fetching verse:", err));
  }, []);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (verseRef.current) observer.observe(verseRef.current);
    return () => observer.disconnect();
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (startAnimation && verseText && index < verseText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + verseText[index]);
        setIndex(index + 1);
      }, 40); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, verseText, startAnimation]);

  // Copy to clipboard
  const copyToClipboard = () => {
    const fullText = `${verseText} — ${reference}`;
    navigator.clipboard.writeText(fullText);
    setCopyMessage("✔ Verse copied!");
    setTimeout(() => setCopyMessage(""), 2000);
  };

  // Share API
  const shareVerse = async () => {
    const fullText = `${verseText} — ${reference}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Daily Bible Verse",
          text: fullText,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Sharing not supported on this browser. Please copy instead.");
    }
  };

  return (
    <section ref={verseRef} className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <i className="fas fa-bible text-4xl mb-6"></i>
          <h2 className="title-font text-3xl md:text-4xl font-bold mb-6">
            Daily Bible Verse
          </h2>

          {/* Typing animation */}
          <p className="text-xl italic mb-6 verse-text" id="bible-verse">
            {displayedText || (startAnimation ? "Loading..." : "")}
          </p>

          {/* Verse reference */}
          {reference && (
            <p className="font-medium mb-4" id="bible-reference">
              {reference}
            </p>
          )}

          {/* Share and Copy Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <button className="share-btn" onClick={copyToClipboard}>
              <i className="fas fa-clipboard"></i> Copy
            </button>
            <button className="share-btn" onClick={shareVerse}>
              <i className="fas fa-share-alt"></i> Share
            </button>
          </div>

          {/* Copy Confirmation */}
          {copyMessage && <p className="copy-alert">{copyMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default BibleVerse;
