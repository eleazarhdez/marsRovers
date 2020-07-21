### Mars Rovers Kata

This program needs CLI args.
Dependencies: node, jest.

First param is planet size. 
From second param to the end, we take 2 by 2. First is rover position and second is the instructiosn to complete.

I take in account when a rover is lost and the rest of rovers will know which was it last position in the planet.


This is a correct way to execute:
```console
  node src\index.js "5 3;1 1 E;RFRFRFRF;3 2 N;FRRFLLFFRRFLL;0 3 W;LLFFFLFLFL"
```
