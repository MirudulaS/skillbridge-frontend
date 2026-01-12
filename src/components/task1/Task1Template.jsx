import { useEffect, useState } from "react";

export default function Task1Template({
  title,
  videoId,
  Content,
  onBack,
  storageKey
}) {
  const [videoInteracted, setVideoInteracted] = useState(false);
  const [markDoneTop, setMarkDoneTop] = useState(false);
  const [markDoneBottom, setMarkDoneBottom] = useState(false);

  const allDone = videoInteracted && markDoneTop && markDoneBottom;

  useEffect(() => {
    if (!storageKey) return;
    if (allDone) {
      localStorage.setItem(storageKey, "true");
    }
  }, [allDone, storageKey]);

  return (
    <div className="html-task1-page">
      {/* LEFT */}
      <div className="task1-left">
        <button className="secondary-btn" onClick={onBack}>
          ← Back
        </button>

        <h2>{title}</h2>
        <Content />

        <button
          className="done-btn big-btn"
          onClick={() => setMarkDoneBottom(true)}
          disabled={markDoneBottom}
        >
          {markDoneBottom ? "✓ Marked" : "Mark as Done"}
        </button>

        {allDone && (
          <p style={{ color: "green", fontWeight: 600, marginTop: 12 }}>
            ✓ Task completed
          </p>
        )}
      </div>

      {/* RIGHT (ONLY IF VIDEO EXISTS) */}
      {videoId && (
        <div className="task1-right">
          <div className="video-box large-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              allowFullScreen
              onLoad={() => setVideoInteracted(true)}
            />
          </div>

          <button
            className="primary-btn big-btn"
            onClick={() =>
              window.open(
                `https://www.youtube.com/watch?v=${videoId}`,
                "_blank"
              )
            }
          >
            Watch on YouTube
          </button>

          <button
            className="done-btn big-btn"
            onClick={() => setMarkDoneTop(true)}
            disabled={markDoneTop}
          >
            {markDoneTop ? "✓ Marked" : "Mark as Done"}
          </button>
        </div>
      )}
    </div>
  );
}