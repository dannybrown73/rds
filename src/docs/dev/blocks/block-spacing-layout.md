---
layout: l-content
title: Block Spacing and Layout
---
Utility classes are used to control block spacing and layout. All blocks require at least one block utility class. This page will help you understand what utility classes and when and how to use them to control blocks.

## Block layout types

To organize blocks we group them into multiple [category types](#), however, there are only two types of blocks in terms of layout.

The two block **layout types** are:

1. Fixed width blocks (fixed blocks)
2. Full width blocks (full blocks)

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/blocks.png" />

## Fixed blocks

Centered on the screen, fixed width blocks have containers with a maximum width applied to them. The avaialble max-width sizes corespond with the RDS media query ranges—or breakpoints: small, medium and large. The majority of core fixed blocks have a maximun width equalling the ['small' breakpoint](#). Modifiers are needed to assign other sizes or to set a full width block.

### Fixed width block example, the List Group block:

{%include "/rdsdocs/templates/close.twig"%}
<div class="b-listing-list-group u-block">
    <ul class="list-group__list" itemscope itemtype="http://schema.org/ItemList">
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/White-necked_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">White-necked Raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Common_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Common raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Australian_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Australian raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Thick-billed_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Thick-billed raven</div>
            </a>
        </li>
    </ul>
</div>{%include "/rdsdocs/templates/open-content.twig"%}

**Note** the `u-block` class at the begining of the block's code. This utility class needs to be on every block. This class defaults the block to be a fixed width equal to the small breakpoint sizing of 768px. 
```html
<div class="b-listing-list-group u-block">
    <ul class="list-group__list" itemscope itemtype="http://schema.org/ItemList">
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/White-necked_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">White-necked Raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Common_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Common raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Australian_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Australian raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Thick-billed_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Thick-billed raven</div>
            </a>
        </li>
    </ul>
</div>
```
The [List Group](#) block is not designed to be any wider then the width it is displayed at above, but for documentation purposes, we will use it as an example for creating a wider fixed width block.

**To make a fixed block wider**, apply one of the two `u-block` width modifiers:

1. `u-block--m`
2. `u-block--l`

Note: there is no `u-block--s` because the default width of `u-block` is its equivalent.

### Example of a medium size fixed width block:
{%include "/rdsdocs/templates/close.twig"%}

<div class="b-listing-list-group u-block u-block--m">
    <ul class="list-group__list" itemscope itemtype="http://schema.org/ItemList">
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/White-necked_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">White-necked Raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Common_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Common raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Australian_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Australian raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Thick-billed_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Thick-billed raven</div>
            </a>
        </li>
    </ul>
</div>{%include "/rdsdocs/templates/open-content.twig"%}

Notice how the `u-block--m` modifier makes the block wider.
```html
<div class="b-listing-list-group u-block u-block--m">
    <ul class="list-group__list" itemscope itemtype="http://schema.org/ItemList">
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/White-necked_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">White-necked Raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Common_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Common raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Australian_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Australian raven</div>
            </a>
        </li>
        <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
            <a class="list-group__url" href="https://en.wikipedia.org/wiki/Thick-billed_raven" itemprop="url">
                <div class="list-group__body list-group__body--s" itemprop="name">Thick-billed raven</div>
            </a>
        </li>
    </ul>
</div>
```
**Note**: fixed blocks have max-widths, not set widths, so they are still responsive. If you are reading this documentation on a phone or on a viewport smaller then the widths used in these demos, you wont see any changes in the examples above.

All fixed blocks in RDS blocks have recomended max-width sizes. There are only a few blocks that offer a variation in width sizes. View the [documentation for each block](#) to learn a block can be resized. 

## Fixed blocks with Headings

Fixed blocks can have headings associated with them. The heading is technically not a part of the block but should be grouped together as [sectioning content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#sectioning-content-0). The `u-block` utility class changes location when fixed blocks are grouped with headings.

### To group a heading with a block:

1. Add an HTML 5 `<section>` tag surrounding the block.
2. Move the `u-block` class from the block into the section tag.
3. Add the heading between the opening section tag and the block.

#### Example: {%include "/rdsdocs/templates/close.twig"%}
<section class="u-block">
    <h2>List Group block with heading</h2>
    <div class="b-listing-list-group">
        <ul class="list-group__list" itemscope itemtype="http://schema.org/ItemList">
            <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
                <a class="list-group__url" href="https://en.wikipedia.org/wiki/White-necked_raven" itemprop="url">
                    <div class="list-group__body list-group__body--s" itemprop="name">White-necked Raven</div>
                </a>
            </li>
            <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
                <a class="list-group__url" href="https://en.wikipedia.org/wiki/Common_raven" itemprop="url">
                    <div class="list-group__body list-group__body--s" itemprop="name">Common raven</div>
                </a>
            </li>
            <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
                <a class="list-group__url" href="https://en.wikipedia.org/wiki/Australian_raven" itemprop="url">
                    <div class="list-group__body list-group__body--s" itemprop="name">Australian raven</div>
                </a>
            </li>
        </ul>
    </div>
</section>
{%include "/rdsdocs/templates/open-content.twig"%}

**Note** in the code below, how the `u-block` class has been moved up to be on the `<section>` tag.

```html
<section class="u-block">
    <h2>List Group block with heading</h2>
    <div class="b-listing-list-group">
        <ul class="list-group__list" itemscope itemtype="http://schema.org/ItemList">
            <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
                <a class="list-group__url" href="https://en.wikipedia.org/wiki/White-necked_raven" itemprop="url">
                    <div class="list-group__body list-group__body--s" itemprop="name">White-necked Raven</div>
                </a>
            </li>
            <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
                <a class="list-group__url" href="https://en.wikipedia.org/wiki/Common_raven" itemprop="url">
                    <div class="list-group__body list-group__body--s" itemprop="name">Common raven</div>
                </a>
            </li>
            <li class="list-group__item c-icon-chevron-right--grey" itemprop="item">
                <a class="list-group__url" href="https://en.wikipedia.org/wiki/Australian_raven" itemprop="url">
                    <div class="list-group__body list-group__body--s" itemprop="name">Australian raven</div>
                </a>
            </li>
        </ul>
    </div>
</section>
```

## Full width blocks

Full width blocks have a container that spans the entire width of the viewport.

### Full width block example: the Banner block

{%include "/rdsdocs/templates/close.twig"%}
{% include "banners/banner/data/banner.twig" ignore missing %} 
{%include "/rdsdocs/templates/open-content.twig"%}

```html
<div class="b-banners-banner u-block-full" role="banner">
    <div class="banner__container">
        <h1 class="banner__title">Base Banner</h1>
    </div>
</div>
```
### To make a full width block:

1. Add the utility class `u-block-full`.

The utility class `u-block-full` forces a full-width container around the block.

**Note**: never use `u-block--full` and `u-block--row` together on the same block. It is either one or the other.

## Block utility classes 

Let's take a closer look at all of the block utility classes and modifiers:

- u-block
    - u-block--m
    - u-block--l
- u-block-full

### u-block 

The  `u-block` utility class:

- sets the block to a fixed width.
- adds system-wide side padding to all blocks.
- adds system-wide bottom margins to all blocks.
- helps us identify where a block begins, when looking at the HTML.

#### Block margins and padding

The `u-block` utility class sets up site-wide spacing so block layout is consistent and easy.

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/u-block.png">

#### Bottom margins

Both the `u-block` and `u-block-full` classes add bottom margins so blocks can easily stack on top of each other with consistent spacing in between.

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/u-block-margin.png">

#### Side padding 

By setting a consistent `padding-left` and `padding-right` we prevent fixed blocks from becoming full blocks when the block width meets the screen's edge. This applies for any screen size but the primary need for the side padding is to provide consitent gutters for all fixed blocks on small screens.

<img width="308px" src="http://cu-raven.s3.amazonaws.com/assets/img/docs/u-block-padding.png">


### u-block--m

The `u-block--m` modifer:

- sets a max-wdth of 1024px on the fixed width block.

### u-block--l

The `u-block--l` modifer:

- sets a max-wdth of 1366px on the fixed width block.

### u-block-full

The `u-block-full` class:
 
- sets the width of the blocks content area to 100%.
- adds system-wide bottom margin for spacing.

Note: by design, the system automatically removes the bottom margin when full width blocks are stacked directly on top of each other.

<img width="309px" src="http://cu-raven.s3.amazonaws.com/assets/img/docs/full.png">

### Block sizing review

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/block-widths.png">

## Storybook

Check out and play around with straight forward rendered examples on [Codepen](https://codepen.io/cuweb/pen/odyjrg?editors=1010) or change some classes below and view the results.

{%include "/rdsdocs/templates/close.twig"%}<div class="u-block u-block--l"><p data-height="415" data-theme-id="light" data-slug-hash="odyjrg" data-default-tab="result" data-user="cuweb" data-embed-version="2" data-pen-title="Storybook - block sizing" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/cuweb/pen/odyjrg/">Storybook - block sizing</a> by Carleton (<a href="https://codepen.io/cuweb">@cuweb</a>) on <a href="https://codepen.io">CodePen</a>.</p><script async src="https://static.codepen.io/assets/embed/ei.js"></script></div>
{%include "/rdsdocs/templates/open-content.twig"%}

<a class="c-buttons-button" href="https://codepen.io/cuweb/pen/odyjrg?editors=1010">Test these Concepts on Codepen</a>

 - explain variants
 -- setting - data options








Next: [Developing Blocks and Components](developing-blocks-components/) 

{%include "/rdsdocs/templates/close.twig"%}











