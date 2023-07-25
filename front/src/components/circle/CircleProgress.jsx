import './styles.css'

export default function CircleProgress({percentage}) {
    const circleSize = "160"
    const radius = 68
    const dashArray = radius * Math.PI * 2
    const dashOffset = dashArray - (dashArray * percentage) / 100

    return (
        <div className='mt-14 self-center'>
            <svg 
                width={circleSize}
                height={circleSize}
                viewBox={`0 0 ${circleSize} ${circleSize}`}
            >
                <circle 
                    className="circle-background"
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    strokeWidth="15px"
                    r={radius}
                />

                <circle 
                    className="circle-progress"
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    strokeWidth="15px"
                    r={radius}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }}
                    transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
                />
                <text x="50%" y="50%" dy="0.3em" textAnchor='middle' className='text-3xl font-semibold'>{percentage}%</text>
            </svg>
        </div>
    )
}