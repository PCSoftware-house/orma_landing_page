import { FRAG, VERT } from './liquidShader'

const SCALE = 0.4
const FRAME_MS = 1000 / 30

// Avvia lo shader sul canvas. Ritorna una funzione di stop, oppure null se WebGL non è
// disponibile. onFail viene chiamata se il contesto si perde o se il dispositivo è troppo lento.
// stop() non chiama loseContext(): in StrictMode lo stesso canvas viene riusato subito dopo.
export function startLiquid(canvas, onFail) {
  const gl = canvas.getContext('webgl', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'low-power',
  })
  if (!gl) return null

  const compile = (type, source) => {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null
  }
  const vs = compile(gl.VERTEX_SHADER, VERT)
  const fs = compile(gl.FRAGMENT_SHADER, FRAG)
  if (!vs || !fs) return null
  const program = gl.createProgram()
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null
  gl.useProgram(program)

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const aPos = gl.getAttribLocation(program, 'a_pos')
  gl.enableVertexAttribArray(aPos)
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(program, 'u_res')
  const uTime = gl.getUniformLocation(program, 'u_time')
  const uPointer = gl.getUniformLocation(program, 'u_pointer')

  const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }
  const startedAt = performance.now()
  let raf = 0
  let last = 0
  let frames = 0
  let slow = 0

  function resize() {
    const width = Math.max(1, Math.round(window.innerWidth * SCALE))
    const height = Math.max(1, Math.round(window.innerHeight * SCALE))
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
      gl.viewport(0, 0, width, height)
    }
    gl.uniform2f(uRes, width, height)
  }

  function stop() {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
    window.removeEventListener('pointermove', onPointer)
    document.removeEventListener('visibilitychange', onVisibility)
    canvas.removeEventListener('webglcontextlost', onLost)
  }

  function frame(now) {
    raf = requestAnimationFrame(frame)
    const delta = now - last
    if (last && delta < FRAME_MS - 2) return
    if (last) {
      frames += 1
      if (frames > 30 && frames <= 150 && delta > 50) slow += 1
      if (frames === 150 && slow > 36) {
        stop()
        onFail()
        return
      }
    }
    last = now
    pointer.x += (pointer.tx - pointer.x) * 0.04
    pointer.y += (pointer.ty - pointer.y) * 0.04
    gl.uniform1f(uTime, (now - startedAt) / 1000)
    gl.uniform2f(uPointer, pointer.x, pointer.y)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }

  function onPointer(event) {
    pointer.tx = event.clientX / window.innerWidth
    pointer.ty = 1 - event.clientY / window.innerHeight
  }

  function onVisibility() {
    cancelAnimationFrame(raf)
    if (document.hidden) return
    last = 0
    raf = requestAnimationFrame(frame)
  }

  function onLost(event) {
    event.preventDefault()
    stop()
    onFail()
  }

  window.addEventListener('resize', resize)
  window.addEventListener('pointermove', onPointer, { passive: true })
  document.addEventListener('visibilitychange', onVisibility)
  canvas.addEventListener('webglcontextlost', onLost)
  resize()
  raf = requestAnimationFrame(frame)
  return stop
}
