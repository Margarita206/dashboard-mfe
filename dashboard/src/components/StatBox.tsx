import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
import { tokens } from "../theme";

export interface StatBoxProps {
    title: string;
    subtitle: string;
    progress: number;
    increase: string;
    icon: React.ReactNode;
}

const StatBox: React.FC<StatBoxProps> = ({
                                             title,
                                             subtitle,
                                             progress,
                                             increase,
                                             icon,
                                         }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            sx={{
                width: "100%",
                m: "0 30px",
                p: "12px 0",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    {icon}
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            color: colors.grey[100],
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "2px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: colors.greenAccent[500],
                    }}
                >
                    {subtitle}
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontStyle: "italic",
                        color: colors.greenAccent[600],
                    }}
                >
                    {increase}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatBox;