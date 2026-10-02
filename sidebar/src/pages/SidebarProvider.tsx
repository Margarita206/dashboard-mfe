import React, { useState, createContext, useContext, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface SidebarContextType {
    sidebarBackgroundColor: string | undefined;
    setSidebarBackgroundColor: (color: string | undefined) => void;
    sidebarImage: string | undefined;
    setSidebarImage: (image: string | undefined) => void;
    sidebarRTL: boolean;
    setSidebarRTL: (rtl: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface MyProSidebarProviderProps {
    children: ReactNode;
}

export const MyProSidebarProvider = ({
                                         children,
                                     }: MyProSidebarProviderProps) => {
    const [sidebarRTL, setSidebarRTL] = useState<boolean>(false);
    const [sidebarBackgroundColor, setSidebarBackgroundColor] =
        useState<string | undefined>(undefined);
    const [sidebarImage, setSidebarImage] =
        useState<string | undefined>(undefined);

    return (
        <SidebarContext.Provider
            value={{
                sidebarBackgroundColor,
                setSidebarBackgroundColor,
                sidebarImage,
                setSidebarImage,
                sidebarRTL,
                setSidebarRTL,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: sidebarRTL ? "row-reverse" : "row",
                }}
            >
                <div style={{ height: "100%", width: "100%" }}>
                    <main>
                        {children}
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarContext.Provider>
    );
};

export const useSidebarContext = (): SidebarContextType => {
    const context = useContext(SidebarContext);

    if (context === undefined) {
        throw new Error(
            "useSidebarContext must be used within a MyProSidebarProvider"
        );
    }

    return context;
};