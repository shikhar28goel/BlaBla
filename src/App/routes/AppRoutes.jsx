import { Routes, Route, Navigate } from "react-router";
import Home from "../pages/Home";
import Header from "../pages/Header";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Header />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
