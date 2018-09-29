---
layout: l-rdsdocs-blocks
title: Listing Grid block
banner:
  settings:
    variant: 
  data:
    breadcrumbs: true
    breadcrumb:
      grandparent: Blocks
      parent: Listing
    buttons: false
desc: The Grid block uses RDS' <a href="#">responsive flexbox grid</a> to list Card components in equal-width columns. Grids blocks can vary in width and the number of columns used.
meta: 
    version: 1.0.0
    handle: grid
    type: Listing Block
    path: listing/grid/
    theme: core
    status: under review
    lt: fixed
    heading: "true"
context: 
- name: 2 column
- name: 3 column
- name: 4 column
dependencies:
    js: n/a
    selector: b-listing-grid
    restricted: div
    maxwidth: small mq, medium mq
examples:
wild: n/a
alternatives: grid-list
data:
- name: inc*
  type: string
  desc: Card component inc path.
---
{%include "/rdsdocs/templates/close.twig"%}

<section class="u-block">
    <h2 id="2">Two Column Grid Block</h2>
    <div class="b-listing-grid">
        <ul class="u-grid u-grid--2">
            <li>{%include "cards/card/data/card--video.twig"%}</li>
            <li>{%include "cards/card/data/card--video.twig"%}</li>
        </ul>
    </div>
</section>{%include "/rdsdocs/templates/open-content.twig"%}

```html
<div class="b-listing-grid u-block">
    <ul class="u-grid u-grid--2">
        <li>{include card component}</li>
        <li>{include card component}</li>
    </ul>
</div>
```
{%include "/rdsdocs/templates/close.twig"%}

<section class="u-block">
    <h2 id="3">Three Column Grid Block</h2>
    <div class="b-listing-grid">
        <ul class="u-grid u-grid--3 u-grid--s1">
            <li>{%include "cards/card/data/card.twig"%}</li>
            <li>{%include "cards/card/data/card.twig"%}</li>
            <li>{%include "cards/card/data/card.twig"%}</li>
        </ul>
    </div>
</section>{%include "/rdsdocs/templates/open-content.twig"%}

```html
<div class="b-listing-grid u-block">
    <ul class="u-grid u-grid--3 u-grid--s1">
        <li>{include card component}</li>
        <li>{include card component}</li>
        <li>{include card component}</li>
    </ul>
</div>
```
**Note**: we added the modifier class `u-grid--s1` to display the cards in one column on small screen view. In general, it is best if the number of cards displayed is divisible by two for an even layout on mobile and desktop.

{%include "/rdsdocs/templates/close.twig"%}
<section class="u-block u-block--m">
    <h2 id="3">Four Column Grid Block</h2>
    <div class="b-listing-grid">
        <ul class="u-grid u-grid--4">
            <li>{%include "cards/card/data/card--news.twig"%}</li>
            <li>{%include "cards/card/data/card--news.twig"%}</li>
            <li>{%include "cards/card/data/card--news.twig"%}</li>
            <li>{%include "cards/card/data/card--news.twig"%}</li>
        </ul>
    </div>
</section>{%include "/rdsdocs/templates/open-content.twig"%}

```html
<div class="b-listing-grid u-block u-block--m">
    <ul class="u-grid u-grid--4">
        <li>{include card component}</li>
        <li>{include card component}</li>
        <li>{include card component}</li>
        <li>{include card component}</li>
    </ul>
</div>
```
**Note**: we added the `u-block--m` modifier because the four column grid listing looks better at the wider medium breakpoint.

{%include "/rdsdocs/templates/close.twig"%}{%include "/rdsdocs/templates/open-content.twig"%}
##Content guidelines

Grid block cards should:

- Present objects of the same content and type.
- Images should have a similar tone and treatment to visually unify the panel.

##Implementation Notes

-  If you are building pages made up of mostly grid blocks and not a lot of text, we recomend using the four column block layout with `u-block-m`.  This size is less variable for reading text but excellent for 4 column grid blocks.
-  Remember the four column block uses the default grid `u-grid` and we don't need to add any additional column modifiers.
##When To Avoid

- Don't use this block inside of a content block. If you need a grid within a content block, use the `u-grid` modifier. Remember, blocks can never be nested.


