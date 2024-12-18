import FooterOne from "@/layouts/footers/FooterOne"
import Brand from "./Brand"
import ChooseArea from "./ChooseArea"
import EventArea from "./EventArea"
import FaqArea from "./FaqArea"
import Hero from "./Hero"
import IntroArea from "./IntroArea"
import InvestArea from "./InvestArea"
import PartnerArea from "./PartnerArea"
import Team from "./Team"
import RoadMap from "./RoadMap"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TokenDistribution from "./TokenDistribution"

const HomeOne = () => {
  return (
    <div className="home-purple-gradient">
      <HeaderOne />
      <Hero />
      {/* <Brand /> */}
      <ChooseArea />
      <TokenDistribution/>
      <IntroArea />
      <RoadMap />
      {/* <InvestArea /> */}
      {/* <Team /> */}
      {/* <PartnerArea /> */}
      {/* <EventArea /> */}
      <FaqArea />
      <FooterOne />
    </div>
  )
}

export default HomeOne
