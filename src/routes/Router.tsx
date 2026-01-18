import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* DefaultLayout 적용 */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* DefaultLayout 미적용 */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
