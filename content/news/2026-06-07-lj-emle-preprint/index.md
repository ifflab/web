---
title: "New preprint: environment-aware Lennard-Jones parameters for ML/MM"
date: 2026-06-07
summary: "A new ChemRxiv preprint derives Lennard-Jones parameters consistent with electrostatic embedding for ML/MM simulations."
draft: false
---

Our preprint *Atomic Environment Aware Lennard-Jones Parameterization for
Electrostatic Embedding ML/MM Simulations* is now available on
[ChemRxiv](https://doi.org/10.26434/chemrxiv.15004404/v1).

Electrostatics in ML/MM simulations have been studied extensively, but
exchange-repulsion and dispersion are still usually described with
Lennard-Jones parameters taken from standard force fields, which are not
consistent with the electrostatic embedding model. We derive Lennard-Jones
parameters from the exchange-hole dipole moment (XDM) model and the Fedorov
polarizability scaling relation, and propose a one-shot procedure to fine-tune
them to experimental free energies. For the electrostatic machine learning
embedding (EMLE) scheme, the resulting models match the accuracy of
conventional force fields and mechanical embedding, while giving parameters
that adapt to the chemical environment of each atom. This opens a route to
more accurate reactive simulations, where dispersion coefficients can change
strongly along the reaction.

Work by João Morado, Kirill Zinovjev, Lester O. Hedges, Julien Michel, and
Daniel J. Cole, in collaboration with the University of Edinburgh, OpenBioSim
and Newcastle University.
