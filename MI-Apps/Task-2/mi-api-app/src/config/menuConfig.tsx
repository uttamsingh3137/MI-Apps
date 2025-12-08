import {
  DashboardOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";
import DashboardPage from "../pages/Dashboard";
import HomePage from "../pages/HomePage";
import { ComplianceCalendar } from "../components/ComplianceCalender/ComplianceCalender";

// import DataImportPage from "../pages/DataImport";
// import GstReturnPage from "../pages/GstReturn";
// import NoticesPage from "../pages/Notices";
// import SettingsPage from "../pages/Settings";


export const appRoutes = [

 {
  key: "home",
  path: "/home",
  label: "Home",
  element: <HomePage />
},
  {
  key: "dashboard",
  path: "/dashboard",
  label: "Dashboard",
  icon: <DashboardOutlined />,
  title: "Dashboard",
  element: <ComplianceCalendar/>
},
  {
    key: "data-import",
    path: "/data-import",
    label: "Data Import",
    icon: <DatabaseOutlined />,
    title: "Data Import",
    element: <DashboardPage />,
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
