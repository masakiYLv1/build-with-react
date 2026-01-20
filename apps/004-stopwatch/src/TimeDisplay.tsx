type Props = {
  hours: string;
  minutes: string;
  seconds: string;
  milliseconds: string;
};

export const TimeDisplay = ({
  hours,
  minutes,
  seconds,
  milliseconds,
}: Props) => {
  return (
    <div className="flex items-end justify-center gap-2 font-mono tabular-nums">
      <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
        {hours}
      </span>
      <span className="pb-2 text-2xl text-slate-300">:</span>
      <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
        {minutes}
      </span>
      <span className="pb-2 text-2xl text-slate-300">:</span>
      <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
        {seconds}
      </span>
      <span className="pb-2 text-2xl text-slate-300">.</span>
      <span className="pb-2 text-2xl text-slate-200 sm:text-3xl">
        {milliseconds}
      </span>
    </div>
  );
};
