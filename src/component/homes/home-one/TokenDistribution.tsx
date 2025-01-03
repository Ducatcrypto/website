import Image, { StaticImageData } from "next/image";

import choose_thumb_1 from "@/assets/img/update/bg/bg-gradient1-1.jpg";
import choose_thumb_2 from "@/assets/img/update/normal/token_distribution.svg";

import icon_1 from "@/assets/img/update/icon/feature-icon1-1.svg";
import icon_2 from "@/assets/img/update/icon/feature-icon1-2.svg";
import icon_3 from "@/assets/img/update/icon/feature-icon1-3.svg";

interface DataType {
  id: number;
  title: string;
  price: string;
  skill: string;
  value: string;
  value_2: string;
}

interface DataType2 {
  id: number;
  icon: StaticImageData;
  title: string;
  price?: string;
  desc: string;
}

interface TokenCategory {
  id: number;
  category: string;
  description: string;
  percentage: string;
  reason: string;
}

const amount_data: DataType[] = [
  {
    id: 1,
    title: "Expected FOX price",
    price: "0.36 $",
    skill: "70%",
    value: "100",
    value_2: "100,000",
  },
  {
    id: 2,
    title: "Expected FOX price",
    price: "0.36 $",
    skill: "80%",
    value: "100",
    value_2: "100,000",
  },
  {
    id: 3,
    title: "Calculation time",
    price: "Q3 2020",
    skill: "40%",
    value: "100",
    value_2: "100,000",
  },
];

const choose_data: DataType2[] = [
  {
    id: 1,
    icon: icon_1,
    title: "The expected value of your investment",
    price: "180,000",
    desc: "ROI = 360 %",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Expected monthly dividend",
    desc: "3600 FOX = 1296 $",
  },
  {
    id: 3,
    icon: icon_3,
    title: "Masternode bonus",
    price: "180,000",
    desc: "ROI = 360 %",
  },
];

const token_categories: TokenCategory[] = [
  // {
  //   id: 1,
  //   category: "Private Sale",
  //   description:
  //     "Early funding stage to kickstart the project. Crucial for development and initial partnerships.",
  //   percentage: "0",
  //   reason: "Nobody gets unfair early access to the token",
  // },
  // {
  //   id: 2,
  //   category: "Airdrop",
  //   description: "Promotional tokens to drive adoption and rewards",
  //   percentage: "0",
  //   reason:
  //     "Nobody gets unfair access to the token. Even if they participate in promotions",
  // },
  {
    id: 3,
    category: "Liquidity",
    description: "Tokens added into liquidity on launch.",
    percentage: "15",
    reason: "Required so that the token is smoothly tradable",
  },
  {
    id: 4,
    category: "Emissions",
    description: "Tokens sold fairly to the market through the DAO",
    percentage: "85",
    reason: "Fair access given to everyone",
  },
  // {
  //   id: 5,
  //   category: "Treasury",
  //   description: "Treasury saved up by the protocol",
  //   percentage: "0",
  //   reason: "Team must build treasury by adding value to the community.",
  // },
  // {
  //   id: 6,
  //   category: "Advisors",
  //   description:
  //     "Allocation for the experts who guide the protocol's development and governance",
  //   percentage: "0",
  //   reason: "No unfair allocation based on experience",
  // },
  // {
  //   id: 7,
  //   category: "Team",
  //   description: "Tokens held by the team",
  //   percentage: "0",
  //   reason: "Team also does not get any free tokens",
  // },
];

const TokenDistribution = () => {
  return (
    <div className="wcu-area-1 pt-130 pb-140 position-relative token-distribution" id="feature">
      <div className="bg-gradient-1">
        <Image src={choose_thumb_1} alt="img" width={500} height={500} />
      </div>
      <div className="container">
        <div className="mb-25">
          <div className="row gy-5">
            <div className="col-lg-7">
              <div className="section-title mb-0">
                <h2 className="title style2">Token Distribution</h2>
                <p className="sec-text">
                  Token Pools and how they are distributed <br />
                  Advisors, team members, and the community all have equal
                  access to tokens, with the sole method of acquisition being
                  through purchasing them on the open market at a fair and
                  transparent price.
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
        {/* <div className="row gy-5 justify-content-between">
               <div className="col-lg-5">
                  <div className="wcu-amount-quantity">
                     <div className="amount">
                        <h5 className="title">Amount invested</h5>
                        <p className="price">50,000 $</p>
                     </div>
                     <div className="quantity">
                        <h5 className="title">Quantity Iko</h5>
                        <p className="price">500,000 Iko</p>
                     </div>
                  </div>
                  <ul className="wcu-price-progress-wrap">
                     {amount_data.map((item) => (
                        <li key={item.id}>
                           <h6 className="progress-wrap-title">{item.title}</h6>
                           <p className="progress-wrap-text">{item.price}</p>
                           <div className="skill-feature">
                              <div className="progress">
                                 <div className="progress-bar" style={{ width: item.skill }}>
                                 </div>
                              </div>
                              <div className="progress-value">
                                 <span>{item.value} $</span>
                                 <span>{item.value_2} $</span>
                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-lg-6">
                  {choose_data.map((item) => (
                     <div key={item.id} className="feature-card">
                        <div className="feature-card-icon">
                           <Image src={item.icon} alt="img" />
                        </div>
                        <div className="feature-card-details">
                           <h4 className="feature-card-title">{item.title}</h4>
                           {item.price && <p className="feature-card-text">{item.price} $</p>}
                           <p className="feature-card-text">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div> */}

        {/* New section for Token Categories in Table Format  for larger screens*/}
        <div className="mt-50">
          <table className="table-striped token-distribution-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Percentage</th>
                <th>Why?</th>
              </tr>
            </thead>
            <tbody>
              {token_categories.map((item) => (
                <tr key={item.id}>
                  <td className="sec-text">{item.category}</td>
                  <td className="sec-text">{item.description}</td>
                  <td className="sec-text">{item.percentage}%</td>
                  <td className="sec-text">{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="sec-text">
            Note: 0% Allocation for pre-sale, team and treasury to ensue a fair launch and distribution.
          </p>

        {/* </div> */}
        {/* mobile screen */}
        {/* <div className="mt-50"> */}
          <div className="token-distribution-grid-container">
            {token_categories.map((item) => (
              <div className="token-distribution-grid-item" key={item.id}>
                <div className="token-distribution-grid-row">
                  
                  <span className="token-distribution-grid-value">{item.category}</span>
                </div>
                <div className="token-distribution-grid-row">
                  {/* <span className="token-distribution-grid-label">Description:</span> */}
                  <span className="token-distribution-grid-label">{item.description}</span>
                </div>
                <div className="token-distribution-grid-row">
                  {/* <span className="token-distribution-grid-label">Why?</span> */}
                  <span className="token-distribution-grid-label">{item.reason}</span>
                </div>
                <div className="token-distribution-grid-row">
                  <span className="token-distribution-grid-label">Percentage:</span>
                  <span className="token-distribution-grid-value">{item.percentage}%</span>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDistribution;
