import React from "react";
import { Row, Col, Drawer } from "antd";
import type { Props } from "../../Constants/Interfaces/ApiDashboard.interface";
import DashboardPieCard from "./PieCard/DashboardPieCard";

//modal to drawer
//visible to only status -published
//success rate calculate krna h
//tooltip values ko inside chart show krna h

// const { RangePicker } = DatePicker;

//rechart - customized label

const ApiDashboardDrawer: React.FC<Props> = ({ open, onClose }) => {
  const allottedData = [
    { name: "Consumed", value: 60 },
    { name: "Remaining", value: 40 },
    { name: "Extra", value: 20 },
  ];

  const consumptionData = [
    { name: "Success", value: 80 },
    { name: "Failed", value: 20 },
  ];

  const COLORS1 = ["#3949AB", "#9CCC65", "#585d73"];
  const COLORS2 = ["#9CCC65", "#B71C1C"];

  return (
    <Drawer title="API Dashboard" open={open} size={1000} onClose={onClose}>
      {/* <FilterBar wrap>
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
      </FilterBar> */}

      <Row gutter={24}>
        <Col span={12}>
          <DashboardPieCard
            title="Allotted"
            data={allottedData}
            colors={COLORS1}
            successKey="Consumed"
          />
        </Col>

        <Col span={12}>
          <DashboardPieCard
            title="Consumption"
            data={consumptionData}
            colors={COLORS2}
            successKey="Success"
          />
        </Col>
      </Row>
    </Drawer>
  );
};

export default ApiDashboardDrawer;
