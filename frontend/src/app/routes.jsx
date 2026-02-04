import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard/Dashboard";
import FormBuilder from "../pages/form/FormBuilder";
import FormResponses from "../pages/form/FormResponses";
import FormSettings from "../pages/form/FormSettings";
import FormEditorContainer from "../pages/form/FormEditorContainer";
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

      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Form Editor Routes */}
      <Route path="/forms/:id" element={<FormEditorContainer />}>
        <Route path="edit" element={<FormBuilder />} />
        <Route path="responses" element={<FormResponses />} />
        <Route path="settings" element={<FormSettings />} />
        {/* Redirect /forms/:id to /forms/:id/edit */}
        <Route index element={<Navigate to="edit" replace />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
