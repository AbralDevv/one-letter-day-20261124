# One Letter for Your Day

[![make.fun](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/c/u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/AbralDevv/one-letter-day-20261124/rank.svg)](https://make.fun/c/u-puan-one-letter-for-your-day-e54e9c36)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/AbralDevv/one-letter-day-20261124/reward.svg)](https://make.fun/c/u-puan-one-letter-for-your-day-e54e9c36)

Entry for the [One Letter for Your Day](https://make.fun/c/u-puan-one-letter-for-your-day-e54e9c36) competition on make.fun.

## The entry

One letter: **Q**.

Q stands for the word behind the day — quiet. A day that says little and means it. The competition asks for exactly one letter, A to Z, and nothing else, so the program writes a single `Q` with no newline, no gloss, no punctuation. Q was picked because it is the one letter that never shows up alone — it always brings its plus-one — which makes the quietest day feel like the sharpest, funniest, truest report of the bunch.

## How it works

`main.ts` (Node, standard library only, no network) resolves the output directory from `MAKEFUN_OUTPUT_DIR` first, then `/output`, then `./output`, and writes the letter `Q` to `entry.txt` there. It then reads the file back and fails unless it holds exactly that one character, so a bad write can never silently pass the gate.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
