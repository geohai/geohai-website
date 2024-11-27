---
title: Projects
nav:
  order: 1
  tooltip: Project descriptions
---

# {% include icon.html icon="fa-solid fa-project-diagram" %}Projects

We thank our sponsors, including but not limited to [National Science Foundation](https://www.nsf.gov/), [NASA](https://www.nasa.gov/), [NREL](https://www.nrel.gov/), [NIH](https://www.nih.gov/) and [Population Council](https://popcouncil.org/). See each project for more details.   


{% include section.html %}

{% include search-box.html %}


<!-- Added this to collect project tags -->
{% assign project_tags = site.projects | map: "tags" | join: "," | split: "," | uniq | sort %}
{% include tags.html tags=project_tags %}


{% include search-info.html %}

{% include project-list.html data="projects" component="project-excerpt" %}
