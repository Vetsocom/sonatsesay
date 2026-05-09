import type { Metadata } from "next";

const siteUrl = "https://sonatsesay.vetsocom.com";

type SeoPageInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/assets/images/sona-national-student-symposium-podium.png",
}: SeoPageInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Sona T. Sesay",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const seoData = {
  home: createPageMetadata({
    title: "Sona T. Sesay | Education Leadership in Liberia",
    description:
      "Official portfolio of Sona T. Sesay, a Liberian education leader and public servant focused on student development, educational progress, public service, and national impact.",
    path: "/",
    image: "/assets/images/sona-national-student-symposium-podium.png",
  }),
  about: createPageMetadata({
    title: "About Sona T. Sesay | Education Leader in Liberia",
    description:
      "Learn about Sona T. Sesay’s biography, leadership journey, and commitment to educational leadership, public service, and community impact in Liberia.",
    path: "/about",
    image: "/assets/images/sona-official-portrait-yellow.png",
  }),
  contact: createPageMetadata({
    title: "Contact Sona T. Sesay",
    description:
      "Contact Sona T. Sesay for official inquiries, speaking engagements, education partnerships, and public service collaborations.",
    path: "/contact",
    image: "/assets/images/sona-ministry-event-speaking.png",
  }),
} as const;