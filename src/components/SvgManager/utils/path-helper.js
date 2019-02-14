export const curveTo = (radius = 10) => {
  const r = radius
  const p1 = r * 0.5523
  const p2 = r * 0.4477

  return {
    tl: `c0,-${p1}-${p2}-${r}-${r}-${r}`,
    tr: `c0,-${p1},${p2}-${r},${r}-${r}`,
    rt: `c${p1},0,${r}-${p2},${r}-${r}`,
    rb: `c${p1},0,${r},${p2},${r},${r}`,
    br: `c0,${p1},${p2},${r},${r},${r}`,
    bl: `c0,${p1}-${p2},${r}-${r},${r}`,
    lb: `c-${p1},0-${r},${p2}-${r},${r}`,
    lt: `c-${p1},0-${r}-${p2}-${r},-${r}`
  }
}

export const arrowTo = (length = 10) => {
  const l = length

  return {
    t: `l-${l},${l}l${l},-${l}l${l},${l}l-${l},-${l}`,
    r: `l-${l},-${l}l${l},${l}l-${l},${l}l${l},-${l}`,
    b: `l${l},-${l}l-${l},${l}l-${l},-${l}l${l},${l}`,
    l: `l${l},${l}l-${l},-${l}l${l},-${l}l-${l},${l}`
  }
}
