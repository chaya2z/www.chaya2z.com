import type { FC, PropsWithChildren } from "react";

type Props = {
  backgroundSrc: string;
};

const HeroSection: FC<PropsWithChildren<Props>> = ({
  backgroundSrc,
  children,
}) => (
  <div className="relative h-full w-[70%] overflow-hidden max-2xl:flex-1 max-md:fixed max-md:inset-0 max-md:z-10 max-md:h-full max-md:w-full">
    <div
      className="absolute inset-0 z-10 hidden bg-midnight-bg/40 max-md:block"
      aria-hidden="true"
    />
    {children}
    <img
      src={backgroundSrc}
      alt=""
      className="image-pixelated h-full w-full object-cover max-md:blur-[2px]"
    />
  </div>
);

export default HeroSection;
