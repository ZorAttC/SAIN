# SAIN: Structure-Aware Interactive Navigation with Active Dialogue Grounding for Mobile Robot

[Paper](https://arxiv.org/abs/2608.09196) | [Project Page](https://zorattc.github.io/SAIN/) | [Citation](#citation) | [License](#license)

**Status:** Under review. The source code and installation instructions will be released after the review process.

**Authors:** Yuhao Cao, Xiao Liu, Yang Xie, Lu Liu, Haoyao Chen

<p align="center">
  <img src="https://raw.githubusercontent.com/ZorAttC/SAIN/gh-pages/assets/imgs/schema.png" width="92%" alt="SAIN overview">
</p>

## Overview

SAIN is a zero-shot framework for Interactive Instance Goal Navigation (IIGN). It enables an embodied agent to resolve ambiguous category-level instructions through active dialogue and locate the user-intended object instance without task-specific policy training.

The core idea is **dialogue-to-state conversion**. Instead of treating oracle answers as transient textual hints, SAIN compiles them into persistent target evidence, route-level corridor memory, and object-candidate labels. These states are maintained in structured value, room, graph, and object memories and consumed by a unified policy for frontier ranking and final target approach.

On the VL-LN IIGN benchmark, SAIN improves success rate from 20.2 to 25.4 and SPL from 13.07 to 14.17 over the strongest reported dialogue-enabled baseline.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Citation](#citation)
- [License](#license)

## Installation

SAIN is currently under review. The source code, environment specification, pretrained model requirements, and reproducible installation instructions will be released in this repository after the review process.

## Citation

If you find SAIN useful for your research, please cite our paper:

```bibtex
@article{cao2026sain,
  title={SAIN: Structure-Aware Interactive Navigation with Active Dialogue Grounding for Mobile Robot},
  author={Cao, Yuhao and Liu, Xiao and Xie, Yang and Liu, Lu and Chen, Haoyao},
  journal={arXiv preprint arXiv:2608.09196},
  year={2026}
}
```

## License

License information will be provided when the source code is released. Third-party datasets, models, and software remain subject to their respective licenses and terms of use.
