import Link from "next/link";

export default function LocalizedNotFound() {
  return (
    <main className="not-found">
      <span>Z/404</span>
      <h1>This page wandered off-grid.</h1>
      <Link href="/en">Back to the studio ↗</Link>
    </main>
  );
}
