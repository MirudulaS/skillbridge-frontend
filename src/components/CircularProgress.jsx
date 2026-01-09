function CircularProgress({ percent }) {
  const radius = 18;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percent / 100) * circumference;

  const isComplete = percent === 100;

  return (
    <svg width="44" height="44" viewBox="0 0 44 44">
      {/* Background circle */}
      <circle
        cx="22"
        cy="22"
        r={normalizedRadius}
        stroke="#e5e7eb"
        strokeWidth={stroke}
        fill="none"
      />

      {/* Progress circle */}
      <circle
        cx="22"
        cy="22"
        r={normalizedRadius}
        stroke={isComplete ? "#22c55e" : "#16a34a"}
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        style={{
          transition: "stroke-dashoffset 0.6s ease"
        }}
      />

      {/* Completed state */}
      {isComplete && (
        <>
          {/* Soft green background */}
          <circle
            cx="22"
            cy="22"
            r="12"
            fill="#dcfce7"
          />

          {/* SVG checkmark */}
          <path
            d="M17.5 22.5 L21 26 L27 18"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

export default CircularProgress;