import Image, { StaticImageData } from "next/image";

import choose_thumb_1 from "@/assets/img/update/bg/bg-gradient1-1.jpg";
import choose_thumb_2 from "@/assets/img/update/normal/why_1-1.png";

import icon_1 from "@/assets/img/update/icon/security-icon.svg";
import icon_2 from "@/assets/img/update/icon/community-icon.svg";
import icon_3 from "@/assets/img/update/icon/game-reward-icon.svg";
import icon_4 from "@/assets/img/update/icon/multiplayer-icon.svg";
import icon_5 from "@/assets/img/update/icon/social-icon.svg";
import icon_6 from "@/assets/img/update/icon/accessibility-icon.svg";
import icon_7 from "@/assets/img/update/icon/cross-platform-icon.svg";

interface DataType2 {
  id: number;
  icon: StaticImageData;
  title: string;
  price?: string;
  desc: string;
}
[];

const choose_data: DataType2[] = [
  {
    id: 1,
    icon: icon_1,
    title: "Secure & Fast Transactions",
    desc: "Leveraging blockchain for seamless in-game experiences.",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Community Empowerment",
    desc: "Meritocratic governance model for shaping the ecosystem.",
  },
  {
    id: 3,
    icon: icon_3,
    title: "In-Game Rewards",
    desc: "Earn rewards through engagement and participation.",
  },
  // {
  //   id: 4,
  //   icon: icon_5,
  //   title: "Integration with Social Platforms",
  //   desc: "Many social games are integrated with platforms like Facebook, Instagram, or Twitter, enabling users to invite friends, share achievements, and track leaderboards.",
  // },
  {
    id: 4,
    icon: icon_4,
    title: "Multiplayer Connectivity",
    desc: "Social games often allow players to compete or cooperate in real-time or asynchronously, fostering a sense of community and interaction.",
  },
  {
    id: 5,
    icon: icon_6,
    title: "Casual Accessibility",
    desc: "These games are often easy to pick up and play, designed for a broad audience, including those who may not consider themselves traditional gamers.",
  },
  {
    id: 6,
    icon: icon_7,
    title: "Cross-Platform Play",
    desc: "Many social games support multiple devices, allowing players on smartphones, tablets, or PCs to interact seamlessly.",
  },
];

const ChooseArea = () => {
  return (
    <div className="wcu-area-1 pt-130 pb-140 position-relative token-distribution" id="feature">
      <div className="bg-gradient-1">
        <Image src={choose_thumb_1} alt="img" />
      </div>
      <div className="container">
        <div className="mb-25">
          <div className="row gy-5">
            <div className="col-lg-7">
              <div className="section-title mb-0">
                <h2 className="title style2">Essential Features</h2>
                <p className="sec-text">
                  Empowering gaming communities with blockchain innovation{" "}
                  <br /> DUCAT is where play meets purpose.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="wcu-thumb text-center alltuchtopdown">
                <Image src={choose_thumb_2} alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-5 justify-content-between">
          {/* <div className="col-lg-12"> */}
          {choose_data.map((item) => (
            <div key={item.id} className="feature-card gx-5 col-lg-6">
              <div className="feature-card-icon">
                <Image src={item.icon} alt="img" />
              </div>
              <div className="feature-card-details">
                <h4 className="feature-card-title">{item.title}</h4>
                <p className="feature-card-text">{item.desc}</p>
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChooseArea;
