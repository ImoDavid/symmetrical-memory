import React from "react";
import {
  Box,
  Container,
  styled,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { colors } from "../../styles/globals";

const GridContainer = styled(Box)({
  display: "grid",
  gridGap: "22px",
  placeItems: "center",
});
const StyledTitle = styled(Box)({
  fontSize: ["1rem", "1.2rem"],
  color: colors.ORANGE,
});
const StyledGridElements = styled(Box)({
  width: "100%",
});

const BeneficiaryGallery = ({ data, bgColor }) => {
  return (
    <Box marginTop={[6, 5]} marginBottom={[6, 8]}>
      <Container maxWidth={"lg"}>
        <GridContainer
          gridTemplateColumns={["repeat(auto-fit, minmax(300px, 1fr))","repeat(4, minmax(200px, 1fr))"]}
        >
          {data.map((ele) => (
            <StyledGridElements key={ele.img}>
              <Card
                sx={{
                  maxWidth: ["400", "300"],
                  backgroundColor: `${bgColor}`,
                }}
              >
                <CardMedia
                  component="img"
                  alt=""
                  height="300"
                  image={ele.img}
                />
                <CardContent>
                  <StyledTitle gutterBottom variant="h5" component="div">
                    {" "}
                    Name: {ele.name}
                  </StyledTitle>
                  <StyledTitle gutterBottom variant="h5" component="div">
                    {" "}
                    status: {ele.name}
                  </StyledTitle>
                  <StyledTitle gutterBottom variant="h5" component="div">
                    {" "}
                    Amount: {ele.name}
                  </StyledTitle>
                </CardContent>
              </Card>
            </StyledGridElements>
          ))}
        </GridContainer>
      </Container>
    </Box>
  );
};

export default BeneficiaryGallery;
