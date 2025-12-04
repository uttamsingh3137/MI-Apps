import {
  DashboardOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";
import DashboardPage from "../pages/Dashboard";
import HomePage from "../pages/HomePage";
// import DataImportPage from "../pages/DataImport";
// import GstReturnPage from "../pages/GstReturn";
// import NoticesPage from "../pages/Notices";
// import SettingsPage from "../pages/Settings";

/**
 * Single source of truth for menu + routing.
 * - key: used for Menu selectedKey
 * - path: router path
 * - label: menu label
 * - icon: menu icon
 * - title: header title (optional — else falls back to label)
 * - element: React element for route rendering
 */
export const appRoutes = [
  {
    key: "home",
    path: "/",
    label: "Home",
    icon: null,
    title: "Home",
    element: <HomePage />,
  },
  {
    key: "dashboard",
    path: "/dashboard",
    label: "Dashboard",
    icon: <DashboardOutlined />,
    title: "Dashboard",
    element: <DashboardPage />,
  },
  {
    key: "data-import",
    path: "/data-import",
    label: "Data Import",
    icon: <DatabaseOutlined />,
    title: "Data Import",
    element: <div>Data Import</div>,
  },
  {
    key: "gst-return",
    path: "/gst-return",
    label: "GST Return",
    icon: <FileTextOutlined />,
    title: "GST Return",
    element: <div>GST Return</div>,
  },
  {
    key: "notices",
    path: "/notices",
    label: "Notices & Orders",
    icon: <BellOutlined />,
    title: "Notices & Orders",
    element: <div>Notices & Orders</div>,
  },
  {
    key: "settings",
    path: "/settings",
    label: "Configurations",
    icon: <SettingOutlined />,
    title: "Configurations",
    element: <div>Configurations</div>,
  },
];

export default appRoutes;
