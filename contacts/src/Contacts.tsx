import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { tokens } from "./theme";
import Header from "./Header.tsx";
import {mockDataContacts} from "./mockDataContacts.tsx";

interface Contact {
    id: number;
    name: string;
    email: string;
    position: string;
    phone: string;
}

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef<Contact>[] = [
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
            field: "email",
            headerName: "Email",
            flex: 1.2,
            minWidth: 220,
        },
        {
            field: "position",
            headerName: "Position",
            flex: 1,
            minWidth: 160,
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
            minWidth: 170,
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
                title="CONTACTS"
                subtitle="Mocked Contacts Page"
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

                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },

                    "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
                        outline: "none",
                    },

                    "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-cell:focus-within":
                        {
                            outline: "none",
                        },

                    "& .MuiTablePagination-root": {
                        color: colors.grey[100],
                    },

                    "& .MuiDataGrid-sortIcon": {
                        color: colors.grey[100],
                    },

                    "& .MuiDataGrid-menuIconButton": {
                        color: colors.grey[100],
                    },
                }}
            >
                <DataGrid<Contact>
                    rows={mockDataContacts}
                    columns={columns}
                    disableRowSelectionOnClick
                    pageSizeOptions={[10, 25, 50]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                page: 0,
                                pageSize: 10,
                            },
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Contacts;