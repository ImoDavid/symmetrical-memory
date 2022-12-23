import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  styled,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { colors } from "../../styles/globals";
import { Headline } from "../typography";
import { LinearProgressBar } from "../commons";

const partners = [
  {
    img: "https://pchofficials.com/wp-content/uploads/2021/03/BOA.png",
  },
  {
    img: "https://pchofficials.com/wp-content/uploads/2021/03/facebook.png",
  },
  {
    img: "https://pchofficials.com/wp-content/uploads/2021/03/microsoft.png",
  },
];

const data = [
  {
    img: "https://res.cloudinary.com/doexbijh7/images/w_150,h_150,c_fill/f_webp,q_auto/v1616507487/Dave/Dave.jpg?_i=AA",
    name: "DAVE SAYER",
    position: "PCH PRIZE CLAIMING CORDINATOR",
  },
  {
    img: "https://res.cloudinary.com/doexbijh7/images/f_webp,q_auto/v1616507043/Danielle-Lam-1/Danielle-Lam-1.jpg?_i=AA",
    name: "DANIELLLE LAM",
    position: "PCH PRIZE PATROL ELITE MEMBER",
  },
  {
    img: "https://res.cloudinary.com/doexbijh7/image/upload/c_scale,w_183,h_273,dpr_0.8999999761581421/f_webp,q_auto/v1616507486/Todd-Sloane.jpg?_i=AA",
    name: "TODD SLOANE",
    position: "PCH PRIZE PATROL ELITE MEMBER",
  },
  {
    img: "https://res.cloudinary.com/doexbijh7/images/w_150,h_150,c_fill/f_webp,q_auto/v1616507486/Howie-Guja/Howie-Guja.jpg?_i=AA",
    name: "HOWIE GUJA",
    position: "PCH PRIZE PATROL ELITE MEMBER",
  },
];

const StyledOuterBox = styled(Box)({
  width: ["50%", "100%"],
  padding: ["0.7rem", "0rem"],
  marginRight: ["0rem", "2rem"],
});

const StyledInnerBox = styled(Box)({
  marginBottom: "1.9rem",
});

const StyledLabel = styled(Typography)({
  color: colors.BLACK,
  fontSize: ["1.6rem", "0.8rem"],
  fontWeight: ["900", "500"],
  textTransform: "uppercase",
});

const StyledSection = styled(Box)({
  background: `linear-gradient(
    rgba(0, 0, 0, 0.65), 
    rgba(0, 0, 0, 0.65)
  ),url(https://pchofficials.com/wp-content/uploads/2021/03/bermix-studio-isH9t36hwiM-unsplash-scaled.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundAttachment: ["scroll", "fixed"],
  backgroundRepeat: "no-repeat",
});

const GridContainer = styled(Box)({
  display: "grid",
  gridGap: "22px",
  placeItems: "center",
});

const StyledTitle = styled(Box)({
  textAlign: "center",
});

const StyledGridElements = styled(Box)({
  width: "100%",
});

const Investments = () => {
  return (
    <StyledSection minHeight={"80vh"}>
      <Box paddingTop={[10, 8]} paddingBottom={[8, 6]} bgcolor={colors.WHITE}>
        <Container maxWidth={"lg"}>
          <Headline title={"PCH INVESTMENT AREAS"} />
          <Box width={["100%", "60%"]} marginX={"auto"}>
            <Typography
              textAlign={"center"}
              lineHeight={2}
              color={colors.NAV_TEXT}
            >
              PCH continues to invest in innovative products and services that
              provide value to our consumers and partners. From digital
              entertainment to new marketing technologies, our platform is
              growing through acquisition, investments and strategic
              partnerships.
            </Typography>
          </Box>

          <Container maxWidth={"md"}>
            <Stack direction={["column", "row"]} paddingY={2} marginTop={3}>
              <StyledOuterBox>
                <StyledInnerBox>
                  <StyledLabel>DIGITAL ENTERTAINMENT</StyledLabel>
                  <LinearProgressBar value={85} />
                </StyledInnerBox>
                <StyledInnerBox>
                  <StyledLabel>MARKETING TECHNOLOGIES</StyledLabel>
                  <LinearProgressBar value={75} />
                </StyledInnerBox>
              </StyledOuterBox>
              <StyledOuterBox>
                <StyledInnerBox>
                  <StyledLabel>INNOVATIVE PRODUCTS</StyledLabel>
                  <LinearProgressBar value={90} />
                </StyledInnerBox>
                <StyledInnerBox>
                  <StyledLabel>SERVICES</StyledLabel>
                  <LinearProgressBar value={93} />
                </StyledInnerBox>
              </StyledOuterBox>
            </Stack>
          </Container>
        </Container>
      </Box>
      <Box paddingTop={[10, 8]} paddingBottom={[8, 6]}>
        <Container maxWidth={"lg"}>
          <Headline
            title={"PCH INVESTMENT AREAS"}
            textColor={colors.OFF_WHITE}
          />
          <Stack
            direction={["column", "row"]}
            width={["100%", "80%"]}
            marginTop={3}
            marginBottom={[2, 10]}
            marginX={"auto"}
          >
            {partners.map((ele) => (
              <Box
                key={ele.img}
                component={"img"}
                src={ele.img}
                width={"100%"}
                maxHeight={"3.5rem"}
                sx={{
                  objectFit: "contain",
                  marginRight: ["0rem", "1rem"],
                  marginBottom: ["1.5rem"],
                }}
              />
            ))}
          </Stack>
          <Headline title={"meet the team"} textColor={colors.OFF_WHITE} />
          <Box marginTop={[6, 5]} marginBottom={[6, 8]}>
            <Container maxWidth={"lg"}>
              <GridContainer
                gridTemplateColumns={[
                  "repeat(auto-fit, minmax(300px, 1fr))",
                  "repeat(4, minmax(200px, 1fr))",
                ]}
              >
                {data.map((ele) => (
                  <StyledGridElements key={ele.img}>
                    <Card
                      sx={{
                        maxWidth: ["400", "300"],
                        backgroundColor: `${colors.GREY}`,
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt=""
                        height="300"
                        image={ele.img}
                        sx={{
                          objectFit: ["contain","cover"],
                        }}
                      />
                      <CardContent>
                        <StyledTitle
                          marginBottom={"1rem"}
                          variant="h2"
                          component="div"
                          fontSize={"1rem"}
                          fontWeight={"500"}
                          textTransform={"uppercase"}
                          color={colors.WHITE}
                        >
                          {" "}
                          {ele.name}
                        </StyledTitle>
                        <StyledTitle
                          gutterBottom
                          variant="h2"
                          color={colors.PRIMARY}
                          fontSize={"0.8rem"}
                          fontWeight={"500"}
                        >
                          {" "}
                          {ele.position}
                        </StyledTitle>
                      </CardContent>
                    </Card>
                  </StyledGridElements>
                ))}
              </GridContainer>
            </Container>
          </Box>
        </Container>
      </Box>
    </StyledSection>
  );
};

export default Investments;
