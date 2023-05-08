import type { ReactNode, RefObject } from "react";
import html2canvas from "html2canvas";
import { BlackButton } from "~/src/components";

type ScreenshotButtonProps = {
  children: ReactNode;
  canvas: RefObject<HTMLElement>;
};
export const ScreenshotButton = ({
  children,
  canvas,
}: ScreenshotButtonProps) => {
  const screenshotRef = canvas;

  async function handleScreenshotClick() {
    if (!screenshotRef.current) return;
    const canvas = await html2canvas(screenshotRef.current);
    canvas.toBlob((blob) => {
      if (!blob) return;

      const file = new File([blob], "screenshot.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        void navigator.share({ files: [file] });
      } else {
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "screenshot.png";
        downloadLink.click();
      }
    }, "image/png");
  }

  return (
    <BlackButton
      style={{ borderRadius: 40 }}
      onClick={void handleScreenshotClick}
      h={50}
    >
      {children}
    </BlackButton>
  );
};
