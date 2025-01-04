---
title: Contact
nav:
  order: 6
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Please feel free to contact the [Dr. Morteza Karimzadeh]({{ site.baseurl }}/members/morteza-karimzadeh.html) or our members for specific projects.


{% capture col1 %}

Mailing Address: GeoHAI lab <br/>
GUGG 110, 260 UCB <br/>
Boulder, CO 80309-0260
{% endcapture %}

<!-- {%
  include button.html
  type="email"
  text="test@test.com"
  link="test@test.com"
%}
{%
  include button.html
  type="phone"
  text=" 303-492-3252"
  link="+1-303-492-3252"
%} -->

{% capture col2 %}

{%
  include button.html
  text="Location on Map"
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://maps.app.goo.gl/i7x78WEjK8BFjYeC7"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}


**Note for Prospective students:** Students interested in a graduate degree in Geography or Computer Science whose research and interests align with GeoHAI: Please feel free to reach out to [Dr. Morteza Karimzadeh]({{ site.baseurl }}/members/morteza-karimzadeh.html) with your CV, explaining how your research background and expertise may align with our work, and what areas you'd be interested in working on in the future. Please use the [projects]({{ site.baseurl }}/projects/) and [publications]({{site.baseurl}}/research/) pages, or see our latest papers on [Google Scholar](https://scholar.google.com/citations?hl=en&user=Vy2oR2kAAAAJ&view_op=list_works&sortby=pubdate).

{% include section.html %}

{% capture col1 %}
  {%
    include figure.html
    image="images/website-images/the-flatirons.jpg"
    caption="Boulder's iconic [Flatirons](https://maps.app.goo.gl/D1t9ks65cVdTtFaK9) as seen from [Marshal Mesa](https://maps.app.goo.gl/sBehAh4cUrU9q3zW6)"
  %}
{% endcapture %}

{% capture col2 %}
  {%
    include figure.html
    image="images/website-images/gugg-in-fall.jpg"
    caption="[Guggenheim Geography](https://maps.app.goo.gl/JjGAZXxuLcbVy4QH7) on CU Boulder's [Campus](https://maps.app.goo.gl/rPvEABLyN76MHUp3A)"
  %}
{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
[Department of Geography](https://www.colorado.edu/geography/)
{% endcapture %}

{% capture col2 %}
[Department of Computer Science](https://www.colorado.edu/cs/)
{% endcapture %}

{% capture col3 %}
[Institude of Behavioral Science](https://ibs.colorado.edu/)
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
