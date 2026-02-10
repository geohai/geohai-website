---
title: Locatoin Encoder Earth Embeddings as Priors for Dynamic Air Quality Estimation
author: morteza-karimzadeh
tags:
- spatiotemporal
- machine learning
- remote sensing
- public health
- air pollution
- foundation model
- earth embeddings
search-tag: air pollution
---

There has been considerable excitement, along with reasonable amounts of skepticism, around **geospatial foundation models** and so-called **Earth embeddings**. These models promise reusable representations of places learned from large, heterogeneous datasets, and they are increasingly treated as a general-purpose building block for downstream geospatial machine learning tasks. Yet one question kept resurfacing: **what actually happens when static Earth embeddings are used in a higly dynamic estimation problem?**

In our paper published in *GIScience & Remote Sensing*, we explored this question through the lens of **daily surface-level PM2.5 estimation across the continental United States**. This is a particularly demanding setting. Atmospheric transport, wildfire smoke, and weather systems can change rapidly from day to day, and deep-learning-based regression models often struggle not at the mean of the distribution but at its **extremes**—precisely where errors matter most for public health and policy, i.e., highly-polluted days.

At the core of the problem is a familiar but difficult inference task. Satellites observe aerosols as **vertical column measurements**, yet the quantity of interest for exposure and health studies is the **near-surface concentration** of PM2.5, often in locations far from ground monitors (where we live and breathe!). Even with rich Earth observations such as aerosol optical depth (AOD), meteorology, and smoke indicators, learning this mapping remains challenging. Deep learning models frequently achieve strong average performance while systematically underestimating or smoothing away the high-concentration tail of the distribution.

Most Earth embeddings proposed to date have been evaluated on relatively **static or temporally smoothed targets**, including long-term air temperature, biomass, land cover, or species distributions. These benchmarks are valuable, but they do not fully probe how static representations behave when embedded in a **dynamic, nonlinear estimation problem** where rare extremes make up the bulk of error. This gap motivated us to ask whether Earth embeddings can help in settings where temporal variability drives the signal.

A key conceptual insight from our experiments is that **Earth embeddings are most effective when treated as priors rather than as additional features**. Instead of concatenating embeddings to the input and allowing the model to memorize location-specific relationships, we conditioned a strong **Bi-LSTM with attention** on **pretrained, frozen Earth embeddings** using a simple **Hadamard (element-wise) fusion**. Framed differently, the model is encouraged to ask: *given what we know about this place, how should today’s observations be interpreted?* This conditioning mechanism allows static geographic context to modulate the interpretation of dynamic satellite and meteorological signals.

The architecture used in our experiments is shown below, illustrating how the Earth embedding interacts multiplicatively with the temporal representation learned from Earth observations:

![Model architecture with Hadamard fusion](https://res.cloudinary.com/dz3zgmhnr/image/upload/v1770494933/Bi-LSTM_Fusion_lz3ynz.png)

One of the more surprising results was that this prior-conditioning strategy improved performance **even during highly dynamic events**, including wildfire smoke episodes. In particular, we observed consistent gains at the **high-concentration tail of the PM2.5 distribution**, where deep learning regression models typically degrade despite access to rich inputs such as AOD and meteorology. Seeing improvements in extreme-value behavior—rather than just marginal gains in average error—was both unexpected and encouraging.

The figure below illustrates an example from the **Dixie Fire**, where conditioning on [GeoCLIP](https://proceedings.neurips.cc/paper_files/paper/2023/hash/1b57aaddf85ab01a2445a79c9edc1f4b-Abstract-Conference.html) Earth embeddings leads to markedly better recovery of high PM2.5 concentrations compared to an otherwise identical model without such conditioning:

![Dixie Fire PM2.5 estimation comparison](https://res.cloudinary.com/dz3zgmhnr/image/upload/v1770495204/Dixie_Fire_Pred_woWSD-min_ak9k7g.png)

Another notable finding emerged from comparing different sources of Earth embeddings. In the context of air-pollution estimation, **ground-level imagery–based embeddings (GeoCLIP)** consistently outperformed **satellite-imagery–based embeddings ([SatCLIP](https://ojs.aaai.org/index.php/AAAI/article/view/32457))**. This likely reflects the kinds of signals PM2.5 estimation depends on, including built environment characteristics, infrastructure, and proxies for human activity, which are often more directly captured by ground-level imagery. At the same time, this result highlights an important open question for the field: we need more controlled comparisons of Earth embeddings that differ *only* in imagery source, rather than also differing in positional encoding, embedding dimensionality, or training objective.

To ground these conceptual insights empirically, we systematically evaluated four geolocation strategies within a unified Bi-LSTM + attention framework: no geolocation, raw latitude/longitude, sinusoidal latitude/longitude, and pretrained Earth embeddings. Across both within-region and out-of-region spatial evaluation schemes, a consistent pattern emerged. Naive coordinate encodings can improve interpolation but often harm generalization, whereas Earth embeddings—particularly when fused via Hadamard product—improve both accuracy and geographic transferability. These results reinforce the interpretation of Hadamard fusion as a mechanism for **conditioning dynamic Earth-observation models on geographic priors**, rather than simply adding more predictors.

Taken together, these findings suggest a broader takeaway. **Earth embedding foundation models are more than representations of place**. When used appropriately, they act as a mechanism for injecting **geographic prior knowledge** into dynamic inference, stabilizing predictions and improving performance in rare but large extremes. This perspective matter in how Earth embeddings might be used in environmental machine learning, especially for applications where extremes matter more than averages.

The full paper, *Performance and generalizability impacts of incorporating location encoders into deep learning for dynamic PM2.5 estimation*, is available in *GIScience & Remote Sensing* (Karimzadeh, Wang, & Crooks, 2025):
[https://doi.org/10.1080/15481603.2025.2594797](https://doi.org/10.1080/15481603.2025.2594797)

Code to reproduce the experiments is available at:
[https://github.com/geohai/PM2.5_CONUS_LSTM](https://github.com/geohai/PM2.5_CONUS_LSTM)

This work was made possible by a close collaboration with **Zhongying Wang**, our outstanding doctoral student who led much of the modeling effort, and **James Crooks**, whose expertise in health-relevant exposure modeling motivated the work, but also whose intimate knowledge of PM2.5 formation and EPA sensing helped us set up the modeling pipline and the framing of PM2.5 estimation throughout the study.
