import React from "react";
import { Helmet } from "react-helmet";
import { SEOProps } from "../types/types";

const Seo: React.FC<SEOProps> = ({
  lang,
  metaDescription,
  keywords,
  title,
  author,
  image: metaImage,
}) => {
  const image = metaImage && metaImage.src ? `${metaImage.src}` : null;
  return (
    <Helmet
      htmlAttributes={{ lang }}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `keywords`, content: keywords.join(",") },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          property: "og:image:width",
          content: metaImage.width,
        },
        {
          property: "og:image:height",
          content: metaImage.height,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ]}
      title={title}
    />
  );
};

export default Seo;
