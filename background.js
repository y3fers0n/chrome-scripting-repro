export const INPAGE_CHROME_SCRIPT_NAME = "foo-script";
const ALLOWED_URLS = [
  "https://*/*",
  "http://localhost/*",
  "http://127.0.0.1/*",
];

(function registerScript() {
  try {
    chrome.scripting
      .registerContentScripts([
        {
          allFrames: true,
          js: ["inpage.js"],
          matches: ALLOWED_URLS,
          runAt: "document_start",
          world: "MAIN",
          allFrames: true,

          id: INPAGE_CHROME_SCRIPT_NAME,
        },
      ])
      .then(() =>
        console.log(
          "CHROME-TEST",
          "Successfully registered script",
          new Date().getTime()
        )
      )
      .catch(() => console.error("CHROME-TEST", "Unable to register script"));
  } catch (e) {
    console.error(e);
  }
})();
