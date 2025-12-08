import { Modal, Typography } from "antd";

import { format } from "date-fns";
import { CardBlock, DateText, Description, Period, PriorityTag, Status, Subtitle, TitleRow, Wrapper } from "../../Styled/EventDetailsModal.styled";
import type { Props } from "../../Constants/CalendarData/EventDetailsModal";

const { Title } = Typography;





export const EventDetailsModal: React.FC<Props> = ({
  open,
  onClose,
  event,
}) => {
  if (!event) return null;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={420}
      centered
      style={{ borderRadius: 10 }}
    >
      <Wrapper>


        <DateText>
          {event.date ? format(new Date(event.date), "EEEE, d MMMM yyyy") : ""}
        </DateText>

        <CardBlock>

          <TitleRow>
            <Title level={4} style={{ margin: 0, fontSize: 17 }}>
              {event.title}
            </Title>

            {event.priority && (
              <PriorityTag color="#1677ff">{event.priority}</PriorityTag>
            )}
          </TitleRow>

          {event.subtitle && <Subtitle>{event.subtitle}</Subtitle>}


          {event.description && <Description>{event.description}</Description>}


          {event.period && <Period>Period - {event.period}</Period>}


          {event.status && <Status>{event.status}</Status>}

        </CardBlock>
      </Wrapper>
    </Modal>
  );
};
