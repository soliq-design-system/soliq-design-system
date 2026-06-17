import type { CSSProperties } from "react";
import logoUrl from "../assets/images/logo.svg";
import { styles } from "./SoliqLoader.styles";

type LoaderMode = "light" | "dark" | "auto";

export interface SoliqLoaderProps {
  mode?: LoaderMode;
  fullScreen?: boolean;
  className?: string;
  visible?: boolean;
  fadeDurationMs?: number;
}

export function SoliqLoader({
  mode = "auto",
  fullScreen = true,
  className,
  visible = true,
  fadeDurationMs = 380
}: SoliqLoaderProps) {
  const fullClass = fullScreen ? " soliq-loader--fullscreen" : "";
  const userClass = className ? ` ${className}` : "";
  const hiddenClass = visible ? "" : " soliq-loader--hidden";
  const fadeStyle = {
    "--loader-fade-duration": `${fadeDurationMs}ms`
  } as CSSProperties;

  return (
    <div
      className={`soliq-loader${fullClass}${hiddenClass}${userClass}`}
      data-mode={mode}
      role="status"
      aria-live="polite"
      aria-hidden={!visible}
      style={fadeStyle}
    >
      <style>{styles}</style>
      <div className="soliq-loader__glow" />

      <div className="soliq-loader__pulse-wrap" aria-hidden="true">
        <span className="soliq-loader__pulse soliq-loader__pulse--1" />
        <span className="soliq-loader__pulse soliq-loader__pulse--2" />
        <span className="soliq-loader__pulse soliq-loader__pulse--3" />
      </div>

      <svg className="soliq-loader__rings" width="196" height="196" viewBox="0 0 196 196" fill="none" aria-hidden="true">
        <circle className="soliq-loader__ring-inner" cx="98" cy="98" r="76" stroke="var(--ring)" strokeWidth="0.9" strokeDasharray="4 12" />
        <circle className="soliq-loader__ring-outer" cx="98" cy="98" r="88" stroke="var(--ring)" strokeWidth="0.7" strokeDasharray="2 22" />
      </svg>

      <div className="soliq-loader__card">
        <div className="soliq-loader__logo-wrap">
          <div className="soliq-loader__logo-clip">
            <img className="soliq-loader__mark" src={logoUrl} alt="ДСҚ логотипи" />
          </div>
        </div>

        <div className="soliq-loader__divider" />
        <p className="soliq-loader__title">ДАВЛАТ СОЛИҚ ҚЎМИТАСИ</p>
        <p className="soliq-loader__subtitle">РАҚАМЛИ ХИЗМАТЛАР ПЛАТФОРМАСИ</p>

        <div className="soliq-loader__dots" aria-hidden="true">
          <span className="soliq-loader__dot" />
          <span className="soliq-loader__dot" />
          <span className="soliq-loader__dot" />
        </div>
      </div>

      <div className="soliq-loader__progress-track" aria-hidden="true">
        <div className="soliq-loader__progress-fill" />
      </div>
    </div>
  );
}
