// Positions are in design pixels on the 1024px canvas; u() scales them to the window.
export const u = (n: number) => `calc(${n} * var(--u))`;

export const at = (x: number, y: number, w: number, h?: number) =>
  `left:${u(x)};top:${u(y)};width:${u(w)}` + (h === undefined ? '' : `;height:${u(h)}`);

// `sizes` value for an image that is `w` design pixels wide.
export const vw = (w: number) => `${Math.ceil((w / 1024) * 1000) / 10}vw`;
