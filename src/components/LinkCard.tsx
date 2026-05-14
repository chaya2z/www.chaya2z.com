import type { FC } from "react";

export type LinkItem = {
  href: string;
  label: string;
  urlDisplay: string;
};

const LinkCard: FC<LinkItem> = ({ href, label, urlDisplay }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between p-4 px-6 rounded-sm border border-white/5 bg-white/3 text-slate-text no-underline backdrop-blur-sm transition-all duration-300 ease-in-out hover:translate-x-2 hover:border-ice-blue/40 hover:bg-ice-blue/5 hover:text-ice-blue"
  >
    <span className="text-lg font-bold">{label}</span>
    <span className="opacity-50">{urlDisplay}</span>
  </a>
);

export default LinkCard;
