export const styles = `
.soliq-loader {
  --bg: #F8FAFC;
  --primary: #0B4F8A;
  --gold: #D8C1AA;
  --ring: rgba(11, 79, 138, 0.22);
  --text: #0B4F8A;
  --sub: rgba(11, 79, 138, 0.45);
  --divider: rgba(11, 79, 138, 0.12);
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 420px;
  width: 100%;
  overflow: hidden;
  background: var(--bg);
  transition: background 0.4s;
  font-family: Outfit, Inter, system-ui, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition: opacity var(--loader-fade-duration, 380ms) ease, visibility 0s linear 0s;
}

.soliq-loader--fullscreen {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  z-index: 9999;
  border: none;
  border-radius: 0;
}

.soliq-loader--hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity var(--loader-fade-duration, 380ms) ease, visibility 0s linear var(--loader-fade-duration, 380ms);
}

.soliq-loader[data-mode="dark"] {
  --bg: #020F25;
  --primary: #5B7FBF;
  --gold: #D8C1AA;
  --ring: rgba(216, 193, 170, 0.25);
  --text: #CBD5E1;
  --sub: rgba(203, 213, 225, 0.45);
  --divider: rgba(216, 193, 170, 0.18);
}

@media (prefers-color-scheme: dark) {
  .soliq-loader[data-mode="auto"] {
    --bg: #020F25;
    --primary: #5B7FBF;
    --gold: #D8C1AA;
    --ring: rgba(216, 193, 170, 0.25);
    --text: #CBD5E1;
    --sub: rgba(203, 213, 225, 0.45);
    --divider: rgba(216, 193, 170, 0.18);
  }
}

.soliq-loader__glow {
  position: absolute;
  width: 460px;
  height: 460px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(11, 79, 138, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.soliq-loader[data-mode="dark"] .soliq-loader__glow {
  background: radial-gradient(circle, rgba(11, 79, 138, 0.16) 0%, transparent 70%);
}

@media (prefers-color-scheme: dark) {
  .soliq-loader[data-mode="auto"] .soliq-loader__glow {
    background: radial-gradient(circle, rgba(11, 79, 138, 0.16) 0%, transparent 70%);
  }
}

.soliq-loader__pulse-wrap {
  position: absolute;
  width: 180px;
  height: 180px;
  top: 50%;
  left: 50%;
  margin-top: -90px;
  margin-left: -90px;
  pointer-events: none;
}

.soliq-loader__pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid var(--ring);
  animation: pulse 2.8s ease-out infinite;
  opacity: 0;
}

.soliq-loader__pulse--1 { animation-delay: 0.8s; }
.soliq-loader__pulse--2 { animation-delay: 1.6s; }
.soliq-loader__pulse--3 { animation-delay: 2.4s; }

.soliq-loader__rings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: fade-in 0.8s 0.4s both;
}

.soliq-loader__ring-inner {
  animation: spin-ccw 18s linear infinite;
  transform-origin: 98px 98px;
}

.soliq-loader__ring-outer {
  animation: spin-cw 28s linear infinite;
  transform-origin: 98px 98px;
}

.soliq-loader__card {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: card-in 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) both;
}

.soliq-loader__logo-wrap {
  width: 96px;
  height: 84px;
  position: relative;
  overflow: hidden;
  animation: logo-scale 0.7s 0.15s cubic-bezier(0.25, 0.1, 0.25, 1) both;
}

.soliq-loader__mark {
  width: 96px;
  height: 84px;
  display: block;
}

.soliq-loader__logo-clip {
  animation: reveal-down 1.1s 0.35s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.soliq-loader__divider {
  width: 1px;
  height: 20px;
  background: var(--divider);
  margin: 15px 0;
  animation: divider-in 0.5s 1.4s both;
  transform-origin: top;
}

.soliq-loader__title {
  margin: 0 0 5px;
  color: var(--text);
  font-family: Outfit, sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  animation: text-in 0.6s 1.5s ease-out both;
}

.soliq-loader__subtitle {
  color: var(--sub);
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 6px;
  animation: text-in 0.6s 1.85s ease-out both;
}

.soliq-loader__dots {
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 24px;
}

.soliq-loader__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--ring);
  animation: dot-pulse 1.4s ease-in-out infinite both;
}

.soliq-loader__dot:nth-child(1) { animation-delay: 2s; }
.soliq-loader__dot:nth-child(2) { animation-delay: 2.18s; }
.soliq-loader__dot:nth-child(3) { animation-delay: 2.36s; }

.soliq-loader__progress-track {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(0, 0, 0, 0.05);
}

.soliq-loader[data-mode="dark"] .soliq-loader__progress-track {
  background: rgba(255, 255, 255, 0.04);
}

@media (prefers-color-scheme: dark) {
  .soliq-loader[data-mode="auto"] .soliq-loader__progress-track {
    background: rgba(255, 255, 255, 0.04);
  }
}

.soliq-loader__progress-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, transparent, var(--gold), var(--primary));
  animation: progress-fill 3.5s 0.1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes logo-scale {
  from {
    opacity: 0;
    transform: scale(0.88);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes reveal-down {
  from { clip-path: inset(0 0 100% 0); }
  to { clip-path: inset(0 0 0 0); }
}

@keyframes divider-in {
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
}

@keyframes text-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes dot-pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.7);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.6);
    opacity: 0.85;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes spin-cw {
  to { transform: rotate(360deg); }
}

@keyframes spin-ccw {
  to { transform: rotate(-360deg); }
}

@keyframes progress-fill {
  from { width: 0; }
  to { width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .soliq-loader__pulse,
  .soliq-loader__ring-inner,
  .soliq-loader__ring-outer,
  .soliq-loader__card,
  .soliq-loader__logo-wrap,
  .soliq-loader__logo-clip,
  .soliq-loader__divider,
  .soliq-loader__title,
  .soliq-loader__subtitle,
  .soliq-loader__dot,
  .soliq-loader__progress-fill {
    animation: none !important;
    transition: none !important;
  }

  .soliq-loader__logo-clip,
  .soliq-loader__title,
  .soliq-loader__subtitle,
  .soliq-loader__divider,
  .soliq-loader__card,
  .soliq-loader__logo-wrap {
    opacity: 1;
  }
}
`;
