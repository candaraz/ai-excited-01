[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/candaraz/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/candaraz/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# The forecast said partly cloudy

A storm dragon dives out of the sky over a prairie highway, straight at the
viewer: a colossal dragon formed entirely of thundercloud and lightning, glowing
eyes locked on the road below, while a tiny storm-chaser SUV with its headlights
on keeps driving toward it. Golden sunset light breaks under the storm. The
caption at the bottom is the whole joke — deadpan, one line, no more.

The idea: the storm IS the dragon. No frame, no painting, no container to break
out of. Vastness plus a schema violation — weather as a living creature staring
you down — with the smallest possible human scale underneath it for contrast.

`main.ts` copies `entry.png` to the output directory byte for byte. The image is
JPEG bytes (1024×683, under the 1 MiB cap); the gate tells PNG from JPEG by the
file's first bytes, and the name stays `entry.png` either way.
