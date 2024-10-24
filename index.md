---
---

# Welcome to the Geospatial Human-Centered Artificial Intelligence lab!

We are a team of spatial data scientists at the GeoHAI lab directed by [Dr. Morteza Karimzadeh]({{ site.baseurl }}/members/morteza-karimzadeh.html) at the [University of Colorado Boulder](https://www.colorado.edu/). Our research is use-inspired and interdisciplinary, where we tackle scientific challenges in the context of operational needs and urgent societal problems.

We believe in open science, and publish about our innovations in disciplinary literature of [Geography](https://www.colorado.edu/geography/) and [Computer Science](https://www.colorado.edu/cs/), where we are homed, as well as interdisciplinary journals and domains to which our work extends. 

Beyond publishing on our work in scientific venues, our products have direct users in other disciplines or outside academia, or have immediate impact for policy making. Our methods are human-centered, from computational modeling to designing visual interfaces, to evaluation and deployment. 
Browse through our many projects and team members to learn more!

{% include section.html %}

## Highlights

{% capture text %}

<!-- Check out our research papers -->

{%
  include button-reverse.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-left"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1729526915/HighParkFire_RGB_TS_wrdae0.png"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. -->

{%
  include button.html
  link="products"
  text="Browse our products"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1729526913/geoden_zezrd9.jpg"
  link="products"
  title="Our Products"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

<!-- text -->

{%
  include button-reverse.html
  link="projects"
  text="Explore our projects"
  icon="fa-solid fa-arrow-left"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1729718116/nrel-bus-voronoi_ksufcs.png"
  link="projects"
  title="Our Projects"
  text=text
%}

{% capture text %}

<!-- text -->

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/member-images/Nederland-lunch1-min.jpg"
  link="team"
  title="Our team"
  flip=true
  style="bare"
  text=text
%}