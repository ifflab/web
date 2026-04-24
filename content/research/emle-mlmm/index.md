---
title: "Electrostatic embedding scheme for ML/MM potentials"
weight: 10
summary: "Integrating machine-learned potentials into multiscale simulations via the EMLE electrostatic embedding approach."
---

The project focuses on integrating machine-learned potentials into hybrid QM/MM
simulations via the electrostatic machine learning embedding (EMLE) approach.

By decoupling the _in-vacuo_ energy prediction from the environmental
polarization effects using physics-based models for electronic density, charge
equilibration, and atomic polarizabilities, the project enables accurate ML
potentials to be employed in complex molecular simulations. This framework
improves the accuracy of energy and force predictions for ground- and
excited-state processes and facilitates seamless incorporation into existing
QM/MM software, as demonstrated in applications ranging from small-molecule
systems to biomolecular environments. The project led to the development of the
[emle-engine](https://github.com/chemle/emle-engine) package, a flexible
open-source tool that implements the ML/MM electrostatic embedding scheme for
efficient multiscale molecular dynamics simulations.
