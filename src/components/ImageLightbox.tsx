import type React from "react";
import { useState, useRef, useEffect } from "react";
import closeIcon from "../assets/images/icons/close.svg";

interface Props {
  imageSrc: string;
  alt: string;
  caption?: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

export const ImageLightbox: React.FC<Props> = ({
  imageSrc,
  alt,
  caption,
  children,
  className = "contents cursor-pointer",
  "aria-label": ariaLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </button>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        className="p-0 bg-transparent border-none backdrop:bg-black/80 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center w-full h-full max-w-full max-h-full fixed inset-0"
      >
        {/* Backdrop to close the dialog */}
        <button
          type="button"
          className="fixed inset-0 w-full h-full cursor-default"
          onClick={handleClose}
          aria-label="Close lightbox"
        />

        <div className="relative flex items-center justify-center w-full h-full p-4 pointer-events-none">
          <button
            type="button"
            onClick={handleClose}
            className="fixed top-4 right-4 text-white hover:text-gray-300 z-50 cursor-pointer pointer-events-auto"
            aria-label="Close"
          >
            <img src={closeIcon.src} width="32" height="32" alt="" />
          </button>

          <div className="max-w-[90vw] max-h-[90vh] flex flex-col items-center pointer-events-auto">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-contain shadow-2xl"
            />
            {caption && (
              <p className="text-white mt-4 text-center text-sm md:text-base bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm select-none">
                {caption}
              </p>
            )}
          </div>
        </div>
      </dialog>
      <style>{`
        body:has(dialog[open]) {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};
