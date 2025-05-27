export type AlternateProps = {
  canonical: string;
  languages?: Record<string, string>;
};

export type OpenGraphProps = {
  url: string;
  title: string;
  description: string;
  image: string;
};

//

export type ImageProps = {
  href: string;
  alt: string;
  srcset?: string;
  sizes?: string;
  media?: string;
};

export type PreloadImageProps = {
  remoteImages?: ImageProps[];
  localImages?: ImageProps[];
};

// JSON LD
export type BreadcrumbListItem = {
  position: number,
  name: string;
  url: string;
}