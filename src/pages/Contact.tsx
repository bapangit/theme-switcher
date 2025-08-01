import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Page Wrapper
const ContactWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

// Title
const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
  margin-bottom: 20px;
  animation: ${fadeIn} 0.6s ease forwards;
`;

// Subtitle
const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
  color: ${({ theme }) => theme.color};
  line-height: 1.6;
`;

// Content Layout
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Contact Info Section
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoCard = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const InfoTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color};
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
`;

// Contact Form
const Form = styled.form`
  background: ${({ theme }) => theme.backgroundColor};
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Input Fields
const Input = styled.input`
  padding: 12px 15px;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0077ff;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 15px;
  border-radius: 8px;
  font-size: 1rem;
  height: 120px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0077ff;
  }
`;

// Submit Button
const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: #0077ff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #005fcc;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message Sent!\n\nName: ${formData.name}\nEmail: ${formData.email}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ContactWrapper>
      <Title>Contact Us</Title>
      <Subtitle>
        Have questions or need help? Reach out to us via the form or contact
        details below. We’ll respond as soon as possible.
      </Subtitle>

      <Content>
        {/* Contact Info */}
        <Info>
          <InfoCard>
            <InfoTitle>Address</InfoTitle>
            <InfoText>123 Street, Bhubaneswar, Odisha, India</InfoText>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Email</InfoTitle>
            <InfoText>support@cdaccounting.com</InfoText>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Phone</InfoTitle>
            <InfoText>+91 98765 43210</InfoText>
          </InfoCard>
        </Info>

        {/* Contact Form */}
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send Message</Button>
        </Form>
      </Content>
    </ContactWrapper>
  );
};

export default Contact;
