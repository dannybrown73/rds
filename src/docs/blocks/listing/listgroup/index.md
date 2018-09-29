---
layout: l-rdsdocs-blocks
title: List Group block
banner:
  settings:
    variant: 
  data:
    breadcrumbs: true
    breadcrumb:
      grandparent: Blocks
      parent: Listing
    buttons: false
desc: Lists Group blocks display a series of related content in vertical lists as a single continuous element.  The List Group block has several options and variants for dealing with different content types.
meta:
    handle: listgroup
    type: Listing Block
    path: listing/listgroup/
    version: core 1.0.0
    heading: true
    status: under review
    since: 1.0.0
examples:
- name: heading
- name: subtitle
  nicename: List Group with subtitle
- name: img
  nicename: List Group with image
- name: badge
  nicename: List Group with badge
- name: icon
  nicename: List Group with icon
- name: event
- name: news
- name: news-img
  nicename: List Group - News variant with image
- name: people
- name: video
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

List Group items should:

- Present objects of the same type.
- Start with a capital letter.
- Not use commas or semicolons at the end of each line.
- Link to a page for the item with more information.
- Have text labels be as short as possible.

##Implementation Notes

- It is important to note the markup changes when different context variants and data attributes are used. 
- If you are using the base H2 heading with a slight underline before this block, it looks best removed by adding the class 'u-no-borders' to the h2 tag.

##When To Avoid

- Don't use this block to replace default content ordered and unordered lists.
- Don't us this block if you are listing items that don't link anywhere.  

## Dates and Times
Date and time format should always be CCYY-MM-DDThh:mm:ss as per [W3C](https://www.w3.org/TR/NOTE-datetime)

