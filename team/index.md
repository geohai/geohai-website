---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Core Research Team

<!-- Meet our core research group: -->

{% include section.html %}

{% include list.html data="members" component="portrait" filters="role: pi, group: ^(?!alum$)" %}
<!-- {% include list.html data="members" component="portrait" filters="role: ^(?!pi$), group: ^(?!alum$|affiliate$)" %} -->
<!-- {% include list.html data="members" component="portrait" filters="role: ^(?!pi$), group: ^(?!alum$|affiliate$)" %} -->
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$), group: ^(?!.*(alum|affiliate).*)$" %}

<!-- {% include section.html background="images/background.jpg" dark=true %} -->

<!-- And our affiliate members: -->

{% include section.html %}

## {% include icon.html icon="fa-solid fa-users" %}AFFILIATE MEMBERS

<!-- ## AFFILIATE MEMBERS -->

{% include list.html data="members" component="portrait" filters="role: pi, group: affiliate" %}
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$), group: affiliate" %}

{% capture content %}

{% endcapture %}

{% include grid.html style="square" content=content %}

## {% include icon.html icon="fa-solid fa-users" %}ALUMNI

{% include list.html data="members" component="portrait" filters="role: pi, group: alum" %}
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$), group: alum" %}

{% capture content %}

<!-- {% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %} -->

{% endcapture %}

{% include grid.html style="square" content=content %}
