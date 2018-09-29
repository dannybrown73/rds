---
layout: l-rdsdocs-blocks
title: Content block
banner:
  settings:
    variant: 
  data:
    breadcrumbs: true
    breadcrumb:
      grandparent: Blocks
      parent: Content
    buttons: false
desc: Always found within the HTML 5 main tag, the Content block consists of content that is directly related to or expands upon the central topic of a page. This includes the words on the page but also images, components and multimedia.  
meta:
    handle: content
    type: Content
    path: content/content/
    version: 0.2.0
    status: under review
    since: RDS 1.0.0
context: 
modifiers:
dependencies:
    js: n/a
    selector: b-content
    restricted: div, section, article
    maxwidth: small mq
examples:
- name: test
  nicename: Testing various content types
wild: n/a
alternatives: grid-list
data:
- name: title*
  type: string
  desc: List item title/name.
  options: null / na
- name: url*
  type: string
  desc: URL item links to.
  options: null / na
- name: subtitle
  type: string
  desc: A secondary title.
  options: null / na
- name: img
  type: string
  desc: Item's image path.
  options: null / na
- name: icon
  type: string
  desc: Item's icon file name.
  options: null / na
- name: date **
  type: String format of YYYY-MM-DD.
  desc: Required for News & Event contexts.
  options: null / na
---
##Content guidelines

Content contributors should:

- follow the RDS content standards. 
- follow any content guidelines specific for any components used. 
- follow the RDS Writing Guidelines.
- be consistent and make use of proper headings and document structure.
- should follow RDS accessibility guidelines.

##Implementation Notes

- As sectioning content, the Content block can only be used once per page.

##When To Avoid

- Avoid adding a second Content block to a page.
- If your content isn't suitable for the `<main>` tag, consider using some of many other ways to add content to pages with other blocks and components. 

