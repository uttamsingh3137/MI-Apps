import { PieChart, Pie, Cell, Legend } from "recharts";
import renderCustomizedLabel from "../Customised Label/CustomisedLabel";
import {
  CardBox,
  CardTitle,
  StatsText,
} from "../../../Styled/ApiDashboard.styled";
import type { PieCardProps } from "../../../Constants/Interfaces/DashboardPieCard.interface";



const calculateSuccessRate = (
  data: {
    name: string;
    value: number;
  }[],
  successKey: string
) => {
  const success = data.find((d) => d.name === successKey)?.value || 0;
  const total = data.reduce((sum, d) => sum + d.value, 0);

  if (total === 0) return 0;
  return ((success / total) * 100).toFixed(2);
};

const DashboardPieCard: React.FC<PieCardProps> = ({
  title,
  data,
  colors,
  successKey,
}) => {
  return (
    <CardBox>
      <CardTitle>{title}</CardTitle>

      <PieChart width={350} height={380}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={130}
          dataKey="value"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={colors[i]} />
          ))}
        </Pie>

        <Legend
          formatter={(value, entry) => {
            const payload = entry?.payload;
            return `${value} : ${payload?.value} units`;
          }}
        />
      </PieChart>

      <StatsText>
        Overall Success Rate: <b>{calculateSuccessRate(data, successKey)}%</b>
      </StatsText>
    </CardBox>
  );
};

export default DashboardPieCard;
