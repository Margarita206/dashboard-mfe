import React from "react";
import {Typography, Box, useTheme} from "@mui/material";
import {tokens} from "../theme";

const Header = ({title, subtitle}: { title: string, subtitle: string }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{mb: "30px"}}>
            <Typography
                variant="h2"
                sx={{
                    color: colors.grey[100],
                    fontWeight: "bold",
                    mb: "5px",
                }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
