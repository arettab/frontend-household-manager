import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import MemberEventList from "./memberEventList";

const MemberDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const handleEventClick = () => navigate('/eventForm')

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              
            }}
            onClick={handleEventClick}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Create Event
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        // display="grid"
        // gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
         
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
    
                <MemberEventList />

          </Box>
        </Box>
        </Box>

    </Box>
  );
};

export default MemberDashboard;
