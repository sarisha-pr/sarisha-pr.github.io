import React from "react";
import ButtonLink from "./components/ButtonLink";
import "../../assets/art-gallery/css/index.css";
import Heading from "./components/Heading";
import Body from "./components/Body";

const ArtGallery = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between gap-8">
          <div className="">
            <h1 className="pb-16">
              <Heading size="xl">Morbi in sem placerat </Heading>
            </h1>
            <h2 className="pb-16">
              <Heading size="l">Praesent dapibus neque id cursus</Heading>
            </h2>
            <h3 className="pb-16">
              <Heading size="m">Phasellus ultrices nulla quis nibh </Heading>
            </h3>
            <h4 className="pb-16">
              <Heading size="s">
                Nam nulla quam gravida non commodo a sodales sit
              </Heading>
            </h4>
          </div>

          <div className="">
            <Body size="m" className="pb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.
              <br />
              <br />
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis.
            </Body>
            <Body size="s">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.
            </Body>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-[16.25rem]">
            <ButtonLink href="#">OUR LOCATION</ButtonLink>
          </div>
          <div className="w-[16.25rem]">
            <ButtonLink href="#" isLeft={true}>
              BACK TO HOME
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtGallery;
