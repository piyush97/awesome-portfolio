import React from "react";
import { Helmet } from "react-helmet-async";
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
  return (
    <Helmet>
      <html lang={lang} data-theme={theme} data-react-helmet="true" />
      <title>{title}</title>
      <meta name="title" content={title} data-react-helmet="true" />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta
        name="description"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta property="og:title" content={title} data-react-helmet="true" />
      <meta
        property="og:image"
        content={metaImage.src}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta property="og:url" content={url} data-react-helmet="true" />
    </Helmet>
  );
};

export default Seo;
