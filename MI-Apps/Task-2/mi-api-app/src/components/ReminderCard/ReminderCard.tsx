import { Tag } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import type { ReminderItem } from "../../Constants/CalendarData/calender.interface";
import {
  CardWrapper,
  Description,
  Period,
  Subtitle,
  TagRow,
  Title,
  TitleRow,

} from "../../Styled/ReminderCard.styled";

export const ReminderCard = ({ item }: { item: ReminderItem }) => {
  return (
    <CardWrapper>
      <TitleRow>
        <CalendarOutlined style={{ fontSize: 14 }} />
        <Title>{item.title}</Title>
      </TitleRow>

      {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
      {item.description && <Description>{item.description}</Description>}

      {item.period && (
        <Period>
          Period – {item.period}
        </Period>
      )}

      <TagRow>
        {item.dueIn && <Tag color="blue">{item.dueIn}</Tag>}
        {item.priority && <Tag color="cyan">{item.priority}</Tag>}
      </TagRow>
    </CardWrapper>
  );
};
