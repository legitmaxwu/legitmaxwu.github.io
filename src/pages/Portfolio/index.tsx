import React from "react";
import Masonry from "react-masonry-css";
import { css } from "emotion";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { mediaQueries, fonts } from "../../shared/config";
import "./styles.css";
const settings = {
  LinkColor: "#0078ed",
};

const DesktopView = styled("div")`
  ${mediaQueries.mobile} {
    display: none;
  }
`;

const MobileView = styled("div")`
  ${mediaQueries.notMobile} {
    display: none;
  }
`;

const H1 = styled("h1")`
  font-weight: 600;
  margin: 0;
  font-family: ${fonts.landing.heading};
`;

const Title = styled("div")`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
  font-family: ${fonts.landing.heading};
  text-decoration: underline;
`;

const Header = styled("div")`
  padding-top: 60px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type PProps = {
  color?: string;
  fontSize?: string;
};
const P = styled("p")<PProps>`
  font-family: ${fonts.landing.body};
  font-weight: 400;
  margin: 0;
  color: ${(p: any) => p.color || "black"};
  font-size: ${(p: any) => p.fontSize || "auto"};
  ${mediaQueries.mobile} {
  }
`;

type SpacerProps = {
  y?: number;
};
const Spacer = styled.div<SpacerProps>`
  height: ${(p: any) => `${p.y}px`};
  width: 100%;
`;

type CardProps = {
  clickable?: boolean;
};
const Card = styled("div")<CardProps>`
  width: 400px;
  box-sizing: border-box;
  padding: 40px 30px;
  transition: 0.3s;
  /* box-shadow: 0.3px 0.3px 1px grey; */
  ${mediaQueries.mobile} {
    width: 100%;
  }
`;

function listify(arr: string[]) {
  return arr.join(", ");
}

const data = [
  {
    title: "Whitelist",
    blurb: "A minimalist productivity app.",
    tools: ["React.js", "Firebase"],
    description:
      "Managing tasks should be just that. This blazing-fast app helps you spend less time on checkboxing and more time executing.",
    media: [{ type: "image", value: "https://i.imgur.com/BMqgtc9.png" }],
    link: "https://tiny.cc/whitelist",
  },
  {
    title: "COVID-19 Stories",
    blurb: "An anonymous story sharing platform.",
    tools: ["React.js", "Mapbox", "Django"],
    description:
      "No matter what you're going through—you're not alone. Share your story or read others'. I led this project during my time as a Daily Bruin editor. It received a Pacemaker Award for COVID-19 reporting.",
    media: [
      {
        type: "image",
        value: "https://i.imgur.com/FGP7Rj4.jpg",
      },
    ],
    link: "https://covidstories.dailybruin.com/",
  },
  {
    title: "Data Consulting",
    blurb: "Better fundraising for nonprofits.",
    tools: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Mapbox"],
    link: "https://www.novaforgood.org/work/friends-of-semel",
    description:
      "I led 5 analysts to devise a fundraising strategy for Friends of the Semel Institute at UCLA, analyzing $17M in donations.",
    media: [
      {
        type: "image",
        value: "https://i.imgur.com/Yd1LwrO.png",
      },
    ],
  },
  {
    title: "VoxelCAD",
    blurb: "3D building made easy.",
    tools: ["Three.js, React.js"],
    description:
      "Anyone should be able to build 3D. Create smooth models using blocky voxels via marching cubes isosurfacing!",
    media: [{ type: "image", value: "https://i.imgur.com/CWvj13A.png" }],
    link: "https://tiny.cc/voxelCAD",
  },
  {
    title: "AnimalDraw",
    blurb: "Enhanced animal drawings!",
    tools: ["Pytorch", "Swift", "iOS"],
    description:
      "Use NVidia's GauGAN to transform your animal sketch into a more realistic version!",
    media: [
      {
        type: "image",
        value: "https://media2.giphy.com/media/GCuo8TFNve5BD30yOf/giphy.gif",
      },
    ],
  },
  {
    title: "OWC Turbine",
    blurb: "Ocean wave energy collection.",
    tools: ["AutoCAD", "3D printing", "plexiglass"],
    description:
      "A smarter check-valve system to collect energy from both the push AND pull of ocean waves.",
    media: [
      {
        type: "image",
        value: "https://i.imgur.com/Atk95Bh.png",
      },
    ],
    link: "https://tiny.cc/owc-turbine",
  },
  {
    title: "Paper Mâché Latias",
    tools: ["Mathematica", "chicken wire", "paper mâché"],
    description:
      "I built one of my favorite Pokémon and calculated its exact volume!",
    media: [{ type: "image", value: "https://i.imgur.com/3EUGS6b.png" }],
    link: "http://tiny.cc/latias",
  },
  {
    title: "Sorting Visualizer",
    tools: ["Java"],
    description: "Watch sorting happen and be happy.",
    media: [
      {
        type: "image",
        value:
          "https://raw.githubusercontent.com/legitmaxwu/SortingVisualizer/master/sorting-quick.gif",
      },
    ],
    link: "https://github.com/legitmaxwu/SortingVisualizer",
  },
];

const Img = styled.img`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
  /* filter: grayscale(45%) brightness(110%); */
`;

const UnstyledLink = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

const LinkStyle = styled("a")`
  color: ${settings.LinkColor};
  font-family: ${fonts.landing.body};
  font-weight: 400;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledSpan = styled.span`
  color: gray;
  font-style: italic;
`;

const PortfolioCard: React.FC<{ item: any }> = ({ item }) => {
  return (
    <Card clickable={item.link ? true : false}>
      <H1>{item.title}</H1>
      <P color="rgba(0, 0, 0, 0.7)">{item.blurb}</P>
      <Spacer y={12} />
      {item.link && (
        <React.Fragment>
          <LinkStyle href={item.link} target="_blank">
            Link
          </LinkStyle>
          <Spacer y={12} />
        </React.Fragment>
      )}

      {/* <P fontSize={"12px"}>{listify(item.tools)}</P> */}
      <P>
        {item.description} <StyledSpan>{listify(item.tools)}.</StyledSpan>
      </P>
      <Spacer y={24} />
      <div>
        {item.media.map((m: any, i: any) => {
          switch (m.type) {
            case "image":
              return <Img src={m.value} />;
          }
        })}
      </div>
    </Card>
  );
};

const PortfolioView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PortfolioPage: React.FC = () => {
  const cards = data.map((d: any, i: number) => <PortfolioCard item={d} />);
  return (
    <div
      className={css`
        width: 800px;
        box-sizing: border-box;
        margin: auto;
        ${mediaQueries.mobile} {
          width: 100%;
        }
        margin-bottom: 100px;
      `}
    >
      <Header>
        <Title>Max's Projects</Title>
        <Spacer y={10} />
        <P>Check out what I'm working on! </P>
        <Spacer y={6} />
        <P fontSize={"14px"}>
          <Link
            to="/"
            className={css`
              color: ${settings.LinkColor};
              text-decoration: none;
              font-weight: 400;
              &:hover {
                /* filter: brightness(140%); */
                text-decoration: underline;
              }
            `}
          >
            back to home
          </Link>
        </P>
      </Header>

      <PortfolioView>{cards}</PortfolioView>

      {/* <MobileView>
        <Masonry
          breakpointCols={1}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {cards}
        </Masonry>
      </MobileView>
      <DesktopView>
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {cards}
        </Masonry>
      </DesktopView> */}
    </div>
  );
};
