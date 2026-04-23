export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1 h-6 bg-accent"
            style={{
              animation: "pulse 1s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
