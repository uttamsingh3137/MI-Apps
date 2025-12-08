import Sidebar from "./SideBar";
import HeaderBar from "./HeaderBar";
import { Outlet } from "react-router-dom";
import {
  FullLayout,
  MainLayout,
  StyledContent,
} from "../Styled/AppLayout.styled";
// import { ComplianceCalendar } from "../components/ComplianceCalender/ComplianceCalender";

const AppLayout = () => {
  return (
    <FullLayout>
      <Sidebar />
      <MainLayout>
        <HeaderBar />
        <StyledContent>
          <Outlet />
        </StyledContent>

      </MainLayout>
    </FullLayout>
  );
};

export default AppLayout;
