import { renderPage } from "vite-plugin-ssr/server";

const handleSsr = async (url) => {
  const pageContextInit = {
    urlOriginal: url,
  };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;
  if (!httpResponse) {
    return null;
  } else {
    const { body, statusCode: status, headers } = httpResponse;
    return new Response(body, { headers, status });
  }
};

export { handleSsr };
