import type { Config } from "@react-router/dev/config";

export default {
  // Enable static site generation
  ssr: true,
  async prerender() {
    return ["/", "/about", "/services", "/contact"];
  },
} satisfies Config;
