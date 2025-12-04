export interface HeaderTabsProps {
  activeType: "sales" | "purchase";
  setActiveType: (val: "sales" | "purchase") => void;
  activeTab: string;
  setActiveTab: (val: string) => void;
}