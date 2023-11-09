---
title: Learning Spatiotemporal Graphs for Action Segmentation in Multimodal Data
author: julia-romero
tags: graph-deep-learning, sensors, spatiotemporal, human-behavior
image: images/50salads.jpeg
---
In collaboration with **Intel Labs**, we are developing deep learning methods for human activity recognition in multimodal data collected from video, depth, and 10 accelerometers (the 50 Salads dataset). Specifically, we are exploring graph-based methods to model spatiotemporal information and to perform multimodal data fusion, such that the learning process is more data-efficient and resource-efficient.

With the rise of IoT technology there is an increasing number of ubiquitous sensors in settings including smart homes, patient monitoring, autonomous and connected vehicles, education, and workplace safety monitoring. These devices collect continuous streams of data from different spatial locations, temporal resolutions, and sensing modalities, resulting in large, messy data. Current algorithms are lacking in their ability to handle these challenges, with current solutions circumnavigating these problems with "brute force"-like models that require large training data and computational resources, while not effectively leveraging multimodal inputs. We explore (understudied) graph-based deep learning to encode spatiotemporal information and novel techniques to leverage cross-modal and intra-modal information, leading to higher data and resource efficiency. We use a high profile dataset called 50 Salads to evaluate our techniques on hierarchical (multi-tier) action segmentation.

