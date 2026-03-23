import type { Organization, WebPage, Article, Person, WithContext, Graph } from "schema-dts";
import orgData from "../data/organization.json";
import authorData from "../content/authors/steve.json";

/** Creates the base Organization schema */
export const getOrgSchema = (): Organization => ({
  "@type": "Organization",
  "@id": `${orgData.url}/#organization`,
  "name": orgData.name,
  "url": orgData.url,
  "logo": orgData.logo
});

/** Creates a Person (Author) schema */
export const getAuthorSchema = (author: any): Person => ({
  "@type": "Person",
  "@id": `${authorData.url}/authors/${author.id}/#person`,
  "name": author.name,
  "jobTitle": author.jobTitle,
  "url": `${orgData.url}/authors/${author.id}`
});

/** SCHEMA FOR STATIC PAGES (Home, About, etc.) **/
export function getWebPageSchema(title: string, desc: string, url: string): Graph {
  const page: WebPage = {
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    "url": url,
    "name": title,
    "description": desc,
    "publisher": { "@id": `${orgData.url}/#organization` }
  };

  return {
    "@context": "https://schema.org",
    "@graph": [getOrgSchema(), page]
  };
}

/** SCHEMA FOR ARTICLES **/
export function getArticleSchema(post: any, author: any, url: string): Graph {
  const article: Article = {
    "@type": "BlogPosting",
    "@id": `${url}/#article`,
    "headline": post.title,
    "description": post.description,
    "datePublished": post.pubDate.toISOString(),
    "author": {
      "@type": "Person",
      "name": author.name,
      "url": `${orgData.url}/authors/${author.id}`
    },
    "publisher": { "@id": `${orgData.url}/#organization` },
    "mainEntityOfPage": { "@id": `${url}/#webpage` }
  };

  return {
    "@context": "https://schema.org",
    "@graph": [getOrgSchema(), article]
  };
}
