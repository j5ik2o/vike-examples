// https://vite-plugin-ssr.com/config
import onRenderClient from "#root/renderer/onRenderClient";
import onRenderHtml from "#root/renderer/onRenderHtml";
import { Config } from "vike/types";

export default {
  onRenderClient,
  onRenderHtml,
} satisfies Config;
