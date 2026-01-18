// src/layouts/DefaultLayout.tsx
import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";  // 같은 폴더의 TopHeader import

export default function DefaultLayout() {
  return (
    <>
      <TopHeader />
      
      <main>
        <Outlet />
      </main>
      
    </>
  );
}