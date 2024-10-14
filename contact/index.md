---
title: Contact
nav:
  order: 6
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Please feel free to contact our members for specific projects, or contact the director:
{%
  include button.html
  type="email"
  text="karimzadeh@colorado.com"
  link="karimzadeh@colorado.com"
%}
{%
  include button.html
  type="phone"
  text=" 303-492-3252"
  link="+1-303-492-3252"
%}
{%
  include button.html
  text="Location on Map"
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://maps.app.goo.gl/i7x78WEjK8BFjYeC7"
%}

**Note for Prospective students** Students interested in a graduate degree in Geography or Computer Science whose research and interests align with GeoHAI: Please feel free to reach out to Dr. Karimzadeh with your CV, explaining how your research background and expertise may align with our work, and what areas you'd be interested in working on in the future. Please use the projects page, and see our latest papers on our research page or [here](https://scholar.google.com/citations?hl=en&user=Vy2oR2kAAAAJ&view_op=list_works&sortby=pubdate).

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/website-images/gugg-in-fall.jpg"
  caption="Guggenheim Geography on CU Boulder's campus"
%}

{% endcapture %}

{% capture col2 %}

<!-- {%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%} -->

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Mailing Address: 
Morteza Karimzadeh,

GUGG 110, 260 UCB 

Boulder, CO 80309-0260
{% endcapture %}

{% capture col2 %}
[Department of Geography](https://www.colorado.edu/geography/)
{% endcapture %}

{% capture col3 %}
[Department of Computer Science](https://www.colorado.edu/cs/)
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
