import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { RiImageCircleFill } from "react-icons/ri";
import type { DefaultTheme } from "styled-components/dist/types";
import { useAppTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/theme";

// Header height constant
const headerHeight = 3;

// Styled header component
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  padding: 0rem 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  height: ${headerHeight}rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

// Styled logo component
const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
`;

// Dropdown container for theme selection
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// Dropdown button styling
const DropdownButton = styled.button`
  border: none;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};

  &:hover {
    opacity: 0.8;
  }
`;

// Dropdown menu styling
const DropdownMenu = styled.ul<{ $open: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px ${({ theme }) => theme.borderColor};
  display: ${({ $open }) => ($open ? "block" : "none")};
  min-width: 150px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};

  li {
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background-color: #4a4a4a5d;
    }
  }
`;

// Body container for sidebar and main content
const BodyContainer = styled.div<{}>`
  display: flex;
`;

// Sidebar navigation styling
const SideBar = styled.ul<{}>`
  position: sticky;
  height: calc(100vh - ${headerHeight}rem);
  max-width: 10rem;
  min-width: 10rem;
  top: ${headerHeight}rem;
  z-index: 100;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0.4rem;
  ${({ theme }) =>
    theme.style === 2
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  li {
    list-style: none;

    a {
      display: block;
      padding: 0.75rem 1rem;
      text-decoration: none;
      color: ${({ theme }) => theme.color};
      font-weight: ${({ theme }) => theme.fontWeight};
      transition: background-color 0.2s ease, color 0.2s ease;
      background-color: ${({ theme }) => theme.backgroundColor};
      border-radius: 0.2rem;
      &:hover {
        opacity: 0.8;
        background-color: ${({ theme }) => theme.borderColor};
      }

      &.active {
        color: ${({ theme }) => theme.borderColor};
        font-weight: 700;
      }
    }
  }
`;

// Main content area styling
const Main = styled.main``;

// List of available themes for dropdown
const themeItems = [
  { name: "Light", theme: themes.light },
  { name: "dark", theme: themes.dark },
  { name: "red", theme: themes.red },
];

// Main layout component
const AppLayout: React.FC = () => {
  // State for dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Theme setter from context
  const { setAppTheme } = useAppTheme();

  // Handle theme selection from dropdown
  const handleClickThemeItem = (theme: DefaultTheme) => {
    setDropdownOpen(false);
    setAppTheme(theme);
  };

  // Render layout
  return (
    <>
      {/* Header with logo and theme dropdown */}
      <Header>
        <Logo>
          Theme Switcher <RiImageCircleFill />
        </Logo>

        <DropdownContainer>
          <DropdownButton onClick={() => setDropdownOpen((prev) => !prev)}>
            Choose Theme ▾
          </DropdownButton>

          <DropdownMenu $open={dropdownOpen}>
            {themeItems.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  handleClickThemeItem(item.theme);
                }}
              >
                {item.name}
              </li>
            ))}
          </DropdownMenu>
        </DropdownContainer>
      </Header>
      {/* Body with sidebar and main content */}
      <BodyContainer>
        <SideBar>
          <li>
            <Link to="/" onClick={() => {}}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => {}}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => {}}>
              Contact
            </Link>
          </li>
        </SideBar>
        <Main>
          <Outlet />
        </Main>
      </BodyContainer>
    </>
  );
};

export default AppLayout;
