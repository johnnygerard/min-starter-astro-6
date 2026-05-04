import { z } from "astro/zod";

/**
 * Generate the `robots.txt` file at build time.
 * @type {import("astro").APIRoute}
 */
export const GET = (context) => {
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
