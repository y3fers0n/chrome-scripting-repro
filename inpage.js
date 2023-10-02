const IN_PAGE_CHANNEL_NODE_ID = "FOO-BAR";
const CHANNEL_NAME_ATTR = "DATA-ATTR";

(function readDom() {
  console.log(
    "CHROME-TEST",
    "executing background registered script",
    new Date().getTime()
  );
  const doc = document.getElementById(IN_PAGE_CHANNEL_NODE_ID);

  if (!doc) {
    throw new Error(
      `IN_PAGE_CHANNEL_NODE_ID ${IN_PAGE_CHANNEL_NODE_ID} not found`
    );
  }

  console.log("CHROME-TEST", "Successfully found node");
})();
