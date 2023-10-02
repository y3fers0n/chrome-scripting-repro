const IN_PAGE_CHANNEL_NODE_ID = "FOO-BAR";
const CHANNEL_NAME_ATTR = "DATA-ATTR";

async function injectChannelNameInPage(name) {
  const container = document.head || document.documentElement;

  const node = document.createElement("div");
  node.id = IN_PAGE_CHANNEL_NODE_ID;
  node.setAttribute(CHANNEL_NAME_ATTR, name);
  container.insertBefore(node, container.children[0]);

  console.log("CHROME-TEST", "NODE ADDED", new Date().getTime());
}

injectChannelNameInPage("ABC");
