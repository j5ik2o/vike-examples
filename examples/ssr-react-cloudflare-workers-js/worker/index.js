import { handleSsr } from "./ssr";
import { handleStaticAssets } from "./static-assets";

addEventListener("fetch", (event) => {
  console.log("fetch", event.request.url);
  try {
    event.respondWith(
      handleFetchEvent(event).catch((err) => {
        console.error(err.stack);
      }),
    );
  } catch (err) {
    console.error(err.stack);
    event.respondWith(new Response("Internal Error", { status: 500 }));
  }
});

const handleFetchEvent = async (event) => {
  if (!isAssetUrl(event.request.url)) {
    const response = await handleSsr(event.request.url);
    if (response !== null) return response;
  }
  const response = await handleStaticAssets(event);
  return response;
};

const isAssetUrl = (url) => {
  const { pathname } = new URL(url);
  return pathname.startsWith("/assets/");
};
