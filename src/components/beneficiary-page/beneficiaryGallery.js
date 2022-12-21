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
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridGap: "22px",
  placeItems: "center",
});
const StyledTitle = styled(Box)({
  fontSize: ["1rem", "1.2rem"],
  color:colors.ORANGE,
  
});
const StyledGridElements = styled(Box)({
  width: "100%",
});

const data = [
  {
    img: "https://images.unsplash.com/photo-1670995985756-0707f0d3b006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1665159465429-575f5e08eff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1669384056947-b6497936c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1670979313867-1ca5b1657b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1670974893112-f0b884b328d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1670995985756-0707f0d3b006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1665159465429-575f5e08eff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1669384056947-b6497936c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1670979313867-1ca5b1657b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1670974893112-f0b884b328d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
];

const BeneficiaryGallery = () => {
  return (
    <Box marginTop={[6, 5]} marginBottom={[6, 8]}>
      <Container maxWidth={"lg"}>
        <GridContainer>
          {data.map((ele) => (
            <StyledGridElements key={ele.img}>
              <Card sx={{ maxWidth: ["400", "300"] }}>
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
                    Amount:  {ele.name}
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
