export const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`

// Colori: canvas #08090a, accent #5e6ad2, os.accent #5C80BC, neon #3ee0a2
export const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_pointer;

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;
  float t = u_time * 0.06;
  p += (u_pointer - 0.5) * 0.08;

  vec2 w = p * 1.6;
  for (int i = 1; i <= 4; i++) {
    float fi = float(i);
    w.x += 0.55 / fi * sin(fi * 1.7 * w.y + t * (0.6 + 0.2 * fi) + fi * 1.3);
    w.y += 0.45 / fi * cos(fi * 1.5 * w.x - t * (0.5 + 0.15 * fi) + fi * 2.1);
  }
  float a = 0.5 + 0.5 * sin(w.x * 1.2 + w.y * 0.8);
  float b = 0.5 + 0.5 * sin(w.y * 1.4 - w.x * 0.6 + 2.0);

  vec3 base = vec3(0.031, 0.035, 0.039);
  vec3 indigo = vec3(0.369, 0.416, 0.824);
  vec3 blue = vec3(0.361, 0.502, 0.737);
  vec3 mint = vec3(0.243, 0.878, 0.635);

  float top = smoothstep(0.0, 1.0, uv.y);
  float centre = 1.0 - smoothstep(0.0, 0.8, abs(uv.x - 0.5));

  vec3 col = base;
  col += indigo * pow(a, 3.0) * (0.04 + 0.26 * top * (0.4 + 0.6 * centre));
  col += blue * pow(b, 4.0) * 0.06 * (1.0 - 0.5 * top);
  col += mint * pow(a * b, 3.0) * 0.07 * smoothstep(0.9, 0.1, uv.x);

  gl_FragColor = vec4(col, 1.0);
}`
