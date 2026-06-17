import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEventHandler } from "react";
import logoUrl from "../assets/images/logo.svg";
import { styles } from "./SessionExpired.styles";

type SessionExpiredMode = "light" | "dark" | "auto";

export interface SessionExpiredProps {
  mode?: SessionExpiredMode;
  fullScreen?: boolean;
  title?: string;
  subtitle?: string;
  actionLabel?: string;
  brandLabel?: string;
  countdownText?: string;
  showCountdown?: boolean;
  countdownSeconds?: number;
  autoCloseOnEnd?: boolean;
  onCountdownEnd?: () => void;
  onActionClick?: MouseEventHandler<HTMLButtonElement>;
  actionHref?: string;
  className?: string;
}

function SessionIcon() {
  return (
    <svg className="session-expired__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.2L18.5 6V11.9C18.5 16.2 15.8 19.7 12 20.9C8.2 19.7 5.5 16.2 5.5 11.9V6L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M12 8.3V12.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="14.9" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function SessionExpired({
  mode = "auto",
  fullScreen = true,
  title = "СЕССИЯ ТУГАДИ",
  subtitle = "Хавфсизлик сабабли сиз тизимдан автоматик чиқарилдингиз.",
  actionLabel = "ТИЗИМГА КИРИШ",
  brandLabel = "ДАВЛАТ СОЛИҚ ҚЎМИТАСИ",
  countdownText = "ичида саҳифадан чиқасиз",
  showCountdown = true,
  countdownSeconds = 60,
  autoCloseOnEnd = true,
  onCountdownEnd,
  onActionClick,
  actionHref,
  className
}: SessionExpiredProps) {
  const fullClass = fullScreen ? " session-expired--fullscreen" : "";
  const userClass = className ? ` ${className}` : "";
  const [isVisible, setIsVisible] = useState(false);
  const hiddenClass = isVisible ? "" : " session-expired--hidden";
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

    if (!autoCloseOnEnd) {
      return;
    }

    window.close();

    window.setTimeout(() => {
      if (!window.closed) {
        window.location.replace("about:blank");
      }
    }, 120);
  }, [remainingSeconds, autoCloseOnEnd, onCountdownEnd, showCountdown]);

  const countdownProgress = (remainingSeconds / safeCountdownSeconds) * 100;
  const countdownStyle = {
    "--countdown-progress": countdownProgress
  } as CSSProperties;

  return (
    <div
      className={`session-expired${fullClass}${hiddenClass}${userClass}`}
      data-mode={mode}
      aria-hidden={!isVisible}
    >
      <style>{styles}</style>
      <div className="session-expired__top">
        <img className="session-expired__logo" src={logoUrl} alt="" />
        <p className="session-expired__brand">{brandLabel}</p>
      </div>

      <div className="session-expired__center">
        <div className="session-expired__lock-wrap">
          <div className="session-expired__halo" />
          <svg className="session-expired__rings" width="198" height="198" viewBox="0 0 198 198" fill="none" aria-hidden="true">
            <circle className="session-expired__ring-inner" cx="99" cy="99" r="76" stroke="var(--line)" strokeWidth="0.9" strokeDasharray="4 12" />
            <circle className="session-expired__ring-outer" cx="99" cy="99" r="88" stroke="var(--line)" strokeWidth="0.7" strokeDasharray="2 22" />
          </svg>
          <div className="session-expired__lock-orb">
            <SessionIcon />
          </div>
        </div>

        <p className="session-expired__title">{title}</p>
        <p className="session-expired__subtitle">{subtitle}</p>
        <div className="session-expired__actions">
          {actionHref ? (
            <a className="session-expired__action" href={actionHref}>
              {actionLabel}
              <svg className="session-expired__action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : (
            <button className="session-expired__action" type="button" onClick={onActionClick}>
              {actionLabel}
              <svg className="session-expired__action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
        {showCountdown && (
          <p className="session-expired__countdown">
            <span className="session-expired__countdown-dot" style={countdownStyle} />
            {remainingSeconds}s {countdownText}
          </p>
        )}
      </div>
    </div>
  );
}
