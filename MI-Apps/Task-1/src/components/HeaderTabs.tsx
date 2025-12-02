import { Tabs, Button } from "antd";
import styled from "styled-components";

interface HeaderTabsProps {
  activeType: "sales" | "purchase";
  setActiveType: (val: "sales" | "purchase") => void;
  activeTab: string;
  setActiveTab: (val: string) => void;
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const HeaderTabs = ({
  activeType,
  setActiveType,
  activeTab,
  setActiveTab,
}: HeaderTabsProps) => {
  const tabItems = [
    { label: "Import Data", key: "import" },
    { label: "View Data", key: "view" },
    { label: "Download Data", key: "download" },
  ];

  return (
    <HeaderContainer>
      <Tabs
        activeKey={activeTab}
        items={tabItems}
        onChange={(key) => setActiveTab(key)}
      />

      <ButtonGroup>
        <Button
          type={activeType === "sales" ? "primary" : "default"}
          onClick={() => setActiveType("sales")}
        >
          Sales Data
        </Button>

        <Button
          type={activeType === "purchase" ? "primary" : "default"}
          onClick={() => setActiveType("purchase")}
        >
          Purchase Data
        </Button>
      </ButtonGroup>
    </HeaderContainer>
  );
};

export default HeaderTabs;
