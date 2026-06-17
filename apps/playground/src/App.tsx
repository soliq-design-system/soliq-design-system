import { colors } from "@soliq/design-tokens";
import { NotFound, SessionExpired, SoliqLoader, ThemeToggleTransition } from "soliq-design-system";
import { Button } from "@soliq/ui";

const sectionStyle = {
  background: "#ffffff",
  borderRadius: 12,
  padding: 20,
  border: "1px solid #e5e7eb"
};

const normalizePathname = (pathname: string) => {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
};

const getPathWithoutBase = (pathname: string, baseUrl: string) => {
  const normalizedPath = normalizePathname(pathname);
  const normalizedBase = normalizePathname(baseUrl);

  if (normalizedBase !== "/" && normalizedPath.startsWith(normalizedBase)) {
    const nextPath = normalizedPath.slice(normalizedBase.length);
    return nextPath ? normalizePathname(nextPath) : "/";
  }

  return normalizedPath;
};

const withBase = (route: string, baseUrl: string) => {
  if (baseUrl === "/") {
    return route;
  }

  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  return `${normalizedBase}${route}`;
};

export function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const path = getPathWithoutBase(window.location.pathname, baseUrl);
  const isSoliqLoaderRoute = path === "/playground/soliq-loader" || path === "/soliq-loader";
  const isNotFoundRoute = path === "/playground/not-found" || path === "/not-found";
  const isSessionExpiredRoute = path === "/playground/session-expired" || path === "/session-expired";
  const isThemeToggleRoute = path === "/playground/theme-toggle" || path === "/theme-toggle";

  if (isSoliqLoaderRoute) {
    return <SoliqLoader fullScreen mode="dark" />;
  }

  if (isNotFoundRoute) {
    return <NotFound fullScreen mode="dark" />;
  }

  if (isSessionExpiredRoute) {
    return <SessionExpired fullScreen mode="dark" showCountdown countdownSeconds={60} />;
  }

  if(isThemeToggleRoute) {
    return <div style={{width: '100vw', height: '100vh', display: "flex", justifyContent: "center", alignItems: "center"}}><ThemeToggleTransition /></div>;
  }

  return (
    <div className="container">
      <h1>Soliq Design System Playground</h1>
      <p>Component qo'shishdan oldin avval shu sahifaga import qilib ko'rib chiqing.</p>
      <section style={sectionStyle}>
        <h2>Playground Routes</h2>
        <div className="route-links">
          <a href={withBase("/soliq-loader", baseUrl)}>soliq-loader</a>
          <a href={withBase("/not-found", baseUrl)}>not-found</a>
          <a href={withBase("/session-expired", baseUrl)}>session-expired</a>
          <a href={withBase("/theme-toggle", baseUrl)}>theme-toggle</a>
        </div>
      </section>

      <ThemeToggleTransition />

      <section style={sectionStyle}>
        <h2>Design Tokens</h2>
        <div className="swatches">
          {Object.entries(colors).map(([name, value]) => (
            <div key={name} className="swatch-card">
              <div className="swatch-color" style={{ backgroundColor: value }} />
              <strong>{name}</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>UI Components</h2>
        <div className="row">
          <Button>Primary Button</Button>
          <Button variant="danger">Danger Button</Button>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Experience Components</h2>
        <div className="stack">
          <div className="loader-grid">
            <SoliqLoader fullScreen={false} mode="light" />
            <SoliqLoader fullScreen={false} mode="dark" />
          </div>
          <NotFound mode="light" fullScreen={false} />
          <SessionExpired mode="dark" fullScreen={false} showCountdown={false} />
        </div>
      </section>
    </div>
  );
}
