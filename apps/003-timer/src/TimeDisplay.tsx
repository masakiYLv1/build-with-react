type TimeDisplayProps = {
  elapsedTime: number;
};

export const TimeDisplay = ({ elapsedTime }: TimeDisplayProps) => {
  return <div className="text-6xl font-bold">{elapsedTime}</div>;
};
