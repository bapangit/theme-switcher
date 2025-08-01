import styled, { keyframes } from "styled-components";

// Animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Wrapper
const AboutWrapper = styled.div`
  padding: 60px 20px;
  max-width: 1100px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

// Title
const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color};
  animation: ${fadeInUp} 0.8s ease forwards;
`;

// Subtitle
const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color};
  margin-bottom: 40px;
  animation: ${fadeInUp} 1s ease forwards;
`;

// Section Container
const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
`;

// Card
const Card = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Card Title
const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color};
`;

// Card Text
const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color};
`;

const About = () => {
  return (
    <AboutWrapper>
      <Title>About Us</Title>
      <Subtitle>
        We are passionate about building modern, user-friendly web applications
        that help businesses scale and deliver great user experiences.
      </Subtitle>

      <Section>
        <Card>
          <CardTitle>Our Mission</CardTitle>
          <CardText>
            To provide innovative and scalable solutions tailored to client
            needs, ensuring efficiency and growth.
          </CardText>
        </Card>

        <Card>
          <CardTitle>Our Vision</CardTitle>
          <CardText>
            Becoming a global leader in delivering high-quality, impactful web
            solutions.
          </CardText>
        </Card>

        <Card>
          <CardTitle>Our Values</CardTitle>
          <CardText>
            We believe in integrity, innovation, and customer satisfaction as
            the pillars of our success.
          </CardText>
        </Card>
      </Section>
    </AboutWrapper>
  );
};

export default About;
