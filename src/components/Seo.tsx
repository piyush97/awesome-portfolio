import React from "react";
import { Helmet } from "react-helmet";
import { URL } from "../data/data";
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
  // const image = metaImage && metaImage.src ? `${metaImage.src}` : null;
  return (
    <Helmet>
      <html data-theme={theme} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={metaImage.src} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={URL} />
    </Helmet>
  );
};

export default Seo;
