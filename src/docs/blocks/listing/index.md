---
layout: base
title: Listing blocks
banner:
  settings:
    variant: 
  data:
    breadcrumbs: true
    breadcrumb:
      parent: Blocks
    buttons: false
---
{% from "listing/listgroup/list-macro.twig" import list %}
{{ list (
    {
        color: "",
        context: "",
        heading: "",
        linkColor: false,
        theme: ''
    },
    [
        {
            title: "Grid block",
            url: "grid/",
        },
        {
            title: "List Group block",
            url: "list-group/"
        }
    ]
) }}
