import type { PieLabelRenderProps } from "recharts";

const RADIAN = Math.PI / 180;
 const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  payload,
}: PieLabelRenderProps) => {
  if (!cx || !cy || !innerRadius || !outerRadius) return null;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-(midAngle ?? 1) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 1) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      <tspan x={x} dy="-4">
        {payload?.name}
      </tspan>
      <tspan x={x} dy="12">
        {/* {payload?.value}  */}
        {((percent ?? 0) * 100).toFixed(0)}%
      </tspan>
    </text>
  );
};

export default renderCustomizedLabel;