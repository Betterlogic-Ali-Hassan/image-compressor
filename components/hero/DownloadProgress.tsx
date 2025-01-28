"use client";

interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
}

export function CircularProgress({
  progress,
  size = 44,
  strokeWidth = 4,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className='relative inline-flex items-center justify-center'>
      <svg className='transform -rotate-90' width={size} height={size}>
        {/* Background circle */}
        <circle
          className='text-[#ddd] dark:text-gray-700 '
          strokeWidth={strokeWidth}
          stroke='currentColor'
          fill='none'
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          className='text-black dark:text-white transition-all duration-300 ease-in-out'
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          stroke='currentColor'
          fill='none'
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <span className='absolute text-xs font-medium flex items-center justify-center left-[50%] right-[50%]'>
        {Math.round(progress)}%
      </span>
    </div>
  );
}
