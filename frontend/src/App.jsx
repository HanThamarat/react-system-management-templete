import { Routes, Route } from "react-router-dom";
import ViewHomeComponent from "./pages/content-home/home";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./hooks/PrivateRoute";
import SigninView from "./pages/content-authenticate/signin";
import Personform from "./pages/content-authenticate/forms/personform";
import Agencyform from "./pages/content-authenticate/forms/agencyform";
import ViewDashboardComponent from "./pages/content-dashboard/content-main/dashboard";
import OrdersView from "./pages/content-dashboard/content-orders/view-orders";
import PackageViewComponent from "./pages/content-dashboard/content-package/package-view";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Route  */}
        <Route path="/" index element={<ViewHomeComponent />} />
        <Route path="/authenticate/:type" element={<SigninView />} />  

        {/* Private Route   */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<ViewDashboardComponent />} />
          <Route path="/authenticate/personform" element={<Personform />} />
          <Route path="/authenticate/agencyform" element={<Agencyform />} />
          <Route path="/home/orders-view" element={<OrdersView />} />
          <Route path="/home/pakage-menagement" element={<PackageViewComponent />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
export default App;