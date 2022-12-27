import React, { useState, useEffect } from "react";
import {Helmet} from "react-helmet";
import axios from "axios";

import {
  Box,
  Container,
  styled,
  Typography,
  Stack,
} from "@mui/material";
import {Tables} from "../../components/table";
const StyledBox = styled(Box)({
  background: `url(https://res.cloudinary.com/doexbijh7/images/v1635451723/images/images.webp?_i=AA)`,
  backgroundSize: "cover",
  backgroundPosition: "Top center",
});


const WinnersPage = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const GetWinners = async () => {
      const response = await axios.get(
        `https://raw.pchofficials.com/api/get-winners`
      );
      console.log(response.data);
      setWinners(response.data.winners);
    };
    GetWinners();
  }, []);
  return (
    <>
      <Helmet>
        <title>Winners | Pch Officials</title>
      </Helmet>
      <StyledBox height={["40vh", "55vh"]} />;
      <Box paddingY={5} my={5}>
        <Container maxWidth={"md"}>
          <Stack direction={"row"} p={2} color={"red"} mb={3}>
          <Typography mr> &#x2022;</Typography>    
          <Typography  fontWeight={700}> BENEFICIARY WINNER’S NAME DELIVERY STATUS</Typography>
          </Stack>
          <Tables rows={winners}/>
        </Container>
      </Box>
    </>
  );
};

export default WinnersPage;
