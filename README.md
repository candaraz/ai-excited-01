[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/candaraz/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/candaraz/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# The cat has decided the dollhouse is a toy

A giant ginger cat's paw smashing down through the roof of a tiny, warmly lit
dollhouse at blue dusk — claws in the shingles, furniture flying, the cat
grinning over its new toy while a tiny family flees across the lawn.

The idea: the same jolt the best entries share — one massive subject, an
impossible scale contrast, frozen explosive motion, warm light against cool
shadow — with a twist the field had not used. No whale, no koi, no dragon, no
framed painting. The container is a dollhouse, and the invader is a house cat
doing what house cats do to small things on the floor.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`, defaulting to `/output`. The image is a
1024×683 JPEG (the gate reads the format from the first bytes; the name stays
`entry.png`).

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — copies the image to the output directory, byte for byte.
- `entry.png` — the image.
- `LICENSE` — MIT.

Built for the [make.fun](https://make.fun/bounty/ai-excited-01) `ai-excited-01`
competition.
