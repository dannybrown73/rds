---
layout: base
title: Grid system
---
{%include "/rdsdocs/inc/open-b-content.twig"%}

RDS provides a super simple, responsive flexbox grid to easily list components in equal-width columns, without having to write cluttered markup. Not intended for broader page layout, the RDS grid has been simplified to meet Carleton's existing interface needs, by providing a 2, 3 and 4 column grid. 

## Building Grids

The default grid is 2 columns on small screens and 4 columns on bigger screens.

**To build the default grid:**

1. Add a grid container with the utility class "u-grid".
2. Add as many elements inside your grid container.

That's it!

{%include "/rdsdocs/templates/close.twig"%}
<section class="u-block">
    <h2>Default Grid</h2>
    <div class="b-listing-grid">
        <ul class="u-grid">
        <li>{% include 'cards/card/data/card.twig' %}</li>
        <li>{% include 'cards/card/data/card.twig' %}</li>
        <li>{% include 'cards/card/data/card.twig' %}</li>
        <li>{% include 'cards/card/data/card.twig' %}</li>  
        </ul>
    </div>
</section>{%include "/rdsdocs/templates/open-content.twig"%}

```html
  <ul class="u-grid">
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
  </ul>
```
**To build the other available grids:**

1. Add a grid container with the utility class "u-grid".
2. Add a "u-grid" modifier class corresponding with the number of columns you want on large screens. For example, "u-grid--3".
3. Add as many elements inside your grid container.

### 3 Columns

<ul class="u-grid u-grid--3">
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
</ul>
<br>
  
```html
  <ul class="u-grid u-grid--3">
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
  </ul>
```

### 2 Columns

<ul class="u-grid u-grid--2">
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
</ul>
  
```html
  <ul class="u-grid u-grid--2">
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
  </ul>
```

## Small Screen Columns

By default, all grids drop to two columns at the small breakpoint. 

**To set a 1 column grid for small screens:**

1. Add the modifier class "u-grid--s1" after your other "u-grid" classes.

On small screens, the example below displayes a one column grid.

<ul class="u-grid u-grid--s1">
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
</ul>
<br>
  
```html
  <ul class="u-grid u-grid--s1">
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
  </ul>
```

## Use any number of items

It looks better, but you do not have to have the perfect amount of items to fill each row. 

<ul class="u-grid u-grid--4">
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
<li><img src="https://fillmurray.com//320/240"></li>
</ul>

## Markup flexibility

You can use pretty much use any markup when setting up a grid, **but make sure items are wrapped within at least one other tag**.

### Not Cool 

```
<div class="u-grid">
    <img src="https://fillmurray.com//320/240">
    <img src="https://fillmurray.com//320/240">
    <img src="https://fillmurray.com//320/240">
    <img src="https://fillmurray.com//320/240">
</div>
```

### Cool 

```
<div class="u-grid">
    <div>
        <img src="https://fillmurray.com//320/240">
    </div>
    <div>
        <img src="https://fillmurray.com//320/240">
    </div>
    <div>
        <img src="https://fillmurray.com//320/240">
    </div>
    <div>
        <img src="https://fillmurray.com//320/240">
    </div>
</div>
```

### Also cool
```html
<ul class="u-grid">
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
    <li><img src="https://fillmurray.com//320/240"></li>
</ul>
```

**Note:** the preferred markup for grids is an unordered list.

## Column Gutters

By default, the gutters are set to 30px. You can adjust this at the project level by setting a new value for the variable `$grid-gutter` in your project vars.scss file.

### To remove the gutters:

1. Add the modifier class "u-grid--no-gutters" after your other "u-grid" classes.

<div class="u-grid u-grid--no-gutters">
    <div><img src="https://fillmurray.com//320/240"></div>
    <div><img src="https://fillmurray.com//320/240"></div>
    <div><img src="https://fillmurray.com//320/240"></div>
    <div><img src="https://fillmurray.com//320/240"></div>
</div>

```
<div class="u-grid u-grid--no-gutters">
    <div><img src="https://fillmurray.com//320/240"></div>
    <div><img src="https://fillmurray.com//320/240"></div>
    <div><img src="https://fillmurray.com//320/240"></div>
    <div><img src="https://fillmurray.com//320/240"></div>
</div>
```
If you are building a block that requires custom gutters or columns not supported in the core grid system just build it in to the block using the same appraoch used to build `u-grid`. TODO ADD LINK TO CODPEN

## That's all

As promised, super simple.

TODO ADD NOTE ABOUT 12 cols The grid system is super extensible and more grids can be added as needed.





