import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import "./index.css";
import App from "./App.jsx";
import GuestbookPage from "./guestbook/GuestbookPage.jsx";

function Root() {
  const [path, setPath] = useState(window.location.pathname || "/");

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (to) => {
    if (to === path) return;
    window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (path === "/guestbook") {
    return <GuestbookPage onNavigate={navigate} />;
  }

  return <App onNavigate={navigate} />;
}

createRoot(document.getElementById("root")).render(<Root />);
