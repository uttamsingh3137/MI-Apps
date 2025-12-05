import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
// import HomePage from "./pages/HomePage";
// import Dashboard from "./pages/Dashboard";
import appRoutes from "./config/menuConfig";
import "./App.css";

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

  <Route path="/" element={<Navigate to="/dashboard" replace />} />


  <Route path="/" element={<AppLayout />}>
    {appRoutes.map((r) => (
      <Route
        key={r.key}
        path={r.path.replace("/", "")}  // "dashboard", "home", etc
        element={r.element}
      />
    ))}

    <Route path="*" element={<div>Page not found</div>} />
  </Route>

</Routes>

  );
}

export default App;
