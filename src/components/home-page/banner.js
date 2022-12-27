import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { BsEnvelopeOpen } from "react-icons/bs";
import { colors } from "../../styles/globals";


const Banner = ({backgroundColor}) => {
    return ( 
        <Box width={"100%"} bgcolor={backgroundColor}>
        <Box width={"100%"} maxWidth={["90%", "60%"]} marginX={"auto"} py={2}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <BsEnvelopeOpen size={20} color={colors.WHITE} />
            <Typography
              ml={1}
              variant={"body1"}
              component={"span"}
              display={"inline-block"}
              fontWeight={500}
              color={colors.WHITE}
              fontSize={["1rem", "1.4rem"]}
              textAlign={"center"}
            >
              YOU STAND A CHANCE... Text only{" "}
              <Typography
                variant={"body1"}
                component={"em"}
                fontWeight={600}
                color={colors.ORANGE}
              >
                +1(813) 291-0211
              </Typography>
            </Typography>
          </Stack>
        </Box>
      </Box> 
     );
}
 
export default Banner;
