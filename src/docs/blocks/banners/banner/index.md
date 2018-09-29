---
layout: l-rdsdocs-blocks
maxwidth: none
title: Banner Block
banner:
  data:
    breadcrumbs: true
    breadcrumb:
      grandparent: Blocks
      parent: Banners
    buttons: false
desc: The banner block provides a variety of functions relating to being the first visual a visitor encounters on each page. At the minimum, the base banner provides the primary page heading. To take advantage of the its prime position, the banner block affords many options including: breadcrumb navigational aids, call to action buttons and hero images. 
meta:
  handle: banner
  type: Banner
  path: banners/banner/
  version: core 1.0.0
  status: under review
  since: 1.0.0
  theme: core
  ff: Full
  heading: no
context: 
- name: image
modifiers:
dependencies:
    js: n/a for core block. required for carousel addon
    selector: b-banners-banner
    restricted: div
    maxwidth: na
examples:
- name: breadcrumbs
  nicename: Banner with breadcrumbs
- name: button
  nicename: Banner with Call to Action Button
- name: buttons
  nicename: Banner with Multiple Call to Action Buttons
- name: img-ban
  nicename: Banner - Hero Image variant with button
- name: img-light
  nicename: Hero Image Lightened and Aligned to the Top
- name: img-dark
  nicename: Hero Image Darkened and Aligned to the Bottom
wild: n/a
alternatives: n/a
data:
- name: title*
  type: string
  desc: Banner title.
  options: null / na
- name: breadcrumbs
  type: boolean
  desc: Hide/show breadcrumbs
  options: null / na
- name: buttons
  type: boolean
  desc: Hide/show button(s)
  options: null / na
- name: img
  type: string
  desc: Background image path.
  options: null / na
---
##Implementation Notes

- Use only one banner per page. This page obviously breaks this rule but it is an anomaly in order document all the available banners and their options.
- Banners are not content area blocks and reside in the page header in RDS.
- The theme's templates and layout will dictate if banners are available.

##Content guidelines

Banner blocks should:

- 

##When To Avoid

- Don't use this block.  

