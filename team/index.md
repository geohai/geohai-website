---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

<!-- Meet our core research group: -->

{% include section.html %}

{% include list.html data="members" component="portrait" filters="role: pi, group: ^(?!alum$)" %}
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$), group: ^(?!alum$)" %}

{% include section.html background="images/background.jpg" dark=true %}

<!-- And our affiliate members: -->

{% include section.html %}

## AFFILIATE MEMBERS

{% include list.html data="members" component="portrait" filters="role: pi, group: affiliates" %}
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$), group: affiliates" %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}

## ALUMNI

{% include list.html data="members" component="portrait" filters="role: pi, group: alum" %}
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$), group: alum" %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
