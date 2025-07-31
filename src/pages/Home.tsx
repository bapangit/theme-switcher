import { useAppTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const data = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
];

const PageWrapper = styled.div`
  padding: 30px;
  font-family: "Inter", sans-serif;
  background-color: #f9fafb;
  color: #333;
  background-color: ${({ theme }: any) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const cardAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const IntroText = styled.p`
  max-width: 700px;
  margin: 0 auto 30px;
  font-size: 16px;
  color: #555;
  text-align: center;
  line-height: 1.6;
  ${({ isAnimating }) =>
    isAnimating &&
    css`
      animation: ${cardAnim} 2s ease-in-out forwards;
    `}
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  ${({ isAnimating }) =>
    isAnimating &&
    css`
      animation: ${slideIn} 2s ease-in-out forwards; /* Repeat infinitely */
    `}
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #393939;
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
`;

function Home() {
  const { appTheme } = useAppTheme();

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const task = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    return () => {
      clearTimeout(task);
    };
  }, [appTheme]);
  return (
    <PageWrapper>
      <IntroText isAnimating={isAnimating}>
        Welcome to our posts page. Here you can explore interesting topics
        shared by users. Each card below contains a short title and description
        for quick reading.
      </IntroText>
      <GridContainer isAnimating={isAnimating}>
        {data.map((item) => (
          <Card key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Card>
        ))}
      </GridContainer>
    </PageWrapper>
  );
}

export default Home;
