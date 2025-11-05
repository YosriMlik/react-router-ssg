import type { Config } from "@react-router/dev/config";

export default {
  // Disable SSR for true static site generation
  ssr: false,
  async prerender() {
    return ["/", "/about", "/services", "/contact"];
  },
} satisfies Config;
