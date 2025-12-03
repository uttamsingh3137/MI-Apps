import React from "react";
import { Row, Col, Select, DatePicker, Button, Space, Drawer } from "antd";
import {
  PieChart,
  Pie,
  Cell,
  // Tooltip,
  Legend,
  type PieLabelRenderProps,
} from "recharts";
import styled from "styled-components";

//modal to drawer
//visible to only status -published
//success rate calculate krna h
//tooltip values ko inside chart show krna h

const { RangePicker } = DatePicker;

const FilterBar = styled(Space)`
  margin-bottom: 20px;
`;

const CardBox = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  margin-bottom: 12px;
`;

const StatsText = styled.div`
  margin-top: 10px;
  font-size: 15px;
`;

const StyledSelect = styled(Select)`
  width: 200px;
`;

const StyledButton = styled(Button)`
  min-width: 110px;
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

//rechart - customized label
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
        {payload?.value} ({((percent ?? 0) * 100).toFixed(0)}%)
      </tspan>
    </text>
  );
};

const ApiDashboardModal: React.FC<Props> = ({ open, onClose }) => {
  const allottedData = [
    { name: "Consumed", value: 40 },
    { name: "Remaining", value: 40 },
    { name: "Extra", value: 20 },
  ];

  const consumptionData = [
    { name: "Success", value: 80 },
    { name: "Failed", value: 20 },
  ];

  const COLORS1 = ["#3949AB", "#9CCC65", "#585d73"];
  const COLORS2 = ["#9CCC65", "#B71C1C"];

  // overall success rate alg alg calc hoga a
  const successRate_alloted = () => {
    const consumed =
      allottedData.find((x) => x.name === "Consumed")?.value || 0;
    const total = allottedData.reduce((sum, i) => sum + i.value, 0);

    if (total === 0) return 0;
    return ((consumed / total) * 100).toFixed(2);
  };

  const successRate_consumed = () => {
    const success =
      consumptionData.find((f) => f.name === "Success")?.value || 0;
    const failed = consumptionData.find((f) => f.name === "Failed")?.value || 0;

    if (success + failed === 0) return 0;

    return ((success / (success + failed)) * 100).toFixed(2);
  };

  return (
    <Drawer title="API Dashboard" open={open} size={1000} onClose={onClose}>
      <FilterBar wrap>
        <StyledSelect placeholder="Select Business">
          <Select.Option value="all">All</Select.Option>
        </StyledSelect>

        <StyledSelect placeholder="Select Module">
          <Select.Option value="all">All</Select.Option>
        </StyledSelect>

        <RangePicker />

        <StyledButton type="primary">Submit</StyledButton>
        <StyledButton>Download Logs</StyledButton>
        <StyledButton>View Usage</StyledButton>
      </FilterBar>

      <Row gutter={24}>
        <Col span={12}>
          <CardBox>
            <CardTitle>Allotted</CardTitle>

            <PieChart width={450} height={400}>
              <Pie
                data={allottedData}
                innerRadius={60}
                outerRadius={130}
                dataKey="value"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {allottedData.map((_, i) => (
                  <Cell key={i} fill={COLORS1[i]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>

            <StatsText>
              Overall Success Rate: <b>{successRate_alloted()}%</b>
            </StatsText>
          </CardBox>
        </Col>

        <Col span={12}>
          <CardBox>
            <CardTitle>Consumption</CardTitle>

            <PieChart width={450} height={400}>
              <Pie
                data={consumptionData}
                innerRadius={60}
                outerRadius={130}
                dataKey="value"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {consumptionData.map((_, i) => (
                  <Cell key={i} fill={COLORS2[i]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>

            <StatsText>
              Overall Success Rate: <b>{successRate_consumed()}%</b>
            </StatsText>
          </CardBox>
        </Col>
      </Row>
    </Drawer>
  );
};

export default ApiDashboardModal;
