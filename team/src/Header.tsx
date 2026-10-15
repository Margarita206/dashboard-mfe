import {Box, useTheme} from "@mui/material";
import {tokens} from "./theme.ts";
import Typography from "@mui/material/Typography";

export const Header = ({title, subtitle}: { title: string, subtitle: string }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box>
            <Typography>
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
};
