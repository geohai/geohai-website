---
title: Forecasting the Geographic Incidence of COVID-19 How Does Social Media Help?
author: morteza-karimzadeh
tags: 
 - spatiotemporal
 - machine learning
 - COVID-19
 - public health
 - epidemiology
search-tag: covid-19
---

Forecasting COVID-19 geographic spread is a challenging task. Reliable forecasting is crucial, as it is used in resource allocation and allows local authorities and health officials to implement timely interventions. 

In these studies, we show that AI-based short term forecasting of COVID-19 can outperform conventional compartmental models that have been long used in epidemiological modeling. These traditional models, to a large extent, failed to reliably predict the local surges in the US. This was partially responsible for the reactive planning of local governments only after a local surge was underway.  Deep learning is data-driven, and successfully models the variations within US counties, from population demographics, to masking and social distancing adherence,  to varying levels of immunity due to vaccination or waning immunity over time. 
Additionally, in our work, we show that social media connectedness can be successfully used to model the spatial diffusion of the disease. In other words, we used data created from social media friendship networks to estimate the amount of transmission from one area to another. Specifically, we used Metas’ (Facebook’s) Social Connectedness Index, an index that quantifies the proportion of users in county-pairs (or state-pairs) that are friends on Facebook. Building on this dataset, our deep learning models incorporate the rate of between-county and between-state transmission of COVID-19, and thus, improve the forecasts. 


Our (Nature Com) study also found that Social Media Connectedness is usually a better measure for quantifying human interactions compared to cell phone-driven movement data, which passively monitors the number of cell phones (and thus, people carrying them) that move from one area to another. We hypothesize that the predictive power of social media data over cell phone movement data for quantifying disease transmission may say something about human behavior: people may mask up and social distance when they go to work or shop, but may not adhere to social distancing or masking when spending time with friends. However, this is only a hypothesis and needs more investigation. Our goal is forecasting for all counties, and we can only look at the predictive power of variables, but not make an inference about their precise significance. In short, social media data is a good metric for measuring the amount of human interaction, and this dataset is available for more than 35 countries, even in data-poor regions of the world, where cell-phone mobility datasets are not readily available. Additionally, many US cell phone companies shut down their (free) publication of movement data early in 2021 after vaccines emerged. 
 

Building on our findings, we have been contributing to national forecasting efforts. Every week, teams around the country, including us (representing CU Boulder), use the latest data and generate short-term forecasts and contribute to the central repository of the US COVID-19 Forecast Hub. The Hub, generates an ensemble of all these forecasts, which the CDC then uses in reporting, communications and publications. As the cases of COVID-19 decline, we are all wary of new variants and these forecasting efforts will continue. There is new emphasis on hospitalization forecasts as a better metric for the impact of the virus, and thus, we will continue to contribute daily hospitalization forecasts to the Hub as well. 
