import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import hero_thumb from "@/assets/img/update/hero/hero-1-1.jpg";
// import CountdownClock from "@/ui/CountDownClock"

import shape_1 from "@/assets/img/update/feature/feature-shape-2-1.png";
import shape_2 from "@/assets/img/update/feature/feature-shape-2-2.png";
import shape_3 from "@/assets/img/update/feature/feature-shape-2-3.png";
import feature_thumb_1 from "@/assets/img/update/feature/feature-card-thumb-1.png";
import feature_thumb_2 from "@/assets/img/update/feature/feature-card-thumb-2.png";
import feature_thumb_3 from "@/assets/img/update/feature/feature-card-thumb-3.png";
import utility from "@/assets/img/update/feature/utility.png";
interface DataType {
  id: number;
  title: string;
  thumb: StaticImageData;
  desc_1: string;
  desc_2?: string;
}
[];

const feature_data: DataType[] = [
  {
    id: 1,
    title: "Governance",
    thumb: feature_thumb_2,
    desc_1:
      "The DUCAT ecosystem promotes ownership through a meritocratic governance model, empowering participants to shape the community.",
  },
  {
    id: 2,
    title: "Equality",
    thumb: feature_thumb_3,
    desc_1:
      "DUCAT is built on the principles of equality and individual merit, exemplified by its commitment to a fair and transparent launch.",
  },
  {
    id: 3,
    title: "Utility",
    thumb: utility,
    desc_1:
      "DUCAT provides a robust infrastructure designed to empower social gaming providers, enabling them to elevate their offerings to the next level.",
  },
];

const Hero = () => {
  return (
    <div className="hero-wrapper hero-1">
      <div className="hero-bg-gradient"></div>
      <div className="ripple-shape">
        <span className="ripple-1"></span>
        <span className="ripple-2"></span>
        <span className="ripple-3"></span>
        <span className="ripple-4"></span>
        <span className="ripple-5"></span>
      </div>

      <div className="container">
        <div className="hero-style1">
          <div className="row flex-row-reverse">
            <div className="col-lg-3">
              <div className="hero-thumb alltuchtopdown">
                <Image src={hero_thumb} alt="img" />
              </div>
            </div>
            <div className="col-lg-9">
              <h3 className="hero-title">Welcome to DUCAT</h3>
              <h6 className="hero-sub-title-coloured">
                Revolutionizing Social Gaming with Blockchain Technology
              </h6>

              <div className="btn-wrap">
                <Link href="/contact" className="btn btn-two">
                  Explore the Ecosystem
                </Link>
                <Link
                  href="https://social-gaming-papers.gitbook.io/ducat/introduction/social-gaming/introduction"
                  className="btn btn-two"
                >
                  Read the Whitepaper
                </Link>
                <Link href="/blog" className="btn btn-two">
                  Join the Community
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-grid-wrap">
          <div className="feature-card-grid">
            <div className="feature-card-details">
              <h3 className="feature-card-title">The Ducat Ecosystem</h3>
              <p className="feature-card-text">
                Explore all aspects of our ecosystem and how we can achieve mass
                adoption.
              </p>
              <p className="feature-card-text">
                DUCAT is an ecosystem that drives the future of social gaming.
              </p>
              <p className="feature-card-text">
                By integrating blockchain technology, it enables secure, fast,
                and secure in-game experiences while rewarding users for their
                engagement.
              </p>
              <p className="feature-card-text">
                DUCAT fosters a vibrant social gaming community ecosystem where
                players and developers can collaborate, grow, and thrive in an
                ecosystem built for transparency and innovation.
              </p>
            </div>
            <div className="feature-card-img">
              <Image
                className="alltuchtopdown"
                src={feature_thumb_1}
                alt="img"
              />
            </div>
            <div className="feature-card-details">
              <p className="feature-card-info">
                The ecosystem is ever growing but these remain the fundamental
                values.
              </p>
            </div>
          </div>
          {feature_data.map((item) => (
            <div key={item.id} className="feature-card-grid">
              <div className="feature-card-details">
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-text">{item.desc_1}</p>
              </div>
              <div className="feature-card-img">
                <Image src={item.thumb} alt="img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
