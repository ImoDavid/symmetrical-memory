import React from "react";
import {Box, Card, CardContent, CardMedia, Container, styled, Typography,} from "@mui/material";
import {colors} from "../../styles/globals";

const GridContainer = styled(Box)({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(285px, 1fr))`,
    gridGap: '22px',
    alignItems: 'stretch',

    '@media screen and (max-width: 1200px)': {
        gridGap: '14px',
        gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`
    }
});
const StyledTitle = styled(Typography)({
    fontSize: ['12px', "14px"],
    color: colors.ORANGE,
});
const StyledGridElements = styled(Box)({
    width: "100%",
});

const BeneficiaryGallery = ({data, bgColor}) => {
    return (
        <Box marginTop={[6, 5]} marginBottom={[6, 8]}>
            <Container maxWidth={"xl"}>
                <GridContainer>
                    {data.map((ele) => (
                        <StyledGridElements key={ele.image}>
                            <Card
                                sx={{
                                    backgroundColor: `${bgColor}`,
                                    p: 1,
                                    borderRadius: "10px",
                                    border: "1px solid rgba(0, 0, 0, 0.1)",
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
                                    borderColor: `grey`,
                                }}
                                elevation={0}
                            >
                                <CardMedia
                                    component="img"
                                    alt=""
                                    height="240"
                                    image={'https://raw.pchofficials.com/' + ele.image}
                                    sx={{objectFit:  "cover"}}
                                />
                                <CardContent sx={{paddingX: 0}}>
                                    <StyledTitle gutterBottom variant="body1" fontSize={'16px'}
                                                 textTransform={'capitalize'}>
                                        Name: {ele.first_name} {ele.last_name}
                                    </StyledTitle>
                                    <StyledTitle gutterBottom variant="body1" fontSize={'16px'}
                                                 textTransform={'capitalize'}>
                                        status: {ele.status}
                                    </StyledTitle>
                                    <StyledTitle variant="body1" fontSize={'16px'} textTransform={'capitalize'}>
                                        Amount: ${ele.amount}
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
