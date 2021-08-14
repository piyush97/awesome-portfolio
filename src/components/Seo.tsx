import React from "react";
import { Helmet } from "react-helmet";
import { SEOProps } from "../types/types";

const Seo: React.FC<SEOProps> = ({
  lang,
  url,
  metaDescription,
  keywords,
  title,
  author,
  image: metaImage,
  theme,
}) => {
  const image = metaImage && metaImage.src ? `${metaImage.src}` : null;
  return (
    <Helmet
      htmlAttributes={{ lang }}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `keywords`, content: keywords.join(",") },
      ]}
    >
      <html data-theme={theme} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default Seo;
