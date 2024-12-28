---
title: Sea Ice Mapping and Uncertainty Quantification 
authors: 
  - morteza-karimzadeh
  - rafael-pires-de-lima
  - sepideh-jalayer
  - behzad-vahedi
  - jen-macdonald
  - daehyeon-han
tags: 
  - spatiotemporal
  - machine learning
  - cryosphere
  - sea ice
  - uncertainty
  - remote sensing
search-tag: sea ice
image: 
thumbnail: https://res.cloudinary.com/dz3zgmhnr/image/upload/t_blue-fill-4-3/v1729813611/fig12_wdh7dy_c_pad_w_400_h_400_ultszf.png
---

<div class="project">
    
    <p>Sea ice charting is vital for navigating safely through icy waters and for scientists studying climate change in polar regions. Traditionally, experts at national ice centers manually interpret various types of satellite data to create sea ice maps using a standard called SIGRID-3. This manual process is slow and struggles to keep up with rapidly changing conditions in the Arctic. Our project aims to speed this process up while making it more accurate by using geospatial principles in developing  deep learning methods, using high- and low-resolution satellite imagery.</p>
    <p>We primarily use data from Synthetic Aperture Radar (SAR) and Passive Microwave sensors (and some lidar altimetry in <a href="{{ site.baseurl }}/projects/fusing-altimetry.html" target="_blank"> related projects </a>). SAR works by sending radar signals from satellites and capturing the reflections, providing images that can see through clouds and darkness. Passive Microwave sensors detect natural microwave signals emitted by the sea ice, useful for understanding ice concentration and type. These technologies are powerful but come with challenges—different ice types can look similar in satellite images, causing confusion for both a human or algorithm, and the level of detail (spatial resolution) varies with the sensor type, affecting the accuracy of ice charts.</p>

    <figure class="project-info-figure">
        <img 
            src="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1729813611/fig12_wdh7dy_c_pad_w_400_h_400_ultszf.png" 
            alt="sea ice chart examples"
            class="project-info-image"
        >
        <figcaption class="project-info-caption">
            Example of SAR imagery (a, d, and g), sea ice charts (c, f, and i), and sea ice probability maps (b, e, and h)
        </figcaption>
    </figure>



        <h3>Intellectual Merit</h3>
    <p>Our project advances the field by integrating SAR with Passive Microwave data through deep learning, and developing training methods to fully utilize limited training samples available to scientists. This integration partially helps tackle the problem of signal ambiguity—where different ice types may appear similar. We are also developing new ways to enhance model accuracy using specialized algorithms that consider the varying levels of detail captured by different sensors, as well as partial concentrations of sea ice in training labels. Additionally, we explore how transfer learning, a method where a model developed for one task is reused on another, can be adapted for SAR data to handle different ice conditions more effectively.</p>
    <p>An essential part of our work involves quantifying how certain the model is about its predictions. This uncertainty measurement lets sea ice chart analysts trust, correct, or verify the automated maps, ensuring they can be used confidently in real-world navigation and research.</p>

    <figure class="project-info-figure">
        <img 
            src="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1734926905/e4155d7b-8ddb-4f07-b731-ef5264a10be1.png" 
            alt="sea ice chart examples"
            class="project-info-image"
        >
        <figcaption class="project-info-caption">
            Sea ice charting example. Top row: high-resolution Sentinel-1 SAR image. 2nd row: Low- resolution passive Microwave imagery. 3rd row: manually generated ice charts. 4th row: Deep-learning-based generated ice charts, along with uncertainty map to the right. 
        </figcaption>
    </figure>

    <h3>Broader Impacts</h3>
    <p>By automating sea ice charting, we make it possible for ships to navigate polar regions more safely and efficiently, potentially opening up new maritime routes. More reliable and timely maps also aid climate scientists in monitoring how quickly ice is forming or melting, which is crucial for understanding global climate change. This project not only demonstrates the potential of AI in environmental science but also showcases technological applications in better monitoring and studying our planet.</p>
</div>

