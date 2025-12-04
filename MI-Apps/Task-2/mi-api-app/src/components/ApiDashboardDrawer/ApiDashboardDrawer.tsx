import React from "react";
import { Row, Col, Select, DatePicker, Drawer } from "antd";
import {
  PieChart,
  Pie,
  Cell,
  // Tooltip,
  Legend,
} from "recharts";
// import styled from "styled-components";
import { FilterBar , CardBox ,CardTitle , StatsText , StyledSelect , StyledButton} from "../../Styled/ApiDashboard.styled";
import renderCustomizedLabel from "./Customised Label/CustomisedLabel";
import type { Props } from "../../Constants/Interfaces/ApiDashboard.interface";

//modal to drawer
//visible to only status -published
//success rate calculate krna h
//tooltip values ko inside chart show krna h

const { RangePicker } = DatePicker;





//rechart - customized label


const ApiDashboardDrawer: React.FC<Props> = ({ open, onClose }) => {
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

export default ApiDashboardDrawer;
