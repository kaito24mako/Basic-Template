import "./index.css";

export function getUI() {
  return {
    /* General */
    root: document.documentElement,
    /* Sidebar */
    sidebar: document.querySelector("#sidebar-container"),
    sidebarBtn: document.querySelector("#sidebarBtn"),
  logo: document.querySelector("#logo"),
  themeBtn: document.querySelector("#themeBtn"),
  tabButtons: document.querySelectorAll(
    ".tab-container button:not(#settingsBtn)",
  ),
  missions: document.querySelector("#mission-container"),
  /* Content */
  content: document.querySelector("#content-container"),
  };
}

let x;
