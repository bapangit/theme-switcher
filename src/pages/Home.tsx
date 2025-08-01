import { useAppTheme } from "@/context/ThemeContext";
import { getUserPosts, type Post } from "@/service/posts";
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const PageWrapper = styled.div`
  padding: 30px;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const cardAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

interface AnimatedBoxProps {
  $isanimating?: boolean;
}

const IntroText = styled.p<AnimatedBoxProps>`
  max-width: 700px;
  margin: 0 auto 30px;
  font-size: 16px;
  color: ${({ theme }) => theme.color};
  text-align: center;
  line-height: 1.6;
  opacity: 0;
  ${({ $isanimating }) =>
    $isanimating
      ? css`
          animation: ${slideIn} 2s ease-in-out forwards;
        `
      : css`
          opacity: 1;
        `}
`;

const GridContainer = styled.div<AnimatedBoxProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  transition: all 0.2s ease;

  opacity: 0;
  transform: translateX(-50px);

  ${({ $isanimating }) =>
    $isanimating
      ? css`
          animation: ${cardAnim} 1s ease-in-out forwards;
        `
      : css`
          opacity: 1;
          transform: translateX(0);
        `}

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{}>`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

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
    color: ${({ theme }) => theme.color};
    line-height: 1.5;
  }
`;

function Home() {
  const { appTheme } = useAppTheme();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimating(true);
    const task = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    return () => {
      clearTimeout(task);
    };
  }, [appTheme]);

  /* Fetch Posts */
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getUserPosts()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <PageWrapper>
      <IntroText $isanimating={isAnimating}>
        Welcome to our posts page. Here you can explore interesting topics
        shared by users. Each card below contains a short title and description
        for quick reading.
      </IntroText>
      <GridContainer $isanimating={isAnimating}>
        {posts.map((post) => (
          <Card key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </Card>
        ))}
      </GridContainer>
    </PageWrapper>
  );
}

export default Home;
