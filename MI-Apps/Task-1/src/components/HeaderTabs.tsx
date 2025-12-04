import { Tabs, Button } from "antd";
import { ButtonGroup, HeaderContainer } from "../Styled/HeaderTabs.styled";
import type { HeaderTabsProps } from "../Constants/Interface/HeaderTabs.interface";





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
