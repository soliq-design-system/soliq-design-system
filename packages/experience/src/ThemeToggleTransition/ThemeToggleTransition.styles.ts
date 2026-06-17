export const styles = `
.soliq-theme-toggle {
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 46px;
  height: 25px;
  border: 0;
  border-radius: 999px;
  padding: 0;
  background: #d1d5db;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 260ms ease, transform 160ms ease;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
}

.soliq-theme-toggle[data-theme="light"] {
  background: #d1d5db;
}

.soliq-theme-toggle[data-theme="dark"] {
  background: #bfc4cc;
}

.soliq-theme-toggle:hover {
  transform: translateY(-1px);
}

.soliq-theme-toggle:active {
  transform: translateY(0);
}

.soliq-theme-toggle:focus-visible {
  outline: 2px solid rgba(11, 79, 138, 0.38);
  outline-offset: 2px;
}

.soliq-theme-toggle__icon-wrap {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 21px;
  height: 21px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: #fde68a;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.25);
  transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1), background-color 280ms ease;
}

.soliq-theme-toggle[data-theme="dark"] .soliq-theme-toggle__icon-wrap {
  transform: translateX(21px);
  background: #f8fafc;
}

.soliq-theme-toggle[data-theme="light"] .soliq-theme-toggle__icon-wrap {
  transform: translateX(0);
  background: #fde68a;
}

.soliq-theme-toggle__icon {
  width: 12px;
  height: 12px;
  display: block;
  object-fit: contain;
}

.soliq-theme-transition-overlay {
  position: fixed;
  inset: 0;
  z-index: 2147483646;
  display: grid;
  place-items: center;
  pointer-events: none;
  opacity: 0;
  overflow: hidden;
  animation: overlay-fade-in 340ms ease forwards;
}

.soliq-theme-transition-overlay[data-target="dark"] {
  background:
    radial-gradient(circle at 50% 46%, rgba(11, 48, 96, 1), rgba(2, 15, 37, 0.93) 64%),
    linear-gradient(145deg, rgba(3, 18, 41, 0.86), rgba(1, 7, 22, 0.96));
}

.soliq-theme-transition-overlay[data-target="light"] {
  background:
    radial-gradient(circle at 50% 45%, rgba(255, 194, 116, 1), rgba(255, 244, 224, 0.92) 58%),
    linear-gradient(145deg, rgba(255, 249, 236, 0.98), rgba(255, 224, 191, 0.9) 56%, rgba(255, 200, 154, 0.84));
}

.soliq-theme-transition-overlay[data-target="light"] .soliq-theme-transition-overlay__veil {
  background: radial-gradient(circle at 50% 50%, rgba(255, 195, 118, 0.45), transparent 58%);
}

.soliq-theme-transition-overlay__veil {
  position: absolute;
  inset: 0;
  opacity: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.24), transparent 55%);
  animation: veil-breath 1240ms ease-out 90ms both;
}

.soliq-theme-transition-overlay__wave {
  position: absolute;
  width: 44vmax;
  height: 44vmax;
  border-radius: 50%;
  border: 1px solid rgba(216, 193, 170, 0.5);
  mix-blend-mode: screen;
}

.soliq-theme-transition-overlay__wave--1 {
  animation: overlay-wave-1 1580ms cubic-bezier(0.22, 1, 0.36, 1) 20ms both;
}

.soliq-theme-transition-overlay__wave--2 {
  width: 38vmax;
  height: 38vmax;
  border-color: rgba(139, 163, 195, 0.5);
  animation: overlay-wave-2 1480ms cubic-bezier(0.22, 1, 0.36, 1) 140ms both;
}

.soliq-theme-transition-overlay__wave--3 {
  width: 50vmax;
  height: 50vmax;
  border-color: rgba(255, 255, 255, 0.3);
  animation: overlay-wave-3 1720ms cubic-bezier(0.22, 1, 0.36, 1) 220ms both;
}

.soliq-theme-transition-overlay[data-target="light"] .soliq-theme-transition-overlay__wave--1 {
  border-color: rgba(255, 171, 86, 0.56);
}

.soliq-theme-transition-overlay[data-target="light"] .soliq-theme-transition-overlay__wave--2 {
  border-color: rgba(255, 147, 124, 0.45);
}

.soliq-theme-transition-overlay[data-target="light"] .soliq-theme-transition-overlay__wave--3 {
  border-color: rgba(255, 220, 177, 0.52);
}

.soliq-theme-transition-overlay__flare {
  position: absolute;
  width: 58vmax;
  height: 58vmax;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(216, 193, 170, 0.22), transparent 66%);
  filter: blur(4px);
  opacity: 0;
  animation: flare-pulse 1300ms ease-out 150ms both;
}

.soliq-theme-transition-overlay[data-target="light"] .soliq-theme-transition-overlay__flare {
  background: radial-gradient(circle, rgba(255, 167, 82, 0.34), transparent 68%);
}

.soliq-theme-transition-overlay__icon-shell {
  position: relative;
  width: 142px;
  height: 142px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: none;
  box-shadow: none;
  animation: icon-shell-in 780ms cubic-bezier(0.22, 1, 0.36, 1) 120ms both;
}

.soliq-theme-transition-overlay__icon-shell[data-target="dark"] {
  border: none;
}

.soliq-theme-transition-overlay__icon-shell[data-target="light"] {
  border: none;
}

.soliq-theme-transition-overlay__orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.28);
  opacity: 0;
}

.soliq-theme-transition-overlay__orbit--a {
  width: 166px;
  height: 166px;
  animation: orbit-spin-a 1400ms linear 120ms both;
}

.soliq-theme-transition-overlay__orbit--b {
  width: 194px;
  height: 194px;
  border-color: rgba(216, 193, 170, 0.3);
  animation: orbit-spin-b 1600ms linear 160ms both;
}

.soliq-theme-transition-overlay[data-target="light"] .soliq-theme-transition-overlay__orbit--a {
  border-color: rgba(255, 189, 114, 0.46);
}

.soliq-theme-transition-overlay[data-target="light"] .soliq-theme-transition-overlay__orbit--b {
  border-color: rgba(255, 155, 124, 0.36);
}

.soliq-theme-transition-overlay__icon {
  width: 50px;
  height: 50px;
  color: #d8c1aa;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 6px 18px rgba(216, 193, 170, 0.35));
  animation: icon-pop 860ms cubic-bezier(0.22, 1, 0.36, 1) 200ms both;
}

.soliq-theme-transition-overlay__status {
  position: absolute;
  bottom: max(9vh, 74px);
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(15, 23, 42, 0.84);
  opacity: 0;
  animation: status-in 820ms ease 380ms both;
}

.soliq-theme-transition-overlay[data-target="light"] .soliq-theme-transition-overlay__status {
  color: rgba(131, 74, 36, 0.85);
}

.soliq-theme-transition-overlay__sparkles {
  position: absolute;
  inset: 0;
}

.soliq-theme-transition-overlay__sparkle {
  position: absolute;
  left: var(--spark-x);
  top: var(--spark-y);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(216, 193, 170, 0.9);
  box-shadow: 0 0 12px rgba(216, 193, 170, 0.7);
  opacity: 0;
  transform: scale(0.2);
  animation: sparkle-in 940ms ease-out var(--spark-delay) both;
}

.soliq-theme-transition-overlay[data-target="light"] .soliq-theme-transition-overlay__sparkle {
  background: rgba(255, 163, 88, 0.95);
  box-shadow: 0 0 14px rgba(255, 167, 96, 0.65);
}

.soliq-theme-transition-overlay--closing {
  animation: overlay-fade-out 420ms ease forwards;
}

@keyframes overlay-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes overlay-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes veil-breath {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.82;
  }
}

@keyframes overlay-wave-1 {
  from {
    transform: scale(0.2);
    opacity: 0.7;
  }
  to {
    transform: scale(1.55);
    opacity: 0;
  }
}

@keyframes overlay-wave-2 {
  from {
    transform: scale(0.15);
    opacity: 0.68;
  }
  to {
    transform: scale(1.62);
    opacity: 0;
  }
}

@keyframes overlay-wave-3 {
  from {
    transform: scale(0.1);
    opacity: 0.62;
  }
  to {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes icon-shell-in {
  from {
    opacity: 0;
    transform: translateY(-16px) scale(0.88);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes icon-pop {
  from {
    opacity: 0;
    transform: scale(0.75) rotate(-16deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes flare-pulse {
  0% {
    opacity: 0;
    transform: scale(0.4);
  }
  40% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: scale(1.3);
  }
}

@keyframes orbit-spin-a {
  0% {
    opacity: 0;
    transform: scale(0.7) rotate(0deg);
  }
  25% {
    opacity: 0.55;
  }
  100% {
    opacity: 0;
    transform: scale(1) rotate(180deg);
  }
}

@keyframes orbit-spin-b {
  0% {
    opacity: 0;
    transform: scale(0.6) rotate(0deg);
  }
  32% {
    opacity: 0.48;
  }
  100% {
    opacity: 0;
    transform: scale(1) rotate(-160deg);
  }
}

@keyframes status-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes sparkle-in {
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  30% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.45);
  }
}

@media (prefers-reduced-motion: reduce) {
  body,
  .soliq-theme-toggle,
  .soliq-theme-transition-overlay,
  .soliq-theme-transition-overlay__veil,
  .soliq-theme-transition-overlay__wave,
  .soliq-theme-transition-overlay__flare,
  .soliq-theme-transition-overlay__icon-shell,
  .soliq-theme-transition-overlay__orbit,
  .soliq-theme-transition-overlay__icon {
    animation: none !important;
    transition: none !important;
  }

  .soliq-theme-transition-overlay__status,
  .soliq-theme-transition-overlay__sparkle {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
}
`;
