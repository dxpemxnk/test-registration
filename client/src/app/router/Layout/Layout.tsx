
import { getAllUsers } from "@/entities/currentUser/model/curUserThunk";
import { refreshAccessToken } from "@/entities/user/model/userThunk";
import { useAppDispatch } from "@/shared/hooks/rtkHooks";
import { Nav, Footer } from "@/widgets";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(refreshAccessToken())
        dispatch(getAllUsers())
    }, [dispatch]);

    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

