// https://vite-plugin-ssr.com/onRenderHtml
export default onRenderHtml

import { escapeInject } from 'vite-plugin-ssr/server'

async function onRenderHtml(pageContext) {
  const { stream } = pageContext

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="app">${stream}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true
    }
  }
}
