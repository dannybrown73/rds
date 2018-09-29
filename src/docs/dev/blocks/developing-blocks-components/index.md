---
layout: l-rdsdocs-markdown
maxwidth: tablet
title: Naming Blocks and Components
banner:
  settings:
    variant: 
  data:
    img:
      url: 
      url_s: 
      opacity: light
      position: 
    breadcrumbs: true
    breadcrumb:
      parent: Dev
      grandparent: Blocks
    buttons: true
    button: 
    - title: event
      url: news
    - title: event
      url: news
---
Blocks and components are built in a managed approach that follow a predictable pattern and the code used should be as transparent and self-documenting as possible.

## BEM Naming Convention

To better understand the relationship between our HTML and CSS, RDS uses a declarative syntax based on the [BEM methodology](https://en.bem.info/methodology/). 

```css
.block {}
.block__element {}
.block--modifier {}
```

* .block is the highest level and represents the block/component name.
* .block__element represents a descendent that helps form .block as a whole.
* .block--modifier represents a different state or version of .block or a .block__element.

For more reading on BEM [check the awesome resources](https://github.com/sturobson/BEM-resources).

## Class namespacing 

To glean even more information from the HTML, the block name must use with the following pattern:

```html
<div class="prefix-type-name">
```
Where the: 

* __prefix__ is either 'b-' or 'c-' indicating whether it is a block or a component. 

* __type__ refers to the type of block or component it has been categorized under.

* __name__ is its assigned unique name. Along with the block type, the block name should describe its purpose.

### Namespacing Example

Below is the opening HTML markup for the Listing block called [List Group](/docs/blocks/listing/list-group/):

```html
<ul class="b-listing-list-group">
```

1. `b-` signifies this as a block.  
2. `listing-` tells us this block belongs to the Listing block type.  
3. `list-group` tells us the block name.

toDO add and link - View all of our CSS namespacing here - (u-, l-)

These naming conventions help make the code more transparent and help us find associated partials. The SCSS file for List Group block, in the example above, should be found under a folder structure such as:

```md
├── scss
│   ├── blocks
│       ├── listing
│           ├── _list-group.scss
```

## Four important naming rules
 
The following rules are key for creating consistent blocks and components in RDS.

### 1. Only use the prefix-type-name convention in the first tag
The parent block tag is the only tag that requires the full naming convention as per below.

```html
 <div class="prefix-type-name">
```

All element class names should exclude the prefix `b-` or `c-` and the `type-` and use BEM namespacing on just the block's name. Do not repeat the prefix and block type in every element's class name.

#### Incorrect
```html
<ul class="b-listing-foo">
<li class="b-listing-foo__item">
    <a class="b-listing-foo__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
</li>
</ul>
```

#### Correct
```html
<ul class="b-listing-foo">
    <li class="foo__item">
        <a class="foo__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
    </li>
</ul>
```

**Note for the kids watching at home**: don't do this! It breaks with BEM conventions. Stick to the BEM rule of repeating the `exactClasName__elementName`. Due to long class names, we diverge from BEM in RDS for reasons of brevity. We get away with it because we have a process to guarantee all class names are unique.

### Modifiers on parent tags

While sub elements should exclude the prefix pattern, modifiers on the block's parent class name must repeat the full prefixed name.

#### Incorrect
```html
<ul class="b-listing-foo foo--red">
    <li class="foo__item">
         <a class="foo__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
    </li>
</ul>

```
#### Correct
```html
<ul class="b-listing-foo b-listing-foo--red">
    <li class="foo__item">
        <a class="foo__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
    </li>
</ul> 
```
### 2. Don't use grandchildren BEM selectors
The double underscore pattern should only appear once in a selector class name. Don't use extra grandchildren selectors when elements are nested two or more levels deep. 

#### Incorrect
```html
<ul class="b-listing-foo">
    <li class="foo__item">
        <a class="foo__item__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
    </li>
</ul>
```
#### Correct
```html
<ul class="b-listing-foo">
     <li class="foo__item">
         <a class="foo__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
     </li>
</ul>
```
### 3. Don't add class names to elements without any associated styles
While a unique class name (even if it has no css) is required at the parent block name level, do not add class names to elements if they don't have any styles associated with them. 

#### Incorrect

```html
<div class="b-content-text">
    <p class="text__intro">This paragraph uses the base p style.</p>
</div>
```
#### Correct  

```html
<div class="b-content-text">
    <p>This paragraph just uses the base p style so there is no need to add a class name.</p>
</div>
```
The code above is fine. Since no styles are attached to the paragraph, there is no need to create a class on the `<p>` tag.

### 4. Names made up of two words should always be hyphen delimited

Names made up of two words, or more, should always be broken up with a hyphen. Any third or fourth hyphens in a block name doesn't mean anything other then the name is hyphenated. BEM's double hyphen enables hyphen delimiting, so don't mash words together. Using the "List Group" block as an example:

#### Incorrect

```html
<div class="b-listing-listgroup">
```

#### Correct

```html
<div class="b-listing-list-group">
```







