import React, { useContext, useState, type KeyboardEvent } from "react";
import { useTheme, IconButton, InputBase, Tooltip } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../../theme";

export interface TopbarProps {
    onToggleSidebar?: () => void;
    onSearch?: (query: string) => void;
}

const Topbar: React.FC<TopbarProps> = ({ onSearch }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && onSearch) {
            onSearch(searchQuery);
        }
    };

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: theme.spacing(2),
                gap: theme.spacing(2),
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: colors.primary[400],
                    borderRadius: theme.shape.borderRadius,
                    padding: "2px 8px",
                    minWidth: 200,
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchSubmit}
                />
                <Tooltip title="Search">
                    <IconButton type="button" aria-label="search" size="small">
                        <SearchIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <nav style={{ display: "flex", alignItems: "center", gap: theme.spacing(0.5) }}>
                <Tooltip title={theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}>
                    <IconButton onClick={colorMode.toggleColorMode} aria-label="toggle theme">
                        {theme.palette.mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                    </IconButton>
                </Tooltip>

                <Tooltip title="Notifications">
                    <IconButton aria-label="notifications">
                        <NotificationsOutlinedIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Settings">
                    <IconButton aria-label="settings">
                        <SettingsOutlinedIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Profile">
                    <IconButton aria-label="profile">
                        <PersonOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </nav>
        </header>
    );
};

export default Topbar;