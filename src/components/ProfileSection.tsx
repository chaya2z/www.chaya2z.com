import type { FC } from "react";
import LinkCard, { type LinkItem } from "./LinkCard";

type Props = {
  links: LinkItem[];
};

const ProfileSection: FC<Props> = ({ links }) => (
  <div className="relative z-10 flex w-[30%] flex-col p-15 px-10 max-2xl:w-120 max-2xl:shrink-0 max-md:z-20 max-md:min-h-screen max-md:w-full max-md:shrink max-md:bg-midnight-bg/60 max-md:p-8 max-md:px-6 max-md:backdrop-blur-lg">
    <div className="flex grow flex-col justify-center">
      <header className="relative z-10 mb-12.5">
        <span className="text-sm font-bold uppercase tracking-widest text-ice-blue">
          Site Reliability Engineer
        </span>
        <h1 className="mt-1.25 mb-0 text-5xl font-extrabold leading-none text-cool-white">
          Taisuke NAKANO
        </h1>
        <p className="mt-2.5 mb-5 font-mono text-lg text-slate-text opacity-70">
          @chaya2z
        </p>
        <div className="h-1 w-15 bg-accent-red" aria-hidden="true" />
      </header>

      <nav className="z-10 flex flex-col gap-3.75">
        {links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
      </nav>
    </div>

    <footer className="mt-auto pt-10 font-bold uppercase">
      <a
        href="https://github.com/chaya2z/www.chaya2z.com"
        className="font-mono text-slate-text no-underline transition-colors hover:text-ice-blue"
      >
        source
      </a>
    </footer>
  </div>
);

export default ProfileSection;
