import type { APIRoute } from "astro";
import { z } from "astro/zod";

/**
 * Generate the `robots.txt` file at build time.
 */
export const GET: APIRoute = (context) => {
  const site = z.instanceof(URL).parse(context.site);
  const { href } = new URL("sitemap-index.xml", site);

  const text = `\
# https://www.rfc-editor.org/rfc/rfc9309
User-agent: *
Allow: /

Sitemap: ${href}
`;

  return new Response(text);
};
