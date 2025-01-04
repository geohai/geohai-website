---
title: Network Geovisualization for Electricity Grid Distribution Systems 
authors: 
    - isaiah-lyons-galante
    - morteza-karimzadeh
tags: 
 - geovisualization
 - visual analytics
 - electrical grid
search-tag: electrical grid
thumbnail: https://res.cloudinary.com/dz3zgmhnr/image/upload/t_crop-4-3/v1729718116/nrel-bus-voronoi_ksufcs.png
---
Electrical grids are geographical and topological structures whose voltage states are challenging to represent efficiently for visual analysis,
especially at scale. The current common practice is to use colored contour maps (i.e., heatmaps), yet these can misrepresent the data primarily because 
they average values over geographic distance, while ignoring network (i.e., topological) distance. This especially becomes a problem when maps are 'zoomed' out, where averaging will lead to the erasure of important larger or anomalous values.

<figure class="project-info-figure">
        <img 
            src="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1735537067/fe57df10-7698-4c9c-85b3-9b66b9bf5511.png" 
            alt="electrical grid heatmap"
            class="project-info-image"
        >
        <figcaption class="project-info-caption">
            A geographic heatmap (top left) erases the network structure, and also, leads to loss of values (as can be seen in bottom left), compared to showing the original values in a symbol glyph map (top right),
            which preserves the values on both ends of the data distribution (bottom right). However, glyp maps can't be used for larger scale visualizatoins, where the map is 
            essentially 'zoomed out' for larger networks. 
        </figcaption>
</figure>


This project develops novel network heatmap visualizations as well as  a web application, examining the suitability of four alternative visualization methods for depicting voltage data in a geographically dense distribution system—Voronoi polygons, H3 tessellations, S2 tessellations, and a network-weighted contour map, which this last one being a novel method developed by us. We find that Voronoi tessellations and network-weighted contour maps more accurately represent the statistical distribution of the data than regular contour maps, but we intend to experiment with larger scale visualizations to see how network planners or managers can gain quick understanding of the network state using these methods. 

This project is funded by the [National Renewable Energy Laboratory](https://www.nrel.gov/){:target="_blank" rel="noopener noreferrer"} in collaboration with the Visualization team led by [Kristi Potter](https://research-hub.nrel.gov/en/persons/kristi-potter){:target="_blank" rel="noopener noreferrer"} and [Kenny Gruchalla](https://research-hub.nrel.gov/en/persons/kenny-gruchalla){:target="_blank" rel="noopener noreferrer"}.
