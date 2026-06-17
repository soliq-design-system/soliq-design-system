export const styles = `
.not-found {
  --bg: #f8fafc;
  --title: #0f172a;
  --muted: #64748b;
  --primary: #0b4f8a;
  --primary-hover: #0a4578;
  --action-bg: rgba(233, 241, 252, 0.92);
  --action-bg-hover: rgba(224, 235, 249, 0.96);
  --action-text: #0b4f8a;
  --action-border: rgba(11, 79, 138, 0.34);
  --line: rgba(15, 23, 42, 0.14);
  --soft-line: rgba(11, 79, 138, 0.2);
  --halo: rgba(11, 79, 138, 0.16);
  --shadow: rgba(15, 23, 42, 0.16);
  width: 100%;
  min-height: 560px;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 42%, var(--halo), transparent 42%),
    var(--bg);
  font-family: Inter, system-ui, sans-serif;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.not-found--fullscreen {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  z-index: 9998;
}

.not-found--hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.not-found[data-mode="dark"] {
  --bg: #020f25;
  --title: #d7e5f4;
  --muted: #7f97b5;
  --primary: #2f73bb;
  --primary-hover: #3f83ca;
  --action-bg: rgba(23, 43, 75, 0.88);
  --action-bg-hover: rgba(25, 48, 84, 0.92);
  --action-text: #8bb5e2;
  --action-border: rgba(74, 122, 184, 0.45);
  --line: rgba(130, 167, 210, 0.2);
  --soft-line: rgba(130, 167, 210, 0.22);
  --halo: rgba(19, 73, 138, 0.26);
  --shadow: rgba(0, 0, 0, 0.36);
}

@media (prefers-color-scheme: dark) {
  .not-found[data-mode="auto"] {
    --bg: #020f25;
    --title: #d7e5f4;
    --muted: #7f97b5;
    --primary: #2f73bb;
    --primary-hover: #3f83ca;
    --action-bg: rgba(23, 43, 75, 0.88);
    --action-bg-hover: rgba(25, 48, 84, 0.92);
    --action-text: #8bb5e2;
    --action-border: rgba(74, 122, 184, 0.45);
    --line: rgba(130, 167, 210, 0.2);
    --soft-line: rgba(130, 167, 210, 0.22);
    --halo: rgba(19, 73, 138, 0.26);
    --shadow: rgba(0, 0, 0, 0.36);
  }
}

.not-found__top {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  place-items: center;
  gap: 4px;
  z-index: 2;
  opacity: 0;
  transform: translate(-50%, -10px);
  animation: not-found-top-drop-in 720ms cubic-bezier(0.22, 1, 0.36, 1) 180ms forwards;
}

.not-found__logo {
  width: 30px;
  height: auto;
  opacity: 0.9;
  margin-bottom: 5px;
}

.not-found__brand {
  margin: 0;
  color: var(--muted);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.not-found__center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(340px, calc(100vw - 40px));
  text-align: center;
}

.not-found__halo {
  position: absolute;
  inset: -70px -40px -30px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--halo), transparent 70%);
  filter: blur(4px);
  pointer-events: none;
}

.not-found__mark-wrap {
  position: relative;
  margin: 0 auto 18px;
  width: 198px;
  height: 198px;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(-8px);
  animation: not-found-drop-in 760ms cubic-bezier(0.22, 1, 0.36, 1) 420ms forwards;
}

.not-found__rings {
  position: absolute;
  inset: 0;
  animation: fade-in 0.8s ease both;
}

.not-found__ring-inner {
  transform-origin: 99px 99px;
  animation: spin-ccw 20s linear infinite;
}

.not-found__ring-outer {
  transform-origin: 99px 99px;
  animation: spin-cw 32s linear infinite;
}

.not-found__orb {
  width: 82px;
  height: 82px;
  border-radius: 999px;
  border: 1px solid var(--soft-line);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04));
  display: grid;
  place-items: center;
  box-shadow: 0 10px 22px var(--shadow);
  animation: orb-pulse 2.6s ease-in-out infinite;
}

.not-found__icon {
  width: 34px;
  height: 34px;
  color: var(--title);
}

.not-found__title {
  margin: 0;
  color: var(--title);
  font-size: 24px;
  line-height: 1.25;
  font-weight: 620;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(-8px);
  animation: not-found-drop-in 720ms cubic-bezier(0.22, 1, 0.36, 1) 680ms forwards;
}

.not-found__subtitle {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.45;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translateY(-8px);
  animation: not-found-drop-in 720ms cubic-bezier(0.22, 1, 0.36, 1) 920ms forwards;
}

.not-found__actions {
  margin-top: 18px;
  display: flex;
  justify-content: center;
  width: 100%;
  opacity: 0;
  transform: translateY(-8px);
  animation: not-found-drop-in 720ms cubic-bezier(0.22, 1, 0.36, 1) 1140ms forwards;
}

.not-found__action {
  border: 1px solid var(--action-border);
  border-radius: 8px;
  padding: 8px 12px;
  width: auto;
  font-size: clamp(10px, 1.5vw, 12px);
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--action-text);
  background: var(--action-bg);
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  line-height: 1;
  transition: border-color 160ms ease, background-color 160ms ease, transform 140ms ease;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.not-found__action:hover {
  border-color: var(--primary-hover);
  background: var(--action-bg-hover);
  transform: translateY(-1px);
}

.not-found__action:active {
  transform: translateY(0);
}

.not-found__action:focus-visible {
  outline: 2px solid #8bb5de;
  outline-offset: 2px;
}

.not-found__action-icon {
  width: clamp(12px, 1.5vw, 16px);
  height: clamp(12px, 1.5vw, 16px);
  display: inline-block;
}

.not-found__countdown {
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transform: translateY(-8px);
  animation: not-found-drop-in 720ms cubic-bezier(0.22, 1, 0.36, 1) 1360ms forwards;
}

.not-found__countdown-dot {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: conic-gradient(
    from -90deg,
    var(--muted) calc(var(--countdown-progress, 0) * 1%),
    rgba(130, 167, 210, 0.28) 0
  );
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0);
  mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0);
  position: relative;
}

.not-found__countdown-dot::before {
  content: "";
  position: absolute;
  inset: 5px;
  border-radius: 999px;
  background: #d8c1aa;
  opacity: 0.9;
}

@keyframes spin-cw {
  to { transform: rotate(360deg); }
}

@keyframes spin-ccw {
  to { transform: rotate(-360deg); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes not-found-drop-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes not-found-top-drop-in {
  from {
    opacity: 0;
    transform: translate(-50%, -10px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes orb-pulse {
  0%, 100% {
    box-shadow:
      0 10px 22px var(--shadow),
      0 0 0 0 rgba(47, 115, 187, 0.22);
  }
  50% {
    box-shadow:
      0 12px 26px var(--shadow),
      0 0 0 10px rgba(47, 115, 187, 0.06);
  }
}

@media (prefers-reduced-motion: reduce) {
  .not-found__top,
  .not-found__mark-wrap,
  .not-found__title,
  .not-found__subtitle,
  .not-found__actions,
  .not-found__countdown {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
}
`;
