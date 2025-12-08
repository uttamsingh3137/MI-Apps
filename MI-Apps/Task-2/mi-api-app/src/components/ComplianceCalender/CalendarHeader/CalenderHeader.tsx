import { Button, Space, Typography } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ReloadOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { format } from "date-fns";
import { Wrapper } from "../../../Styled/EventDetailsModal.styled";
import { BottomRow, MonthCentered, TopRow } from "../../../Styled/CalenderHeader.styled";
import type { Props } from "../../../Constants/CalendarData/CalenderHeader";

const { Text } = Typography;







export const CalendarHeader: React.FC<Props> = ({
  month,
  onPrev,
  onNext,
  onRefresh,
}) => {
  return (
    <Wrapper>
      
      <TopRow>
        <Space>
          <CalendarOutlined style={{ fontSize: 17 }} />
          <Text strong style={{ fontSize: 16 }}>
            Compliance Calendar
          </Text>
        </Space>

        <Button icon={<ReloadOutlined />} onClick={onRefresh}>
          Refresh
        </Button>
      </TopRow>

      <BottomRow>

        <Button type="text" icon={<LeftOutlined />} onClick={onPrev} />


        <MonthCentered>{format(month, "MMMM yyyy")}</MonthCentered>


        <Button type="text" icon={<RightOutlined />} onClick={onNext} />
      </BottomRow>
    </Wrapper>
  );
};
