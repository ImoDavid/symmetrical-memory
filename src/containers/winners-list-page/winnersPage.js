import React from "react";

import {
  Box,
  Container,
  styled,
  Typography,
  Stack,
} from "@mui/material";
import { colors } from "../../styles/globals";
import {Tables} from "../../components/table";
const StyledBox = styled(Box)({
  background: `url(https://res.cloudinary.com/doexbijh7/images/v1635451723/images/images.webp?_i=AA)`,
  backgroundSize: "cover",
  backgroundPosition: "Top center",
});
function createData( calories, fat, carbs, protein) {
  return { calories, fat, carbs, protein };
}

const rows = [
  createData( 1, "Akpan","pending", 24, 4.0),
  createData( 2, "Akpan", "pending", 4.3),
  createData( 3, "Akpan", "pending", 6.0),
  createData( 4, "Akpan", "pending", 4.3),
  createData( 5, "Akpan", "pending", 3.9),
];

const WinnersPage = () => {
  return (
    <>
      <StyledBox height={["40vh", "55vh"]} />;
      <Box paddingY={5} my={5}>
        <Container maxWidth={"md"}>
          <Stack direction={"row"} p={2} color={"red"} mb={3}>
          <Typography mr> &#x2022;</Typography>    
          <Typography  fontWeight={700}> BENEFICIARY WINNER’S NAME DELIVERY STATUS</Typography>
          </Stack>
          <Tables rows={rows}/>
        </Container>
      </Box>
    </>
  );
};

export default WinnersPage;
