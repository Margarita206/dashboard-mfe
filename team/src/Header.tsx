import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";

interface HeaderProps {
    title: string;
    subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            <Typography
                variant="h2"
                sx={{
                    color: colors.grey[100],
                    fontWeight: 700,
                }}
            >
                {title}
            </Typography>

            {subtitle && (
                <Typography
                    variant="h5"
                    sx={{
                        color: colors.greenAccent[400],
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
};

export default Header;