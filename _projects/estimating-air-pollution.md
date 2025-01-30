---
title: Estimating Surface-Level Air Pollution
authors: 
  - zhongying-wang
  - james-crooks
  - morteza-karimzadeh
tags: 
 - spatiotemporal
 - machine learning
 - remote sensing
 - air pollution
 - public health
 - epidemiology
search-tag: air pollution
image: 
thumbnail: https://res.cloudinary.com/dz3zgmhnr/image/upload/t_no-fill-4-3/v1735369769/image62_k3t8hs.png
---

Ground-stations characterize air quality by observing air pollution concentrations at the air pollution [stations]( https://www.epa.gov/aqs){:target="_blank" rel="noopener noreferrer"}. On the other hand, people live and work in places relatively far from these sensors. So how do quantify or study the impacts of air pollution on public health? Satellite observations can help with that! However, satellites derive measures of pollution in columns of air as seen from space.  Air pollution, as experienced by humans, however, is on the surface! Therefore, the research challenge is to estimate surface-level air pollution at any given point, on any given day, by relying on the satellite observations of columns of air, and limited ground-based calibration data. 

In this project, we are estimating daily surface-level concentrations of PM2.5, Ozone (with NO2 in progress) in the U.S. with 1KM resolution, to support our public health and epidemeologist collaborators as well as other potential users interested in air pollution datasets. We develop and use specialized deep learning methods for this purpose. 


 <figure class="project-info-figure">
        <img 
            src="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1735369613/image233_yxclhp.png" 
            alt="MODIS AOD measurements"
            class="project-info-image"
        >
        <figcaption class="project-info-caption">
            Satellite-measured Aerosol Optical Depth (AOD) by MODIS
        </figcaption>
  </figure>



  <figure class="project-info-figure">
        <img 
            src="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1735369769/image62_k3t8hs.png" 
            alt="Ground-level PM2.5"
            class="project-info-image"
        >
        <figcaption class="project-info-caption">
            Our Deep Learning-based Estimation of Surface-level Concentrations of PM2.5 
        </figcaption>
  </figure>


<h3>Deep Learning for Fusion of Ground- and Satellite-based Measurements for Estimating Surface-level Air Pollution Concentration</h3>

Satellite observations and ground-level measurements both play a role in air pollution modeling, however, they have their strengths and limitations. Remote sensing data measures the columnar concentration of pollutants from the atmosphere, providing indirect but valuable indicators for ground-level air pollution. Remote sensing data usually provides broad spatial coverage, enabling large-scale (e.g., global and regional) modeling work. These observations are particularly valuable for regions lacking ground monitoring stations, such as rural and remote areas. Furthermore, the high spatiotemporal resolution of remote sensing products provides insights into the study of finer-scale variations across space and time. For example, the MODIS AOD data for PM2.5 provide daily 1-km resolution observations, which is critical to capture inter-urban patterns and daily variations. Similarly, Sentinel-5P from the TROPOMI sensor offers a daily but coarser spatial resolution (5.5km x 3.5km) for various air pollutants, including O3, NO2, and SO2. Despite those advantages, satellite data has its limitations. It provides columnar measurements, which pose a challenge for modeling work and require complex calibration to infer the ground-level concentrations. Moreover, meteorological factors (e.g., cloud cover and snow) and surface conditions (e.g., bright surface) can affect remote observations and result in missing observations. 


Ground-based measurements are often considered “gold standard”, providing highly accurate pollution data. Unlike remote sensing data, which measures columnar concentrations, ground-based data measures pollutants directly at the surface level, omitting the necessity of calibration. Networks like the [U.S. EPA monitoring system](https://www.epa.gov/aqs){:target="_blank" rel="noopener noreferrer"} provide high-accuracy, ground-level data for air pollutants across the U.S., commonly used as ground truths in modeling. However, the primary drawback of ground-level data from monitoring stations is its sparse spatial coverage, particularly in rural and remote areas. The uneven spatial distribution is another limitation. For example, there are many more monitoring stations in states like California than in its neighboring state, Nevada (which only has limited stations). The temporal resolution of ground-level data has improved in recent years, and most stations now provide daily measurements. However, some stations still only provide measurements every three days. Another drawback is the challenge of timely measurements during emergent events, such as the increasing wildfire events. Deploying temporary monitoring stations in affected areas to measure sudden increases in air pollution is usually difficult but crucial for modeling extreme values. The emergence of low-cost sensors, such as PurpleAir and Love My Air (LMA), address the problem to some degree, with a broader spatial coverage and distribution. However, the quality of the measurements for calibration of high-resolution models poses additional research challanges when compared to the “gold standard” from EPA stations. 

Machine learning models have become a dominant approach for fusing satellite and ground-level data to estimate different air pollutants. Due to the capability to handle large datasets and capture complex non-linear relationships, machine learning models provide more accurate and granular estimates than traditional statistical models. Especially  the advancements in hardware acceleration allows the machine learning model to harness more from the abundant remote sensing data. Common approaches for air pollution estimation can be divided into the following categories: tree-based models, deep learning-based models, and ensemble models. 

Deep learning models leverage neural networks to capture complex spatiotemporal dependencies in high-dimensional datasets. They can effectively fuse different data sources, such as in-situ measurements, satellite images, and reanalysis data. Different types of neural networks are designed to approach the problem from various perspectives. See our publications and products to learn more on how we leverage deep learning to estimate surface-level air pollution!

This project is a collaboration with [National Jewish Health](https://www.nationaljewish.org/){:target="_blank" rel="noopener noreferrer"}, [James Crooks](https://www.nationaljewish.org/doctors-departments/james-l-crooks){:target="_blank" rel="noopener noreferrer"}, and [Elizabeth Regan](https://www.nationaljewish.org/doctors-departments/elizabeth-anne-regan){:target="_blank" rel="noopener noreferrer"}, and is funded by [NIH](https://www.nih.gov/){:target="_blank" rel="noopener noreferrer"} under grant  R21ES032973 and [Colorado Population Center](https://cupc.colorado.edu/){:target="_blank" rel="noopener noreferrer"} funded by Eunice Kennedy Shriver National Institute of Child Health & Human Development of the National Institutes of Health (P2CHD066613).