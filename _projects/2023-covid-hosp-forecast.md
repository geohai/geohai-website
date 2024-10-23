---
title: Integrating Spatiotemporal Features in LSTM for Spatially Informed COVID-19 Hospitalization Forecasting
authors: 
  - zhongying-wang
  - morteza-karimzadeh
tags: Spatiotemporal Forecasting, COVID-19, GeoHealth
image: https://res.cloudinary.com/dz3zgmhnr/image/upload/v1729526915/covid-hosp_qbuppi.png
thumbnail: https://res.cloudinary.com/dz3zgmhnr/image/upload/t_Banner 16:9/v1729526915/covid-hosp_qbuppi.png
---
The COVID-19 pandemic's severe impact highlighted the need for accurate and timely hospitalization forecasting to enable effective healthcare planning. However, most forecasting models struggled, especially during new variant surges, when they were most needed. This study introduces a novel Long Short-Term Memory (LSTM) framework for forecasting daily state-level incident hospitalizations in the U.S. 

Notably, we present a spatiotemporal feature, Spatial Proximity to Hospitalizations (SPH), derived from Facebook's Connectedness Index to improve forecasts. SPH serves as a proxy for inter-state population interaction, capturing transmission dynamics across space and time. Our parallel LSTM architecture balances short- and long-term temporal dependencies, and our multi-horizon ensembling strategy balances between consistency and forecasting error. Evaluating performance against COVID-19 Forecast Hub ensemble models during the Omicron surge reveals consistent superiority of our model. On average, our model surpasses the ensemble by 27, 42, 54, and 69 hospitalizations per state on the $7^{th}$, $14^{th}$, $21^{st}$, and $28^{th}$ forecast days, respectively. Data ablation experiments confirm SPH's predictive power, highlighting its innovation and effectiveness in enhancing forecasting models. This research not only advances hospitalization forecasting but also underscores the significance of spatial spillover features, such as SPH, in refining predictive performance in modeling the complex dynamics of infectious disease spread.