import React from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh]">
        {isLoading ? <Loading /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
export default RootLayout;
