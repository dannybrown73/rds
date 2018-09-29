---
layout: l-rdsdocs
maxwidth: none
title: Card component
banner:
  data:
    breadcrumbs: true
    breadcrumb:
      grandparent: Components
      parent: Cards
    buttons: false
desc: RDS cards group related pieces of information together. Cards serve as a linked entry point to more detailed information, while providing a quick preview of the content they link to.
meta:
    handle: card
    type: Card
    path: cards/card/
    version: core 1.0.0
    status: under review
    since: 1.0.0
examples:
- name: text
  nicename: Card with subtitle
- name: news
  nicename: Card - News variant
- name: news-text
  nicename: Card - News variant with excerpt
- name: video
  nicename: Card - Video variant 
- name: video-text
  nicename: Card - Video variant with text
- name: people
  nicename: Card - People variant
- name: people2
  nicename: Card - People variant with text
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
## Max-width Cards

Usually, cards are used in 3 and 4 column grid blocks to control their size. You can use them outside a grid, but the image dimensions need to be 768x300px.

</section>
<div class="u-block u-width-s">
    <article class="c-cards-card" itemscope itemtype="http://schema.org/Article">
        <a class="card__url" href="https://carleton.ca/rds/" itemprop="url">
            <figure class="card__figure" itemscope itemtype="http://schema.org/ImageObject">
                <img class="card__img " src="http://cu-raven.s3.amazonaws.com/assets/img/raven/card-wide.png" alt="Raven standing">
            </figure>
            <div class="card__body">
                <h2 class="card__title" itemprop="name">Max-width card</h2>
                <p class="card__text" itemprop="description">In general cards are used in 3 and 4 column grids to control there size, including the docs above. As shown here, you can use them outside a grid, but the image should be 768x300px. </p>
            </div>
        </a>
    </article>
</div>{%include "/rdsdocs/inc/block-s.twig" ignore missing%}

```html
<article class="c-cards-card" itemscope itemtype="http://schema.org/Article">
    <a class="card__url" href="https://carleton.ca/rds/" itemprop="url">
        <figure class="card__figure" itemscope itemtype="http://schema.org/ImageObject">
            <img class="card__img " src="http://cu-raven.s3.amazonaws.com/assets/img/raven/card-wide.png" alt="Raven standing">
        </figure>
        <div class="card__body">
            <h2 class="card__title" itemprop="name">Max-width card</h2>
            <p class="card__text" itemprop="description">In general cards are used in 3 and 4 column grids to control there size, including the docs above. As shown here, you can use them outside a grid, but the image should be 768x300px. </p>
        </div>
    </a>
</article>
```

##Implementation Notes

Cards are most effective when the background color within the card differs from background color of the underlying canvas. RDS cards always have a white background colour and are best used on a theme's secondary colour. The availability of a secondary background colour is theme dependant.

</section>
<div class="u-block-row-grey">
        <div class="b-listing-grid u-block">
            <ul class="u-grid u-grid--3">
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>    
            </ul>
        </div>
</div>{%include "/rdsdocs/inc/block-full-s.twig" ignore missing%}


##Content guidelines

Buttons should:

- Communicate the action that will occur when the user touches them.

##Avoid

- Don't 

</section>
</div>
