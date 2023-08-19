import onRenderClient from "#root/renderer/onRenderClient";
import onRenderHtml from "#root/renderer/onRenderHtml";
import type { Config } from "vite-plugin-ssr/types";

export default {
  onRenderClient,
  onRenderHtml,
} satisfies Config;
