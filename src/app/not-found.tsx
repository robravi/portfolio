import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-32 flex flex-col gap-6">
      <span className="label text-xs text-lime">404</span>
      <h1 className="display text-6xl md:text-[120px]">
        Not<br />
        <span className="outline-text">here</span>.
      </h1>
      <Link href="/" className="label text-sm text-lime hover:text-paper">
        ← Back home
      </Link>
    </section>
  );
}
