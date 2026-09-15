---
title: "Talk at CCPBioSim2026 in Bristol"
date: 2026-07-07
summary: "Kirill spoke about the surprising advantages of physics-based ML/MM potentials at the CCPBioSim annual conference in Bristol."
draft: false
---

Kirill gave the talk *Surprising advantages of physics-based ML/MM potentials*
at the 12th annual CCPBioSim conference, *Frontiers in Biomolecular
Simulation*, held at the University of Bristol from 6 to 8 July.

The talk presented the electrostatic machine learning embedding (EMLE) scheme.
Instead of fitting QM/MM energies, EMLE uses physical models of electron
density and polarizability to describe how the ML region responds to its
environment. Trained only on gas-phase data, EMLE models transfer well to new
environments and do more than reproduce QM/MM: they predict Raman spectra,
avoid the charge spill-out problem of QM/MM, and enable enhanced sampling
methods that standard QM/MM or naïve ML/MM potentials cannot support. The
talk included results from our recent
[paper on enzyme catalysis](/news/2026-03-10-emle-enzyme-catalysis/).
