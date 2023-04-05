import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Heading } from '@chakra-ui/react';

export const ChakraHeadingOne = (props) => {
  return (
    <Heading
      as="h1"
      size="2xl"
      color="white"
      marginBottom="10px"
      marginTop="10px"
    >
      {props.children}
    </Heading>
  );
};

export const ChakraSubHeaderCentered = (props) => {
  return (
    <Heading
      as="h2"
      size="1xl"
      color="white"
      marginBottom="10px"
      marginTop="10px"
      textAlign="center"
    >
      {props.children}
    </Heading>
  );
};

function App() {
  const size = useWindowSize();

  useEffect(() => {
    console.log(process.env.PUBLIC_URL + '/assets/landscape_four.png');
    console.log(process.env.PUBLIC_URL + '/assets/roshan_1_crop.png');
  });

  return (
    <Wrapper>
      {/* <Navigation>
        <NavLink href="#about">About</NavLink>
        <b> | </b>
        <NavLink href="#music">Music</NavLink>
        <b> | </b>
        <NavLink href="#shows">Shows</NavLink>
        <b> | </b>
        <NavLink href="#contact">Contact</NavLink>
      </Navigation> */}
      <SectionComponent width={size.width}>
        <LogoContainer>
          <Logo
            src={process.env.PUBLIC_URL + '/assets/HFMW LOGO TAN.png'}
            alt="Heavy Feather and the Magic Word"
          />
        </LogoContainer>
        <AboutText>
          Heavy Feather and the Magic Word (HFMW) is a band with a wide musical
          palette, refusing to be defined by one constant sound. Pulling
          snippets from previous decades and genres, the band’s music is a mix
          of early 2000s post-punk revival, 70’s hard rock, and psychedelic
          music of the 60’s while furthering the boundaries of current musical
          landscape.{' '}
        </AboutText>
        <AboutText>
          HFMW has delivered electrifying performances at notable New York
          venues including Baby's All Right, Mercury Lounge, Union Pool, the
          Broadway, Our Wicked Lady and Trans Pecos. The songs are carried by
          interwoven counterpoint guitar and keyboards, with gritty vocals and
          dynamic drums. The current lineup solidified during the summer of
          2021, with Chris Kendrick on guitar and lead vocals, Ben Gordon on
          bass, Zach Saffo on guitar and Jun Yang Ng on drums.
        </AboutText>
        <FullWidthImage
          src={process.env.PUBLIC_URL + '/assets/landscape_four.PNG'}
        />
      </SectionComponent>

      <SectionComponent width={size.width}>
        <ChakraHeadingOne>Music</ChakraHeadingOne>
        <AboutText>
          The second single, ‘Jungle Cat’, comments on the commercialization and
          deforestation of natural habitats spearheaded by wealthy human
          interference and greed. The aggressive delivery of instrumentation and
          singing evokes this predatory human behavior, while hinting that these
          actions will bite them back in due time. This is a brief journey into
          the psychedelic atmosphere that exists throughout the band’s catalog.
        </AboutText>
        <SingleLink
          href="https://share.amuse.io/track/heavy-feather-and-the-magic-word-jungle-cat"
          target="_blank"
        >
          <ChakraSubHeaderCentered>
            Listen to Jungle Cat on Streaming Platforms
          </ChakraSubHeaderCentered>
          <LogoContainer>
            <AlbumCover src="assets/covers/JUNGLE CAT (3000x3000).png" />
          </LogoContainer>
        </SingleLink>
        <IframeContainer>
          <ChakraSubHeaderCentered>
            Jungle Cat Music Video
          </ChakraSubHeaderCentered>
          <Iframe
            src="https://www.youtube.com/embed/b1Y9brMPvF8"
            class="video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
        </IframeContainer>
        <AboutText>
          The band’s first single, “Love in Limbo”, can initially be perceived
          as a cut and dried love song. Beyond the surface, the lyrics portray
          the disunity people experience through tumultuous election cycles, the
          lack of face to face interactions, and the struggle for forgiveness to
          others and oneself. Being one of their most delicate and lighthearted
          songs, it displays only the beginning of the band’s vast range of
          songwriting to be heard on their debut album.
        </AboutText>
        <SingleLink
          href="https://share.amuse.io/track/heavy-feather-and-the-magic-word-love-in-limbo"
          target="_blank"
        >
          <ChakraSubHeaderCentered>
            Listen to "Love in Limbo" on Streaming Platforms
          </ChakraSubHeaderCentered>
          <LogoContainer>
            <AlbumCover src="assets/covers/love_in_limbo.jpg" />
          </LogoContainer>
        </SingleLink>
        <IframeContainer>
          <ChakraSubHeaderCentered>
            Love in Limbo Music Video
          </ChakraSubHeaderCentered>
          <Iframe
            src="https://www.youtube.com/embed/44ks9GmbTa4"
            class="video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
        </IframeContainer>
        <IframeContainer>
          <ChakraSubHeaderCentered>
            Love in Limbo Behind the Scenes
          </ChakraSubHeaderCentered>
          <Iframe
            src="https://www.youtube.com/embed/5cc7PG0IIA0"
            class="video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
        </IframeContainer>
      </SectionComponent>

      <SectionComponent width={size.width}>
        <ChakraHeadingOne>Past Shows</ChakraHeadingOne>
        <IframeContainer>
          <ChakraSubHeaderCentered>
            Squeak Live from Union Pool
          </ChakraSubHeaderCentered>
          <Iframe
            src="https://www.youtube.com/embed/boiUA2InwTQ"
            class="video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
        </IframeContainer>
        <IframeContainer>
          <ChakraSubHeaderCentered>
            Fluctuate Live from Berlin Under A
          </ChakraSubHeaderCentered>
          <Iframe
            src="https://www.youtube.com/embed/Vo1StQd96ZU"
            class="video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
        </IframeContainer>
      </SectionComponent>

      {/* <SectionComponent width={size.width}>
        <ChakraHeadingOne>Future Shows</ChakraHeadingOne>
        <ShowLink
          href="https://www.eventbrite.com/e/the-down-and-outs-heavy-feather-and-the-magic-word-tight-lipsugly-mutts-tickets-288335889407?ref=eios"
          target="_blank"
        >
          <ChakraSubHeaderCentered>
            March 25th, 2022 at The Broadway
          </ChakraSubHeaderCentered>
          <FullWidthImage
            src={process.env.PUBLIC_URL + '/assets/shows/march25_broadway.jpeg'}
          />
        </ShowLink>
      </SectionComponent> */}

      <SectionComponent width={size.width}>
        <ChakraHeadingOne>Contact</ChakraHeadingOne>
        <ChakraSubHeaderCentered>
          Email us at{' '}
          <Link
            href="mailto:heavyfeatherandthemagicword@gmail.com"
            target="_noblank"
          >
            heavyfeatherandthemagicword@gmail.com
          </Link>
          <PaddingDiv />
        </ChakraSubHeaderCentered>
        <SocialContainer>
          <Link
            href="https://www.instagram.com/heavyfeathermagicword/"
            target="_noblank"
          >
            <SocialIcon
              src={process.env.PUBLIC_URL + 'assets/social/insta.png'}
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@heavyfeathermagicword"
            target="_noblank"
          >
            <SocialIcon
              src={process.env.PUBLIC_URL + 'assets/social/tiktok.png'}
            />
          </Link>
          <Link
            href="https://facebook.com/HeavyFeatherandtheMagicWord/"
            target="_noblank"
          >
            <SocialIcon
              src={process.env.PUBLIC_URL + 'assets/social/facebook.webp'}
            />
          </Link>
        </SocialContainer>
      </SectionComponent>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 0 auto;
`;

export const SectionComponent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: ${({ width }) => (width > 900 ? `50%` : `90%`)};
  margin-left: ${({ width }) => (width > 900 ? `25%` : `5%`)};
  margin-right: ${({ width }) => (width > 900 ? `25%` : `5%`)};
  margin-bottom: 40px;
`;

export const FullWidthImage = styled.img`
  width: 100%;
`;

export const AboutText = styled.p`
  color: white;
  margin-bottom: 20px;
`;

export const HeaderTwo = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

export const Navigation = styled.nav`
  color: white;
`;

export const NavLink = styled.a`
  color: white;
`;

export const Link = styled.a`
  color: white;
`;

export const Iframe = styled.iframe`
  width: 100%;
  min-height: 50%;
  aspect-ratio: 16/9;
`;

export const SocialIcon = styled.img`
  height: 75px;
  margin-right: 25px;
  margin-left: 25px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JungleCatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100px;
`;

export const Logo = styled.img`
  padding-top: 10px;
`;

export const AlbumCover = styled.img`
  height: auto;
  min-width: 300px;
  overflow-y: hidden;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 70px;
  justify-content: center;
  align-items: center;
`;

export const ShowLink = styled.a`
  color: white;
  margin-top: 20px;
  border: solid #ffffff 4px;
  border-radius: 12px;
  padding: 16px;
`;

export const SingleLink = styled.a`
  color: white;
  margin-bottom: 20px;
  border: solid #ffffff 4px;
  border-radius: 12px;
  padding: 16px;
  height: auto;
`;

export const IframeContainer = styled.div`
  color: white;
  margin-top: 20px;
  border: solid #ffffff 4px;
  border-radius: 12px;
  padding: 16px;
`;

export const PaddingDiv = styled.div`
  padding-bottom: 25px;
`;

export default App;

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
