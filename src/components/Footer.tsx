import { PERSONAL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="rule-t px-5 py-9 md:px-10 md:py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <a
        href={`mailto:${PERSONAL.email}`}
        className="display text-5xl md:text-7xl text-paper no-underline hover:text-lime transition-colors"
      >
        Let&rsquo;s build<span className="text-lime">.</span>
      </a>
      <ul className="flex flex-wrap gap-5 md:gap-6 label text-xs md:text-[13px]">
        <li>
          <a href={PERSONAL.github} className="text-lime hover:text-paper" rel="me noopener" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href={PERSONAL.linkedin} className="text-lime hover:text-paper" rel="me noopener" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={PERSONAL.resume} className="text-lime hover:text-paper" target="_blank" rel="noopener">
            Resume
          </a>
        </li>
        <li>
          <a href={`mailto:${PERSONAL.email}`} className="text-lime hover:text-paper">
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}
