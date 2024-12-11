import Image from "next/image";

import intro_thumb from "@/assets/img/update/normal/intro_1-1.png";

interface DataType {
  id: number;
  title: string;
  desc: JSX.Element;
}
[];

const intro_data: DataType[] = [
  {
    id: 1,
    title: "Our Mission",
    desc: (
      <>
        To drive the future of social gaming by integrating blockchain
        technology, creating an ecosystem where players and developers
        collaborate, grow, and thrive.
      </>
    ),
  },
  {
    id: 2,
    title: "Our Story",
    desc: (
      <>
        Founded on the principles of equality and individual merit, DUCAT
        emerged to revolutionize the gaming industry by addressing the need for
        secure, engaging, and rewarding platforms.
      </>
    ),
  },
];

const IntroArea = () => {
  return (
    <div className="pt-130 overflow-hidden bg-black2">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="section-title mb-45">
              <h2 className="title style2">About Us </h2>
              <p className="sec-text">
                True wealth in the world of virtual currencies
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xl-4">
            {intro_data.map((item) => (
              <div key={item.id} className="intro-wrap">
                <h6 className="intro-wrap-title">{item.title}</h6>
                <p className="intro-wrap-text">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="col-xl-6">
            <div className="intro-thumb1 alltuchtopdown">
              <Image src={intro_thumb} alt="img" />
            </div>
            <div className="intro-wrap mt-50">
              <h6 className="intro-wrap-title">Our Vision</h6>
              <p className="intro-wrap-text">
              A vibrant community empowered by transparency and innovation, redefining social gaming experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroArea;
