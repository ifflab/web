---
title: "New preprint: carbapenem breakdown by β-lactamases with EMLE"
date: 2026-09-09
summary: "A transferable EMLE ML/MM model predicts carbapenem breakdown barriers in four β-lactamases to within 1 kcal/mol of experiment."
draft: false
---

Our preprint *Chemical Accuracy for Carbapenem Breakdown by Class A
β-Lactamases Using a Transferable Embedded Machine-Learned Potential* is now
available on [ChemRxiv](https://doi.org/10.26434/chemrxiv.15008538/v1).

Bacterial resistance to carbapenems, often "last resort" antibiotics, is a
growing global health threat, driven by β-lactamase enzymes that break these
drugs down. QM/MM simulations can tell apart β-lactamases with and without
carbapenemase activity, but semiempirical methods do not give accurate
barriers, and higher-level QM is too slow for routine predictions.

Using the electrostatic machine learning embedding (EMLE) scheme, we built an
ML/MM model for the deacylation of meropenem. Trained only on active-site
structures of a single enzyme, the model predicts free energy barriers within
1 kcal/mol of experiment for four different class A β-lactamases without
retraining. It is faster and more accurate than semiempirical QM/MM, and
captures the differences between enzymes in oxyanion stabilization and active
site electric fields that determine carbapenemase activity.

Work by Elliot W. Chan, Michael Beer, Kirill Zinovjev, James Spencer, Marc W.
van der Kamp, and Adrian J. Mulholland, in collaboration with the University
of Bristol.
