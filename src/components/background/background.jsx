// SmokeBackground.jsx
import { useEffect } from "react";

const styles = `
  @keyframes s1 {
    0%, 100% { transform: translate(0%, 0%) scale(1); }
    33% { transform: translate(8%, -12%) scale(1.08); }
    66% { transform: translate(-6%, 8%) scale(0.96); }
  }
  @keyframes s2 {
    0%, 100% { transform: translate(0%, 0%) scale(1); }
    33% { transform: translate(-10%, 6%) scale(1.05); }
    66% { transform: translate(7%, -9%) scale(1.1); }
  }
  @keyframes s3 {
    0%, 100% { transform: translate(0%, 0%) scale(1); }
    50% { transform: translate(5%, 10%) scale(0.93); }
  }
  @keyframes s4 {
    0%, 100% { transform: translate(0%, 0%) scale(1); }
    40% { transform: translate(-7%, -5%) scale(1.06); }
    80% { transform: translate(4%, 7%) scale(0.97); }
  }

  .smoke-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #000000;
  }
  .smoke-blob {
    position: absolute;
    border-radius: 50%;
    mix-blend-mode: screen;
  }
  .sb1 {
    width: 70%; height: 75%;
    background: radial-gradient(ellipse, #a8d4f0 0%, #5ba8d4 30%, #1a6090 60%, transparent 75%);
    top: -10%; left: -15%;
    opacity: 0.9; filter: blur(55px);
    animation: s1 11s ease-in-out infinite;
  }
  .sb2 {
    width: 60%; height: 65%;
    background: radial-gradient(ellipse, #c8e6f8 0%, #7bbfe8 35%, #2a7ab0 65%, transparent 78%);
    bottom: -5%; left: 5%;
    opacity: 0.85; filter: blur(60px);
    animation: s2 14s ease-in-out infinite;
  }
  .sb3 {
    width: 50%; height: 55%;
    background: radial-gradient(ellipse, #e8f4fc 0%, #9dd0f0 40%, #3a90c8 70%, transparent 80%);
    top: 20%; left: 15%;
    opacity: 0.7; filter: blur(50px);
    animation: s3 9s ease-in-out infinite;
  }
  .sb4 {
    width: 45%; height: 50%;
    background: radial-gradient(ellipse, #ffffff 0%, #b8dff5 30%, #4aa0d8 60%, transparent 78%);
    bottom: 15%; left: 20%;
    opacity: 0.5; filter: blur(45px);
    animation: s4 12s ease-in-out infinite;
  }
  .sb5 {
    width: 35%; height: 40%;
    background: radial-gradient(ellipse, #0a2540 0%, #0d3560 50%, transparent 75%);
    top: 5%; right: 0%;
    opacity: 1; filter: blur(40px);
    animation: s1 16s ease-in-out infinite reverse;
  }
  .sb6 {
    width: 40%; height: 45%;
    background: radial-gradient(ellipse, #061525 0%, #0a2540 50%, transparent 72%);
    bottom: 0%; right: -5%;
    opacity: 1; filter: blur(35px);
    animation: s2 13s ease-in-out infinite reverse;
  }
`;

export default function SmokeBackground({ children }) {
  useEffect(() => {
    const tag = document.createElement("style");
    tag.textContent = styles;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  return (
    <div className="smoke-wrap">
      <div className="smoke-blob sb5" />
      <div className="smoke-blob sb6" />
      <div className="smoke-blob sb1" />
      <div className="smoke-blob sb2" />
      <div className="smoke-blob sb3" />
      <div className="smoke-blob sb4" />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}