---
title: Spatiotemporal Graph Neural Networks for Action Segmentation in Multimodal Data
authors: 
    - julia-romero
    - morteza-karimzadeh
tags: 
    - machine learning
    - graph neural networks
    - spatiotemporal
thumbnail: https://res.cloudinary.com/dz3zgmhnr/image/upload/v1734927974/2a12e4dc-2fe6-4002-9c1c-1c8508e49638.png
---

Keystep recognition is a fine-grained video understanding task that aims to temporally localize and classify small, heterogeneous steps within long-form videos of human activities. Current approaches have poor performance, reaching 35-42/% accuracy on the Ego-Exo4D benchmark dataset.

In collaboration with [**Intel Labs**], we 
developed a flexible graph-learning framework for fine-grained keystep recognition that achieves state of the art performance. Our approach, termed GLEVR, consists of constructing a graph where each video clip of the egocentric video corresponds to a node. We further leverage alignment between egocentric and exocentric videos during training for improved inference on egocentric videos, as well as adding automatic captioning as an additional modality. This simple, graph-based approach is able to effectively learn long-term dependencies in egocentric videos. Furthermore, the graphs are sparse and computationally efficient, substantially outperforming larger models. 

We perform extensive experiments on the Ego-Exo4D dataset and show that our proposed flexible graph-based framework notably outperforms existing methods. 

GLEVR won 1st place in the 2025 Ego-Exo4D keystep recognition challenge, out of more than 20 team submissions. Check out the [extended abstract on arxiv](https://arxiv.org/abs/2506.01102).

[Check out the code repository](https://github.com/geohai/graphs-for-keystep-recognition).


<figure class="project-info-figure">
        <img 
            src="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1734927894/be078a69-976c-4a94-b8c5-31ac48e8da21.png" 
            alt="Ego-exo4D sample"
            class="project-info-image"
        >
        <figcaption class="project-info-caption">
            Example sample from the <a href="https://ego-exo4d-data.org/" target="_blank"> Ego-Exo4D </a> benchmark, with multi-modal ego- and exo-centric videos, narrations, and commentaries. 
        </figcaption>
</figure>

<figure class="project-info-figure">
        <img 
            src="https://res.cloudinary.com/dz3zgmhnr/image/upload/v1734927974/2a12e4dc-2fe6-4002-9c1c-1c8508e49638.png" 
            alt="localization example"
            class="project-info-image"
        >
        <figcaption class="project-info-caption">
        </figcaption>
</figure>

Publications coming soon! 
