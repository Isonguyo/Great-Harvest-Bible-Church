import React, { useEffect, useState, useRef } from "react";
import "./BibleVerse.css";

const verses = [
  { text: "“And he said, I will make all my goodness pass before thee...”", reference: "Exodus 33:19" },
  { text: "“For God so loved the world that he gave his only Son...”", reference: "John 3:16" },
  { text: "“I can do all things through Christ who strengthens me.”", reference: "Philippians 4:13" },
  { text: "“The Lord is my shepherd; I shall not want.”", reference: "Psalm 23:1" },
  { text: "“Trust in the Lord with all your heart and lean not on your own understanding.”", reference: "Proverbs 3:5" },
  { text: "“Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.”", reference: "Joshua 1:9" },
  { text: "“Come to me, all you who are weary and burdened, and I will give you rest.”", reference: "Matthew 11:28" },
  { text: "“Cast all your anxiety on him because he cares for you.”", reference: "1 Peter 5:7" },
  { text: "“But those who hope in the Lord will renew their strength.”", reference: "Isaiah 40:31" },
  { text: "“The Lord is my light and my salvation—whom shall I fear?”", reference: "Psalm 27:1" },
  { text: "“We love because He first loved us.”", reference: "1 John 4:19" },
  { text: "“Be still, and know that I am God.”", reference: "Psalm 46:10" },
  { text: "“Do to others as you would have them do to you.”", reference: "Luke 6:31" },
  { text: "“Your word is a lamp to my feet and a light to my path.”", reference: "Psalm 119:105" },
  { text: "“Delight yourself in the Lord, and he will give you the desires of your heart.”", reference: "Psalm 37:4" },
  { text: "“Blessed are the peacemakers, for they will be called children of God.”", reference: "Matthew 5:9" },
  { text: "“Do not let your hearts be troubled. You believe in God; believe also in me.”", reference: "John 14:1" },
  { text: "“With God all things are possible.”", reference: "Matthew 19:26" },
  { text: "“Rejoice always, pray continually, give thanks in all circumstances.”", reference: "1 Thessalonians 5:16-18" },
  { text: "“He gives strength to the weary and increases the power of the weak.”", reference: "Isaiah 40:29" },
  { text: "“The name of the Lord is a strong tower; the righteous run to it and are safe.”", reference: "Proverbs 18:10" },
  { text: "“For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you.”", reference: "Jeremiah 29:11" },
  { text: "“The Lord is good, a refuge in times of trouble. He cares for those who trust in him.”", reference: "Nahum 1:7" },
  { text: "“Do not be overcome by evil, but overcome evil with good.”", reference: "Romans 12:21" },
  { text: "“Let all that you do be done in love.”", reference: "1 Corinthians 16:14" }
];

const BibleVerse = () => {
  const [verseText, setVerseText] = useState("");
  const [reference, setReference] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const verseRef = useRef(null);

  // Pick a verse based on the day of the year
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );
    const verseOfTheDay = verses[dayOfYear % verses.length];
    setVerseText(verseOfTheDay.text);
    setReference(verseOfTheDay.reference);
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
          url: window.location.href
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
