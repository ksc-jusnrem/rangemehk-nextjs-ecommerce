import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "product";
  schema?: object;
}

const SITE_NAME = "Rang-e-Mehk";
const DEFAULT_TITLE = "Rang-e-Mehk — Perfume poured into hand-thrown porcelain";
const DEFAULT_DESCRIPTION =
  "Rang-e-Mehk is Ghazal Noor's independent fragrance house, pairing fine perfume with hand-thrown, Kashi-glazed porcelain vessels from Multan.";
const SITE_URL = "https://ghazal-noor.online";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = SITE_URL,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  schema,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* OpenGraph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}
