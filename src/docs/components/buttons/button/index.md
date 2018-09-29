---
layout: l-rdsdocs-blocks
maxwidth: s
title: Button
desc: Buttons are used to initialize and make common actions visible and easy to perform with one click or tap. Buttons are labeled using text, icons or both.
meta:
    handle: button
    type: Button Component
    path: buttons/button/
    version: core 1.0.0
    status: under review
    since: 0.0.2
context: 
- name: ghost
modifiers:
- name: ghost
dependencies:
    js: n/a
    selector: c-btn
    restricted: <a> or <button>
    maxwidth: na.
examples:
- name: ghost
- name: grey
data:
- name: title*
  type: string
  desc: Button label.
- name: url*
  type: string
  desc: URL item links to.
- name: icon
  type: string
  desc: Icon's file name.
---
##Implementation Notes

Button classes are designed to be used with the both `<a>` and `<button>` elements. 

```html
<button class="c-buttons-button" name="button">Submit form</button>
```

When using button classes on `<a>` elements that are used to trigger in-page functionality like a toggle, rather than linking to new pages or sections within the current page, these links should be given a role="button" to appropriately convey their purpose to assistive technologies such as screen readers.
```html
<a class="c-buttons-button" href="#" role="button" tabindex="0" aria-pressed="false" onclick="handleBtnClick(event)" onKeyPress="handleBtnKeyPress(event)">Tab A</a>
```

### Ghost button usage

[Studies](https://www.smashingmagazine.com/2018/01/ghost-button-design/) have shown ghost buttons to be less effective then our default RDS base, full-color button. While Ghost Buttons have their place in web design, they need to be used less then th base button and in the right context. In addition, Ghost buttons should:

- Be used as secondary call-to-actions

<a class="c-buttons-button" href="http://www.imdb.com/title/tt0087332/" role="button">Main action</a> <a class="c-buttons-button c-buttons-button--ghost" href="http://www.imdb.com/title/tt0087332/" role="button">Secondary action</a>

- Should only be used on solid white backgrounds. If placed over a busy image without sufficient contrast, it can be difficult for users to read the button's text.

<a class="c-buttons-button c-buttons-button--ghost" href="http://www.imdb.com/title/tt0087332/" role="button">Read Ghostbuster reviews</a>

### Margins
By default, buttons only have a 5px right-margin and no bottom margin. To add the proper spacing between buttons and following blocks, wrap the button in a `<p>` tag.

If you are using a button component within a block and need to adjust margin spacing around the button, use the block element styles to do so.

### Centering
To center a button, add the modifier class `c-buttons-button--center`.

<a class="c-buttons-button c-buttons-button--center" href="https://gist.github.com/dannybrown73/30bf8390d63dda2bce39dacb0c562e7d" role="button">View this Gist</a>

```html
<a class="c-buttons-button c-buttons-button--center" href="https://gist.github.com/dannybrown73/30bf8390d63dda2bce39dacb0c562e7d" role="button">View this Gist</a>
```

##Content guidelines

Buttons should:

- Communicate the action that will occur when the user touches them.
- Be used as calls to action (cta).  
- Be clearly and accurately labeled and start with strong, actionable verbs.
- Be brief: A couple of words is best, no more than five is ideal
- Be used for the most important actions on a page.
- Fall on their own line and have a good amount of white space surrounding them.

Examples of buttons with good calls to action:

<a class="c-buttons-button" href="https://central.wordcamp.org" role="button">{% include "icons/arrow-down.svg" ignore missing %}Download our free ebook now</a>

<a class="c-buttons-button" href="https://central.wordcamp.org" role="button">Start a free trial</a>

<a class="c-buttons-button" href="https://central.wordcamp.org" role="button">{% include "icons/heart.svg" ignore missing %}Like this post</a>

<a class="c-buttons-button" href="https://central.wordcamp.org" role="button">{% include "icons/plus.svg" ignore missing %}Book an appointment</a>

<a class="c-buttons-button" href="https://central.wordcamp.org" role="button">Register for WordCamp Ottawa 2018</a> 

##Avoid

- Don't use buttons for standard links within text [such as this](http://www.nooooooooooooooo.com).
- Avoid using Ghost buttons for main actions.
- Avoid using Grey buttons on light backgrounds, unless it is a secondary or tertiary action.


