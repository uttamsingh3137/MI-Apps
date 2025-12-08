import { Typography } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { ReminderCard } from "../ReminderCard";
import type { Props } from "../../../Constants/CalendarData/ReminderList";
import {
  Header,
  ScrollArea,
  Wrapper,
} from "../../../Styled/ReminderList.styled";

const { Text } = Typography;

export const ReminderList: React.FC<Props> = ({ reminders }) => {
  return (
    <Wrapper>
      <Header>
        <CalendarOutlined style={{ fontSize: 16 }} />
        <Text strong style={{ fontSize: 16 }}>
          Upcoming Reminders
        </Text>
      </Header>

      <ScrollArea>
        {reminders.length === 0 ? (
          <Text type="secondary">No reminders for this month.</Text>
        ) : (
          reminders.map((item) => <ReminderCard key={item.id} item={item} />)
        )}
      </ScrollArea>
    </Wrapper>
  );
};
