import { Helmet } from 'react-helmet-async';
import { SITE } from '../data/site';

interface MetaProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const BASE_URL = "https://my-portfolio-one-sigma-35.vercel.app";

export function Meta({ 
  title, 
  description = SITE.about.bio, 
  path = "/", 
  image = "/og-image.png" 
}: MetaProps) {
  // Generate full title
  const fullTitle = title 
    ? `${title} | ${SITE.name}` 
    : `${SITE.name} | ${SITE.roles[0]}`;
  
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
