import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
// import HomePage from "./pages/HomePage";
// import Dashboard from "./pages/Dashboard";
import appRoutes from "./config/menuConfig";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<AppLayout />}>
    //     <Route index element={<HomePage />} />
    //     <Route path="dashboard" element={<Dashboard />} />

    //     <Route path="data-import" element={<div>Data Import Page</div>} />
    //     <Route path="gst-return" element={<div>GST Return Page</div>} />
    //     <Route path="notices" element={<div>Notices Page</div>} />
    //     <Route path="settings" element={<div>Configurations Page</div>} />
    //   </Route>
    // </Routes>
    <Routes>
      <Route path="/" element={<AppLayout />}>

        {/* here updating sidebar and navbar both by using a seperate file menuConfig (appRoutes) , because first i was updating them diffrently. Now they are in sync - from side bar Link is working routing to page and headerbar's text is also updating   */}
        {appRoutes.map((r) => (
          <Route
           key={r.path} path={r.path === "/" ? "" : r.path.slice(1)} element={r.element}
          />
        ))}


        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
