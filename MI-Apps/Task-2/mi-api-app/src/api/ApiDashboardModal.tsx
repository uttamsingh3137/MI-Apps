import React from "react";
import { Modal, Row, Col, Select, DatePicker, Button, Space } from "antd";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import styled from "styled-components";

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



const ApiDashboardModal: React.FC<Props> = ({ open, onClose }) => {
  const allottedData = [
    { name: "Consumed", value: 45 },
    { name: "Remaining", value: 55 },
  ];

  const consumptionData = [
    { name: "Success", value: 33 },
    { name: "Failed", value: 12 },
  ];

  const COLORS1 = ["#3949AB", "#9CCC65"];
  const COLORS2 = ["#9CCC65", "#B71C1C"];

  return (
    <Modal
      title="API Dashboard"
      open={open}
      width={1000}
      onCancel={onClose}
      footer={null}
    >

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

            <PieChart width={350} height={300}>
              <Pie data={allottedData} innerRadius={70} outerRadius={110} dataKey="value">
                {allottedData.map((_, i) => (
                  <Cell key={i} fill={COLORS1[i]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>

            <StatsText>
              Overall Success Rate: <b>45%</b>
            </StatsText>
          </CardBox>
        </Col>


        <Col span={12}>
          <CardBox>
            <CardTitle>Consumption</CardTitle>

            <PieChart width={350} height={300}>
              <Pie
                data={consumptionData}
                innerRadius={70}
                outerRadius={110}
                dataKey="value"
              >
                {consumptionData.map((_, i) => (
                  <Cell key={i} fill={COLORS2[i]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>

            <StatsText>
              Overall Success Rate: <b>33%</b>
            </StatsText>
          </CardBox>
        </Col>
      </Row>
    </Modal>
  );
};

export default ApiDashboardModal;
