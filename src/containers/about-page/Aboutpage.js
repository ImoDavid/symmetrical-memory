import React from 'react';
import { Box, Container, styled, Typography } from '@mui/material';
import { colors } from '../../styles/globals';

const StyledBox = styled(Box)({
  background: `url(https://pchofficials.com/wp-content/uploads/2021/03/macau-photo-agency-NhhhRZQxnFY-unsplash-scaled.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
});

const StyledText = styled(Typography)({
  fontSize: ['0.5rem', '1rem'],
  lineHeight: 1.8,
  color: colors.NAV_TEXT,
  marginBottom: '2rem',
  '&:last-child': {
    marginBottom: 0,
  },
});

const AboutPage = () => {
  return (
    <>
      <StyledBox height={['40vh', '55vh']} />;
      <Container maxWidth={'lg'}>
        <Box paddingY={9} paddingX={[2,0]}>
          <StyledText>
            Publishers Clearing House is a leading direct-to-consumer company
            offering a unique blend of curated multi-channel shopping and
            free-to-play, chance to win digital entertainment across a network
            of web and app-based entertainment properties.
          </StyledText>
          <StyledText>
            Our continued success in today’s new digital publishing environment
            is built on PCH’s unique, free-to-play, chance-to-win value
            proposition, which enables individually personalized offers based on
            the trusted first party relationship we maintain with millions of
            consumers and is fueled by the excitement of the Publishers Clearing
            House brand. Sources of revenue for the company are digital
            advertising, search advertising and the sale of merchandise and
            magazines offered with free credit and 100% satisfaction guaranteed.
          </StyledText>
          <StyledText>
            Data and analytics have been at the core of the PCH business
            strategy for more than 60 years. With a strong foundation of
            consumer loyalty and direct relationships, PCH has evolved into a
            multi-channel media company that combines digital entertainment,
            commerce and direct-to-consumer marketing, creating an attractive
            destination for consumers, marketers, and retailers alike.
          </StyledText>
          <StyledText>
            Through its PCH/Media division, consumer brands and advertising
            agencies can build direct-to-consumer relationships with efficient
            and accurate custom ad solutions that generate substantial numbers
            of qualified and responsive leads in a fun-filled, relevant, and
            brand-safe environment on pch.com and its related network of free
            play and win sites.
          </StyledText>
          <StyledText>
            Founded in 1953 by Harold and LuEsther Mertz, PCH has come to be
            known as the sweepstakes company whose famous Prize Patrol surprises
            winners on their doorsteps with oversized checks in amounts anywhere
            from $1,000.00 to Multi-Millions while TV cameras are rolling. These
            memorable, real-life reactions of stunned winners have entertained
            audiences all across America and spawned a number of good-natured
            skits on such TV shows as Saturday Night Live and The Tonight Show.
            The Publishers Clearing House Prize Patrol has even made special
            prize award appearances on the popular TV game shows: The Price Is
            Right, Let’s Make A Deal and Family Feud.
          </StyledText>
          <StyledText>
            With over 550 full-time employees, over 40% of PCH’s profits go to
            trusts for the benefit of charities that support the arts, human
            rights, the environment, medical research and services and other
            worthy causes. In 2011, Publishers Clearing House introduced The
            Giveback, an annual Facebook charity event in which fans help to
            spread the word about charities that are meaningful to them. To
            date, over $900,000 has been given away to such national charities
            as the ASPCA®, Susan G. Komen For The Cure® and St. Jude Children’s
            Research Hospital.
          </StyledText>
          <StyledText>
            PCH continues to invest in innovative products and services that
            provide value to our consumers and partners. From digital
            entertainment to new marketing technologies, our platform is growing
            through acquisition, investments and strategic partnerships
          </StyledText>
         </Box>
      </Container>
    </>
  );
};

export default AboutPage;
