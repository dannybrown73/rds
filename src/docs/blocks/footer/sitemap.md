---
layout: l-rdsdocs-blocks
maxwidth: none
inc: true
title: Sitemap Footer Block
banner:
  settings:
    variant: 
  data:
    breadcrumbs: true
    breadcrumb:
      grandparent: Blocks
      parent: Footers
    buttons: false
desc: The Sitemap Footer helps users and search engines determine how the website is laid out and makes them aware of all your important pages. Having the sitemap in the footer as oppose to on an individual page will save visitors clicks.
meta:
    handle: footer-sitemap
    type: Footer block
    path: footers/footer-sitemap/
    version: 1.0.0
    theme: core
    status: under review
    since: 1.0.0
dependencies:
    js: n/a
    selector: b-footer-brand
    restricted: div
    maxwidth: small mq
wild: n/a
alternatives: simple
---

## Implementation Notes

Include the HTML globally in your footer section. This block should be placed above the [Footer Brand block](../brand/) as the second-last visible block on a page.

## Best Practices

- Don't add too many links. Try and keep the number of links under 50. If you have more pages then this, make sure to be selective and display links to your most important pages.
- Organize you links into clearly labelled categories using the available columns for each category.

## When To Avoid

Avoid using this block if your site does not have many pages in it.

## Resources

https://www.interaction-design.org/literature/article/how-to-implement-sitemap-footers-to-keep-users-going 

