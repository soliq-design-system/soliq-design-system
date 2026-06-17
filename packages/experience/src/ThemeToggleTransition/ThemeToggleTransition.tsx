import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import moonIconUrl from "../assets/images/moon.svg";
import sunIconUrl from "../assets/images/sun.svg";
import { styles } from "./ThemeToggleTransition.styles";

type ThemeMode = "light" | "dark";

export interface ThemeToggleTransitionProps {
  initialTheme?: ThemeMode;
  className?: string;
  onChange?: (theme: ThemeMode) => void;
}

export function ThemeToggleTransition({
  initialTheme = "light",
  className,
  onChange
}: ThemeToggleTransitionProps) {
  const reduceMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const [theme, setTheme] = useState<ThemeMode>(initialTheme);
  const [targetTheme, setTargetTheme] = useState<ThemeMode>(initialTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const timersRef = useRef<number[]>([]);
  const sparkleSeeds = useMemo(
    () => [
      { x: "16%", y: "32%", delay: "110ms" },
      { x: "24%", y: "68%", delay: "220ms" },
      { x: "38%", y: "24%", delay: "320ms" },
      { x: "50%", y: "78%", delay: "470ms" },
      { x: "62%", y: "22%", delay: "560ms" },
      { x: "74%", y: "66%", delay: "710ms" },
      { x: "84%", y: "38%", delay: "840ms" }
    ],
    []
  );
  const userClass = className ? ` ${className}` : "";

  useEffect(() => {
    setTheme(initialTheme);
    setTargetTheme(initialTheme);
  }, [initialTheme]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timerId) => window.clearTimeout(timerId));
      timersRef.current = [];
    };
  }, []);

  const clearTimers = () => {
    timersRef.current.forEach((timerId) => window.clearTimeout(timerId));
    timersRef.current = [];
  };

  const handleToggle = () => {
    if (isTransitioning) {
      return;
    }

    const nextTheme = theme === "dark" ? "light" : "dark";

    if (reduceMotion) {
      setTheme(nextTheme);
      setTargetTheme(nextTheme);
      onChange?.(nextTheme);
      return;
    }

    clearTimers();
    setTargetTheme(nextTheme);
    setIsTransitioning(true);
    setIsClosing(false);
    onChange?.(nextTheme);

    timersRef.current.push(
      window.setTimeout(() => {
        setIsClosing(true);
      }, 1520)
    );

    timersRef.current.push(
      window.setTimeout(() => {
        setTheme(nextTheme);
        setIsTransitioning(false);
        setIsClosing(false);
      }, 1940)
    );
  };

  const buttonTheme = isTransitioning ? targetTheme : theme;
  const nextThemeLabel = theme === "dark" ? "Light" : "Dark";

  return (
    <>
      <style>{styles}</style>
      <button
        className={`soliq-theme-toggle${userClass}`}
        data-theme={buttonTheme}
        type="button"
        onClick={handleToggle}
        aria-label={`${nextThemeLabel} theme yoqish`}
      >
        <span className="soliq-theme-toggle__icon-wrap" aria-hidden="true">
          <img
            className="soliq-theme-toggle__icon"
            src={buttonTheme === "dark" ? moonIconUrl : sunIconUrl}
            alt=""
          />
        </span>
      </button>

      {isTransitioning && (
        <div
          className={`soliq-theme-transition-overlay${isClosing ? " soliq-theme-transition-overlay--closing" : ""}`}
          data-target={targetTheme}
          aria-hidden="true"
        >
          <div className="soliq-theme-transition-overlay__veil" />
          <div className="soliq-theme-transition-overlay__wave soliq-theme-transition-overlay__wave--1" />
          <div className="soliq-theme-transition-overlay__wave soliq-theme-transition-overlay__wave--2" />
          <div className="soliq-theme-transition-overlay__wave soliq-theme-transition-overlay__wave--3" />
          <div className="soliq-theme-transition-overlay__flare" />
          <div className="soliq-theme-transition-overlay__icon-shell" data-target={targetTheme}>
            <span className="soliq-theme-transition-overlay__orbit soliq-theme-transition-overlay__orbit--a" />
            <span className="soliq-theme-transition-overlay__orbit soliq-theme-transition-overlay__orbit--b" />
            <img
              className="soliq-theme-transition-overlay__icon"
              src={targetTheme === "dark" ? moonIconUrl : sunIconUrl}
              alt=""
            />
          </div>
          <p className="soliq-theme-transition-overlay__status">
            {targetTheme === "dark" ? "NIGHT MODE" : "DAY MODE"}
          </p>
          <div className="soliq-theme-transition-overlay__sparkles">
            {sparkleSeeds.map((seed) => {
              const sparkleStyle = {
                "--spark-x": seed.x,
                "--spark-y": seed.y,
                "--spark-delay": seed.delay
              } as CSSProperties;

              return <span key={`${seed.x}-${seed.y}`} className="soliq-theme-transition-overlay__sparkle" style={sparkleStyle} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
