export function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border p-3">
      <div className="h-40 w-full rounded-xl bg-muted" />
      <div className="mt-3 h-4 w-3/4 bg-muted rounded" />
      <div className="mt-2 h-4 w-1/3 bg-muted rounded" />
    </div>
  );
}

export function GridSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)}
    </div>
  );
}