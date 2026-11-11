export default function BackgroundGlow({ drift = false }) {
  return (
    <div className="absolute inset-0">
      <div
        className={`absolute -top-48 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(94,106,210,0.28),rgba(94,106,210,0.06)_58%,transparent_74%)] blur-2xl ${drift ? 'liquid-drift-a' : ''}`}
      />
      <div
        className={`absolute top-[42%] -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(62,224,162,0.07),transparent_70%)] blur-3xl ${drift ? 'liquid-drift-b' : ''}`}
      />
      <div
        className={`absolute top-[18%] -right-24 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(94,106,210,0.14),transparent_72%)] blur-3xl ${drift ? 'liquid-drift-c' : ''}`}
      />
    </div>
  )
}
