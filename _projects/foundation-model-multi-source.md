---
title: Foundation Models for Multi-Source Pre-Fusion and Few-shot Learning
authors: 
  - morteza-karimzadeh
  - julia-romero
  - isaiah-lyons-galante
  - zhongying-wang
  - behzad-vahedi
  - kevin-lane
  - jen-macdonald
  - daehyeon-han
tags: 
 - machine learning
 - remote sensing
 - foundation model
search-tag: 
image: 
thumbnail: https://res.cloudinary.com/dz3zgmhnr/image/upload/v1735955434/eac27541-722d-4060-b1e1-899c7c073e5c.png 
---

This project develops a foundation model that leverages multi-source satellite data to enable few-shot learning for various environmental monitoring tasks. We utilize both Synthetic Aperture Radar (SAR) data from Sentinel-1 and optical imagery from Sentinel-2. SAR, which emits and receives radar signals, captures surface texture and moisture content and can penetrate cloud cover, making it invaluable for several applications such as flood detection during cloudy conditions. In contrast, optical sensors capture light in visible and near-infrared spectra, providing detailed information on vegetation, soil, and water bodies, crucial for land use classification and fire detection.

These data sources are complementary: SAR provides reliable data under all weather conditions, while optical sensors offer high-resolution surface details in clear weather. Our project aims to train foundation models using these diverse data sources, enabling them to pre-fuse the information. This pre-fusion helps the model perform robustly in downstream tasks, even if only one data source is available, such as using SAR data alone for flood mapping during overcast conditions, or optical alone for land use classification. 

 <figure class="project-info-figure">
        <img 
            src="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1735955696/100d8b6f-2b0f-45a2-b31e-dc28672d532b.png" 
            alt="Sentinel-1 and Sentinel-2 seasonal acquisitions"
            class="project-info-image"
        >
        <figcaption class="project-info-caption">
            Sentinel-1 SAR (left column) and Sentinel-2 Optical (middle and right columns) capture different information during the four seasons (the four rows), with the two sensors complementing each other's information on moisture, greenness... SAR primarily captures volume scattering, while optical relies on surface reflectivity. Images taken from the <a href="https://github.com/zhu-xlab/SSL4EO-S12" target="_blank">SSL4EO </a> dataset. 
        </figcaption>
  </figure>

<h3>Intellectual Merit</h3>
The intellectual challenge of this project lies in the development of a foundation model trained on multi-source data that also supports source-specific encoders. This approach not only enhances the model's generalizability across different environmental monitoring tasks but also improves performance in single-source scenarios. By integrating diverse data types from the outset, the model learns to extract and combine the unique strengths of each data source, thereby improving its predictive capabilities and adaptability to various environmental phenomena.

<h3>Broader Impacts</h3>
The ability to accurately monitor and predict environmental changes with minimal data samples has profound implications for disaster response, environmental protection, and sustainable development. This project's advancements in multi-source data fusion and few-shot learning will help ensure that critical decisions in emergency management and conservation can be made swiftly and based on reliable data, regardless of weather conditions. Ultimately, this technology could greatly enhance our ability to respond to natural disasters and manage natural resources more effectively.

This project is a GeoHAI Lab collaborative effort among students and postdocs in the lab, and funded by [NASA](https://www.nasa.gov/){:target="_blank" rel="noopener noreferrer"} and [NSF](https://www.nsf.gov/){:target="_blank" rel="noopener noreferrer"}. 