import React from "react";
import {
    Box,
    Button,
    IconButton,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {tokens} from "./theme.ts";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import {mockTransactions} from "./data/mockData.ts";
import Header from "./components/Header.tsx";
import GeographyChart from "./components/GeographyChart.tsx";
import StatBox from "./components/StatBox.tsx";
import ProgressCircle from "./components/ProgressCircle.tsx";
import LineChart from "./components/LineChart.tsx";
import BarChart from "./components/BarChart.tsx";

// Типизация для транзакций
interface Transaction {
    txId: string;
    user: string;
    date: string;
    cost: string | number;
}

const Dashboard = () => {
    const theme = useTheme();

    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{m: "20px"}}>
            <Box
                sx={{
                    display: smScreen ? "flex" : "block",
                    flexDirection: smScreen ? "row" : "column",
                    justifyContent: smScreen ? "space-between" : "start",
                    alignItems: smScreen ? "center" : "start",
                    m: "10px 0",
                }}
            >
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{mr: "10px"}}/>
                        Download Reports
                    </Button>
                </Box>
            </Box>

            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid size={{xs: 12, sm: 12, md: 6, lg: 3, xl: 3}}>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: colors.primary[400],
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            p: "10px",
                        }}
                    >
                        <StatBox
                            title="12,361"
                            subtitle="Emails Sent"
                            progress={0.75}
                            increase="+14%"
                            icon={
                                <EmailIcon
                                    sx={{color: colors.greenAccent[600], fontSize: "26px"}}
                                />
                            }
                        />
                    </Box>
                </Grid>

                <Grid size={{xs: 12, sm: 12, md: 6, lg: 3, xl: 3}}>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: colors.primary[400],
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            p: "10px",
                        }}
                    >
                        <StatBox
                            title="431,225"
                            subtitle="Sales Obtained"
                            progress={0.50}
                            increase="+21%"
                            icon={
                                <PointOfSaleIcon
                                    sx={{color: colors.greenAccent[600], fontSize: "26px"}}
                                />
                            }
                        />
                    </Box>
                </Grid>

                <Grid size={{xs: 12, sm: 12, md: 6, lg: 3, xl: 3}}>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: colors.primary[400],
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            p: "10px",
                        }}
                    >
                        <StatBox
                            title="32,441"
                            subtitle="New Clients"
                            progress={0.30}
                            increase="+5%"
                            icon={
                                <PersonAddIcon
                                    sx={{color: colors.greenAccent[600], fontSize: "26px"}}
                                />
                            }
                        />
                    </Box>
                </Grid>

                <Grid size={{xs: 12, sm: 12, md: 6, lg: 3, xl: 3}}>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: colors.primary[400],
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            p: "10px",
                        }}
                    >
                        <StatBox
                            title="1,325,134"
                            subtitle="Traffic Received"
                            progress={0.80}
                            increase="+43%"
                            icon={
                                <TrafficIcon
                                    sx={{color: colors.greenAccent[600], fontSize: "26px"}}
                                />
                            }
                        />
                    </Box>
                </Grid>

                <Grid size={{xs: 12, sm: 12, md: 8, lg: 8}}>
                    <Grid container spacing={2}>
                        <Grid size={{xs: 12}}>
                            <Box
                                sx={{
                                    backgroundColor: colors.primary[400],
                                    borderRadius: "8px",
                                    p: "10px",
                                }}
                            >
                                <Box
                                    sx={{
                                        mt: "25px",
                                        p: "0 30px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant="h5"
                                            sx={{ fontWeight: 600, color: colors.grey[100] }}
                                        >
                                            Revenue Generated
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{ fontWeight: 600, color: colors.greenAccent[500] }}
                                        >
                                            $58,373,698
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <IconButton>
                                            <DownloadOutlinedIcon
                                                sx={{fontSize: "26px", color: colors.greenAccent[500]}}
                                            />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Box sx={{height: "250px", m: "-20px 0 0 0"}}>
                                    <LineChart isDashboard={true}/>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{xs: 12, sm: 12, md: 6}}>
                            <Box
                                sx={{
                                    backgroundColor: colors.primary[400],
                                    p: "30px",
                                    borderRadius: "8px",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: 600, color: colors.grey[100] }}
                                >
                                    Campaign
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        mt: "25px",
                                    }}
                                >
                                    <ProgressCircle size={125}/>
                                    <Typography
                                        variant="h5"
                                        color={colors.greenAccent[500]}
                                        sx={{mt: "15px"}}
                                    >
                                        $48,352 revenue generated
                                    </Typography>
                                    <Typography color={colors.grey[100]}>
                                        Includes extra misc expenditures and costs
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{xs: 12, sm: 12, md: 6}}>
                            <Box
                                sx={{
                                    backgroundColor: colors.primary[400],
                                    borderRadius: "8px",
                                    p: "10px",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 600,
                                        color: colors.grey[100],
                                        padding: "30px 30px 0 30px",
                                    }}
                                >
                                    Sales Quantity
                                </Typography>
                                <Box sx={{height: "250px", mt: "-20px"}}>
                                    <BarChart isDashboard={true}/>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{xs: 12}}>
                            <Box
                                sx={{
                                    backgroundColor: colors.primary[400],
                                    padding: "30px",
                                    borderRadius: "8px",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 600,
                                        color: colors.grey[100],
                                        marginBottom: "15px",
                                    }}
                                >
                                    Geography Based Traffic
                                </Typography>
                                <Box sx={{height: "200px"}}>
                                    <GeographyChart isDashboard={true}/>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Recent Transactions */}
                    <Grid size={{xs: 12, sm: 12, md: 4, lg: 4}}>
                        <Box
                            sx={{
                                backgroundColor: colors.primary[400],
                                maxHeight: "100vh",
                                overflow: "auto",
                                m: "25px 0 0 0",
                                borderRadius: "8px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    borderBottom: `4px solid ${colors.primary[500]}`,
                                    color: colors.grey[100],
                                    p: "15px",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: 600, color: colors.grey[100] }}
                                >
                                    Recent Transactions
                                </Typography>
                            </Box>
                            {(mockTransactions as Transaction[]).map((transaction, i) => (
                                <Box
                                    key={`${transaction.txId}-${i}`}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        borderBottom: `4px solid ${colors.primary[500]}`,
                                        p: "15px",
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 600,
                                                color: colors.greenAccent[100],
                                            }}
                                        >
                                            {transaction.txId}
                                        </Typography>
                                        <Typography color={colors.grey[100]}>
                                            {transaction.user}
                                        </Typography>
                                    </Box>
                                    <Typography color={colors.grey[100]}>
                                        {transaction.date}
                                    </Typography>
                                    <Box
                                        sx={{
                                            color: colors.greenAccent[500],
                                            p: "5px 10px",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        ${transaction.cost}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )

};

export default Dashboard;