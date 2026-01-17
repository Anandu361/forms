import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateForm from "../pages/form/CreateForm";
import FormBuilder from "../pages/form/FormBuilder";
import FormResponses from "../pages/form/FormResponses";
import FormSettings from "../pages/form/FormSettings";
import NotFound from "../pages/NotFound";
import AppLayout from "../components/layout/AppLayout";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          <AppLayout>
            <Dashboard />
          </AppLayout>
        }
      />

      <Route
        path="/forms/new"
        element={
          <AppLayout>
            <CreateForm />
          </AppLayout>
        }
      />

      <Route
        path="/forms/:id/edit"
        element={
            <FormBuilder />
        }
      />

      <Route
        path="/forms/:id/responses"
        element={
            <FormResponses />
        }
      />

      <Route
        path="/forms/:id/settings"
        element={
            <FormSettings />
        }
      />


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
