import { Box, Chip, useTheme } from "@mui/material";
import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
} from "@mui/x-data-grid";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import { tokens } from "./theme";
import Header from "./Header.tsx";
import {mockDataTeam} from "./mockDataTeam.tsx";

type AccessLevel = "admin" | "manager" | "user";

interface TeamMember {
    id: number;
    name: string;
    age: number;
    phone: string;
    email: string;
    access: AccessLevel;
}

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef<TeamMember>[] = [
        {
            field: "id",
            headerName: "ID",
            width: 80,
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            minWidth: 180,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            width: 100,
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
            minWidth: 160,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1.3,
            minWidth: 220,
        },
        {
            field: "access",
            headerName: "Access Level",
            width: 170,
            sortable: false,
            renderCell: (
                params: GridRenderCellParams<TeamMember, AccessLevel>,
            ) => {
                const access = params.value;

                if (!access) {
                    return null;
                }

                const icon = {
                    admin: <AdminPanelSettingsOutlinedIcon fontSize="small" />,
                    manager: <SecurityOutlinedIcon fontSize="small" />,
                    user: <LockOpenOutlinedIcon fontSize="small" />,
                }[access];

                return (
                    <Chip
                        icon={icon}
                        label={access}
                        size="small"
                        sx={{
                            minWidth: 110,
                            height: 32,
                            justifyContent: "flex-start",

                            backgroundColor:
                                access === "admin"
                                    ? colors.greenAccent[600]
                                    : access === "manager"
                                        ? colors.blueAccent[600]
                                        : colors.greenAccent[800],

                            color: colors.grey[100],
                            fontWeight: 600,
                            textTransform: "capitalize",

                            "& .MuiChip-icon": {
                                color: "inherit",
                                ml: 1,
                            },

                            "& .MuiChip-label": {
                                px: 1.2,
                            },
                        }}
                    />
                );
            },
        },
    ];

    return (
        <Box
            sx={{
                p: {
                    xs: 2,
                    md: 3,
                },
            }}
        >
            <Header
                title="TEAM"
                subtitle="Manage your team members"
            />

            <Box
                sx={{
                    height: "75vh",
                    minHeight: 500,
                    overflow: "hidden",
                    borderRadius: 2,
                    backgroundColor: colors.primary[400],
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",

                    "& .MuiDataGrid-root": {
                        border: "none",
                    },

                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                        fontSize: 14,
                        fontWeight: 700,
                    },

                    "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
                        outline: "none",
                    },

                    "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-cell:focus-within":
                        {
                            outline: "none",
                        },

                    "& .MuiDataGrid-cell": {
                        borderBottom: `1px solid ${colors.grey[800]}`,
                        display: "flex",
                        alignItems: "center",
                    },

                    "& .MuiDataGrid-row": {
                        transition: "background-color 0.15s ease",

                        "&:hover": {
                            backgroundColor: colors.primary[500],
                        },
                    },

                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                        fontWeight: 600,
                    },

                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },

                    "& .MuiDataGrid-footerContainer": {
                        borderTop: `1px solid ${colors.grey[800]}`,
                        backgroundColor: colors.blueAccent[700],
                    },

                    "& .MuiTablePagination-root": {
                        color: colors.grey[100],
                    },

                    "& .MuiDataGrid-iconSeparator": {
                        color: colors.grey[500],
                    },

                    "& .MuiDataGrid-sortIcon": {
                        color: colors.grey[100],
                    },

                    "& .MuiDataGrid-menuIconButton": {
                        color: colors.grey[100],
                    },
                }}
            >
                <DataGrid<TeamMember>
                    rows={mockDataTeam as TeamMember[]}
                    columns={columns}
                    disableRowSelectionOnClick
                    pageSizeOptions={[10, 25, 50]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                                page: 0,
                            },
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Team;