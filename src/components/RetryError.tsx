'use client';

export default function RetryError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="rounded-2xl border p-6 text-center">
      <p className="mb-4">Something went wrong while loading. Please try again.</p>
      <button onClick={onRetry} className="rounded-2xl border px-4 py-2">Retry</button>
    </div>
  );
}