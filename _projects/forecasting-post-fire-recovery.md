---
title: Forecasting Post-Fire Vegetation Recovery using Deep Learning
authors: 
    - claire-simpson
    - morteza-karimzadeh
tags: 
    - machine learning
    - remote sensing
    - spatiotemporal
    - fire ecology
thumbnail: https://res.cloudinary.com/dz3zgmhnr/image/upload/t_gen-fill-4-3/v1736116173/ee6b4452-a766-44d3-aea4-57389b583616.png
image: 
---

In the aftermath of wildland fires, understanding and forecasting the trajectories and patterns of vegetation regrowth is crucial for sustainable land management and environmental conservation. The major question is whether and how an area ‘recovers’ in the short and long term.

We train deep learning models to capture spatial and temporal dependencies in multi-sensor remote sensing data, enabling the prediction of post-fire landscape evolution at time intervals ranging from monthly to annually. We develop LSTM- and ConvLSTM-based architectures which allows us to harness the spatial dependencies inherent in remote sensing data, producing high-resolution spatio-temporal forecasting models.

<figure class="project-info-figure">
    <img 
        src="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1736116173/ee6b4452-a766-44d3-aea4-57389b583616.png" 
        alt="NDVI post fire"
        class="project-info-image"
    >
    <figcaption class="project-info-caption">
        Time-series of NDVI (Normalized Vegetation Index) before and after a fire in August 2011. 
    </figcaption>
</figure>

By developing these forecasting models, our project aims to not only provide monthly predictions of post-fire vegetation recovery but also generate recovery-potential surfaces for recent fires, aiding land managers in targeted interventions. The convolutional aspect enhances the model's ability to discern spatial patterns, offering a comprehensive understanding of how different intra-fire regions recover over time.

<figure class="project-info-figure">
    <img 
        src="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1736115670/8d7f4372-2ade-41d6-9c3c-f0118d121d65.png" 
        alt="Leaf Area Index recovery"
        class="project-info-image"
    >
    <figcaption class="project-info-caption">
        Example of Leaf Area Index (LAI) at a point burned by a forest fire, 9 years before and after the fire disturbanse. 
    </figcaption>
</figure>

 This cutting-edge fusion of deep learning and remote sensing technologies has potential to advance our insights into the complex dynamics of post-fire landscape recovery, contributing valuable information for adaptive, restorative land management practices and ecological resilience in the face of increasing wildfires.


Click [here](https://www.youtube.com/watch?v=17DyExtguvI){:target="_blank" rel="noopener noreferrer"} to watch a brief video discussing preliminary work.

This project is funded by a [National Science Foundation](https://www.nsf.gov/) Graduate Research Fellowship under Grant No. DGE 2040434.
