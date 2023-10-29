import React from "react";
import "../../assets/art-gallery/css/index.css";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Body from "./components/Body";
import ButtonLink from "./components/ButtonLink";
import imageHeroLg from "../../assets/art-gallery/images/desktop/image-hero.jpg";
import imageHeroMd from "../../assets/art-gallery/images/tablet/image-hero.jpg";
import imageHeroSm from "../../assets/art-gallery/images/mobile/image-hero@2x.jpg";
const ArtGallery = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative mb-[7.5rem] md:mb-[11.25rem]">
        <div className="flex md:absolute inset-0">
          <div className="basis-[31.25%] max-lg:hidden bg-artGallery-black"></div>
          <div className="basis-full md:basis-[57%] lg:basis-[37.5%] bg-white">
            <img
              src={imageHeroLg}
              alt="Hero image"
              className="max-lg:hidden w-full h-full object-cover"
            />

            <img
              src={imageHeroMd}
              alt="Hero image"
              className="max-md:hidden lg:hidden w-full h-full object-cover"
            />

            <img
              src={imageHeroSm}
              alt="Hero image"
              className="md:hidden w-full h-full object-cover"
            />
          </div>
        </div>

        <Container className="relative pt-8 md:py-36 lg:pt-48 lg:pb-80">
          <div className="flex max-lg:flex-col justify-between items-end lg:items-center max-lg:gap-12">
            <div className="md:max-w-[50%] lg:max-w-lg">
              <h1 className="lg:text-white lg:mix-blend-difference">
                <Heading size="xl">MODERN ART GALLERY</Heading>
              </h1>
            </div>
            <div className="md:max-w-[50%] lg:max-w-[21.875rem]">
              <Body size="m" className="pb-12 lg:pb-16">
                The arts in the collection of the Modern Art Gallery all started
                from a spark of inspiration. Will these pieces inspire you?
                Visit us and find out.
              </Body>
              <ButtonLink href="#" isLeft={false}>
                OUR LOCATION
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
      {/* End - Hero */}

      {/* Your day at the gallery */}
      <Container>
        <span>test</span>
      </Container>
      {/* End - Your day at the gallery */}
    </>
  );
};

export default ArtGallery;
