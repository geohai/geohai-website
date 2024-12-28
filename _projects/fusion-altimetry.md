---
title: Fusing Remote Sensing Imagery and Satellite-Based Laser Altimetry (ICESat-2)
authors: 
  - morteza-karimzadeh
  - daehyeon-han
tags: 
  - spatiotemporal
  - machine learning
  - cryosphere
  - sea ice
  - uncertainty
  - remote sensing
search-tag: 
image: 
date: 01-01-2024
thumbnail: https://res.cloudinary.com/dz3zgmhnr/image/upload/v1732734238/50546603-57dd-4b98-b2a7-9ed6364bbf48.png
---

<div class="project">
    <p>This project integrates remote sensing and altimetry data to enhance sea ice mapping, with applications and methods generalizable to other application areas, including land remote sensing. We utilize Synthetic Aperture Radar (SAR) from Sentinel-1, which provides high-resolution images capable of penetrating clouds and darkness, and optical satellite imagery from Sentinel-2, which captures visible and near-infrared light to capture detailed ice surface characteristics. SAR measures volume scattering of active radar signals, whereas optical remote sensing measures surface reflectance and passively collected information, so they measure very different physical properties. However, both satellites face challenges, such as signal ambiguities in distinguishing ice types and limitations in spatial resolution and coverage under certain conditions. Additionally, while SAR can penetrate cloud cover, optical sensors like those on Sentinel-2 are hindered by it, yet they offer richer surface detail under clear conditions. Also, polar regions are dark 6 months at a time, so optical imagery is severely limited by lack of daylight!</p>

    <figure class="project-info-figure">
        <img 
            src="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1732684590/f3d52d20-49a7-49e1-beb6-2c1a5e3b1104.png" 
            alt="ICESAt-2 tracks (laser altimetry) on Sentinel-1 (SAR) image background over Arctic sea ice"
            class="project-info-image"
        >
        <figcaption class="project-info-caption">
            A comparison of ATL03 and ATL07 ICESat-2 products over Canadian Archipelago captured on 2022-01-05. Background image is Sentinel-1 HH polarization. ATL07 h_coarse_std has a 10km of coarse segment length. 
        </figcaption>
    </figure>

    <p>Satellite altimetry, particularly from ICESat-2, offers precise measurements of ice surface heights using laser pulses. These measurements are crucial for measuring ice elevation/freeboard and topography from space. ICESat-2’s lasers provide excellent precision, but as everything good in life goes, it has severe limitations. ICESat-2 has limited spatial coverage along linear track compared to the more extensive imaging swath of satellite imagery, such as those taken by Sentinel 1 or 2 satellites. Put differently, the altitudes are measured along a very narrow line (well, three narrow lines in this case), and not a grid. By the time ICESat-2 makes another pass in a closeby track, sea ice conditions may have drastically changed, so waiting for the satellite to cover the entire surface through multiple passes is simply not an option. </p>
    <p>Our project addresses the challenge of fusing these very different data sources—combining grid-based imagery from satellites with track-based observations from altimetry over a highly dynamic phenomena of sea ice. By using deep learning, we aim to translate one type of data into another, enhancing our ability to map sea ice parameters accurately using both supervised and unsupervised methods, and striving for effective results with minimal training samples. Our goal is to increase the spatial coverage of ICESat-2 measurements by leveraging the information collected by Sentinel-1 SAR (primary) and hopefully Sentinel-2 optical (secondary). </p>

    <h3>Intellectual Merit</h3>
    <p>This project makes scientific contributions in how satellite data can be integrated and interpreted. By developing algorithms that can fuse grid-based SAR (and optical) scences with along-the-track laser altimetry, we tackle the core scientific challenge of resolving the ambiguities inherent in each data type alone, and expanding the spatial coverage of both. Our deep learning models aim to harness the strengths of each sensing method, providing a more comprehensive understanding of sea ice conditions. The techniques we develop for efficient data fusion with minimal samples have the potential to change data fusion for remote sensing applications in cryospheric sciences and beyond in environmental monitoring. </p>

    <h3>Broader Impacts</h3>
    <p>The methods and products developed in this project have the potential to change sea ice mapping with significant implications for maritime navigation and climate monitoring. One of the major challenges in mapping sea ice is the lack of precise information related to sea ice thickness for training algorithms. Multi-year ice (which has survived a summer melt event) can be tens of meters in thickness (with most of it under water, unobservable from space) can pose significant danger to marine navigation. Multi-year ice also modifies the heat transfer between the ocean and atmosphere, among other environmentally significant characteristics. However, mapping it from space using SAR or optical data is a very challenging task. While ICESat-2 altimetry allows for observing sea ice elevation, the limited spatial footprint limits its use in mapping. 

With efficient fusion, which is the goal of this project, more accurate and timely sea ice charts help ensure safer navigation routes through polar regions, support climate change models with better data, and enable more effective monitoring of environmental changes in vulnerable ecosystems. This project not only enhances our scientific understanding of polar environments, but also demonstrates the potential of artificial intelligence to address global challenges.</p>

<p> Publications and reports coming soon!</p>
</div>
