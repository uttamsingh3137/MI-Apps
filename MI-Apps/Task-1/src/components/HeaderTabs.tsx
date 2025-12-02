import { Tabs, Button } from "antd";

const HeaderTabs = ({
  activeType,
  setActiveType,
  activeTab,
  setActiveTab,
}: {
  activeType: "sales" | "purchase";
  setActiveType: (val: "sales" | "purchase") => void;
  activeTab: string;
  setActiveTab: (val: string) => void;
}) => {
  const tabItems = [
    { label: "Import Data", key: "import" },
    { label: "View Data", key: "view" },
    { label: "Download Data", key: "download" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <Tabs
        activeKey={activeTab}
        items={tabItems}
        onChange={(key) => setActiveTab(key)}
      />

      <div style={{ display: "flex", gap: 8 }}>
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
      </div>
    </div>
  );
};

export default HeaderTabs;
