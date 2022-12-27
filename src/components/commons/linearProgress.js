import * as React from "react";
import { colors } from "../../styles/globals";
import { LinearProgress, Typography, Box } from "@mui/material/";

const LinearProgressBar = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }} color={props.color}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            height:"1rem",
             backgroundColor: `${colors.OFF_WHITE}`,
            "& .MuiLinearProgress-bar": {
              backgroundColor: `${colors.PRIMARY}`,
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color={props.color}>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default LinearProgressBar;
