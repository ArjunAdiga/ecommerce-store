'use client';

import RetryError from "src/components/RetryError";


export default function Error({ reset }: { reset: () => void }) {
  return <RetryError onRetry={reset} />;
}