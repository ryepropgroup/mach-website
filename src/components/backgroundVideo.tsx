import { CSSProperties, useEffect, useRef, useState } from "react";

const style: CSSProperties = {
  height: "100vh",
  left: 0,
  objectFit: "cover",
  position: "fixed",
  top: 0,
  width: "100vw",
  zIndex: "-2",
};

export default function BackgroundVideo() {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (idx === 0 && ref.current) {
      void ref.current.play();
    }
  }, [ref, idx]);
  return (
    <>
      <video
        style={{ ...style, display: idx === 1 ? "none" : "block" }}
        src="/mach-website/video/ignition.webm"
        autoPlay
        muted
        onEnded={() => setIdx((x) => x + 1)}
      />
      <video
        style={{ ...style, display: idx === 0 ? "none" : "block" }}
        src="/mach-website/video/loop.webm"
        muted
        loop
        ref={ref}
      />
    </>
  );
}
