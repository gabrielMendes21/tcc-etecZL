import './styles.css'

export default function CircleProgress({ ABSNumber, reference, unity }) {
  const percentage = Math.round((reference / ABSNumber) * 100)
  const circleSize = '160'
  const radius = 68
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * percentage) / 100

  return (
    <div>
      <svg
        width={circleSize}
        height={circleSize}
        viewBox={`0 0 ${circleSize} ${circleSize}`}
      >
        <circle
          className="circle-background fill-none stroke-[#DDD]"
          cx={circleSize / 2}
          cy={circleSize / 2}
          strokeWidth="15px"
          r={radius}
        />

        <circle
          className="circle-progress fill-none stroke-highlighted "
          cx={circleSize / 2}
          cy={circleSize / 2}
          strokeWidth="15px"
          r={radius}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
        />
        <text
          x="53%"
          y="48%"
          dy="0.3em"
          textAnchor="middle"
          className="text-3xl font-semibold"
        >
          {percentage}%
        </text>
        <text
          x="50%"
          y="65%"
          dy="0.3em"
          textAnchor="middle"
          className="text-xs"
        >
          {reference}/{ABSNumber} {unity}
        </text>
      </svg>
    </div>
  )
}
