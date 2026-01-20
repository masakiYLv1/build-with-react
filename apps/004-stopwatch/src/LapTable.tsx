import type { Lap } from "./type";

type Props = {
  laps: Lap[];
  formatTimeText: (ms: number) => string;
};

export const LapTable = ({ laps, formatTimeText }: Props) => {
  return (
    <tbody className="divide-y divide-white/10">
      {laps.map((lap) => (
        <tr className="bg-white/7" key={lap.lap}>
          <td className="px-6 py-3 text-left text-slate-200">{lap.lap}</td>
          <td className="px-6 py-3 text-right font-mono tabular-nums text-slate-100">
            {formatTimeText(lap.lapTime)}
          </td>
          <td className="px-6 py-3 text-right font-mono tabular-nums text-slate-100">
            {formatTimeText(lap.totalTime)}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
