---
title: Products
nav:
  order: 3
  tooltip: Software, datasets, and more
---

# {% include icon.html icon="fa-solid fa-wrench" %}Products

We believe in open and replicable science, and open-source software. 
This page lists products such as software, visual analytics apps, code, dataset or models that are usable by others. 
Not all our research leads to products like that, but still, coding is used to conduct the analysis. For those, see the code repos 
linked on the [Publications]({{ site.baseurl }}/research/) page. 


Clicking on each card below takes you to the source code repository, 
and if there is a "Visit Live Website" link, it is linking to the live websire, dataset or models page. 
If you need assistance with a product, please feel free to contact us. 

{% include section.html %}

{% include search-box.html %}

{% include search-info.html %}

<!-- Collect and display unique tags from _data/products.yaml -->
{% assign product_tags = site.data.products | map: "tags" | join: "," | split: "," | uniq | sort %}
{% include tags.html tags=product_tags %}

{% include section.html %}

## Featured

{% include list.html component="card" data="products" filters="group: featured" %}

{% include section.html %}

## More

{% include list.html component="card" data="products" filters="group: " style="small" %}
