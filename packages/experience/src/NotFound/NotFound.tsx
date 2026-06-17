import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEventHandler } from "react";
import logoUrl from "../assets/images/logo.svg";
import { styles } from "./NotFound.styles";

type NotFoundMode = "light" | "dark" | "auto";

export interface NotFoundProps {
  mode?: NotFoundMode;
  fullScreen?: boolean;
  title?: string;
  subtitle?: string;
  actionLabel?: string;
  brandLabel?: string;
  showCountdown?: boolean;
  countdownText?: string;
  countdownSeconds?: number;
  autoRedirectOnEnd?: boolean;
  onCountdownEnd?: () => void;
  onActionClick?: MouseEventHandler<HTMLButtonElement>;
  actionHref?: string;
  className?: string;
}

function QuestionIcon() {
  return (
    <svg className="not-found__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 16.2V18.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9.6 9.8C9.6 8.47 10.67 7.4 12 7.4C13.33 7.4 14.4 8.47 14.4 9.8C14.4 10.64 13.97 11.28 13.05 11.87C12.28 12.37 12 12.76 12 13.5V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function NotFound({
  mode = "auto",
  fullScreen = true,
  title = "САҲИФА ТОПИЛМАДИ",
  subtitle = "Сўралган саҳифа манзили нотўғри ёки у ўчирилган бўлиши мумкин.",
  actionLabel = "БОШ САҲИФАГА ҚАЙТИШ",
  brandLabel = "ДАВЛАТ СОЛИҚ ҚЎМИТАСИ",
  showCountdown = false,
  countdownText = "ичида бош саҳифага ўтасиз",
  countdownSeconds = 60,
  autoRedirectOnEnd = false,
  onCountdownEnd,
  onActionClick,
  actionHref,
  className
}: NotFoundProps) {
  const fullClass = fullScreen ? " not-found--fullscreen" : "";
  const userClass = className ? ` ${className}` : "";
  const [isVisible, setIsVisible] = useState(false);
  const hiddenClass = isVisible ? "" : " not-found--hidden";
  const safeCountdownSeconds = Math.max(1, countdownSeconds);
  const [remainingSeconds, setRemainingSeconds] = useState(safeCountdownSeconds);
  const handledEndRef = useRef(false);

  useEffect(() => {
    setRemainingSeconds(safeCountdownSeconds);
    handledEndRef.current = false;
  }, [safeCountdownSeconds]);

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => window.cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    if (!showCountdown || remainingSeconds <= 0 || handledEndRef.current) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setRemainingSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, [remainingSeconds, showCountdown]);

  useEffect(() => {
    if (!showCountdown || remainingSeconds > 0 || handledEndRef.current) {
      return;
    }

    handledEndRef.current = true;
    onCountdownEnd?.();

    if (!autoRedirectOnEnd) {
      return;
    }

    if (actionHref) {
      window.location.assign(actionHref);
    } else {
      window.location.assign("/");
    }
  }, [remainingSeconds, autoRedirectOnEnd, showCountdown, actionHref, onCountdownEnd]);

  const countdownProgress = (remainingSeconds / safeCountdownSeconds) * 100;
  const countdownStyle = {
    "--countdown-progress": countdownProgress
  } as CSSProperties;

  return (
    <div
      className={`not-found${fullClass}${hiddenClass}${userClass}`}
      data-mode={mode}
      aria-hidden={!isVisible}
    >
      <style>{styles}</style>

      <div className="not-found__top">
        <img className="not-found__logo" src={logoUrl} alt="" />
        <p className="not-found__brand">{brandLabel}</p>
      </div>

      <div className="not-found__center">
        <div className="not-found__mark-wrap">
          <div className="not-found__halo" />
          <svg className="not-found__rings" width="198" height="198" viewBox="0 0 198 198" fill="none" aria-hidden="true">
            <circle className="not-found__ring-inner" cx="99" cy="99" r="76" stroke="var(--line)" strokeWidth="0.9" strokeDasharray="4 12" />
            <circle className="not-found__ring-outer" cx="99" cy="99" r="88" stroke="var(--line)" strokeWidth="0.7" strokeDasharray="2 22" />
          </svg>
          <div className="not-found__orb">
            <QuestionIcon />
          </div>
        </div>

        <p className="not-found__title">{title}</p>
        <p className="not-found__subtitle">{subtitle}</p>

        <div className="not-found__actions">
          {actionHref ? (
            <a className="not-found__action" href={actionHref}>
              {actionLabel}
              <svg className="not-found__action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : (
            <button className="not-found__action" type="button" onClick={onActionClick}>
              {actionLabel}
              <svg className="not-found__action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        {showCountdown && (
          <p className="not-found__countdown">
            <span className="not-found__countdown-dot" style={countdownStyle} />
            {remainingSeconds}s {countdownText}
          </p>
        )}
      </div>
    </div>
  );
}
