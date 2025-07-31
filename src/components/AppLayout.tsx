import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { RiImageCircleFill } from "react-icons/ri";
import type { DefaultTheme } from "styled-components/dist/types";
import { useAppTheme } from "@/context/ThemeContext";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  padding: 0.5rem;
  background-color: ${({ theme }: any) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  border: none;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ theme }: any) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};

  &:hover {
    opacity: 0.8;
  }
`;

const DropdownMenu = styled.ul<{ $open: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: ${({ $open }) => ($open ? "block" : "none")};
  min-width: 150px;
  background-color: ${({ theme }: any) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};

  li {
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      /* background-color: #f3f4f6; */
    }
  }
`;

const Main = styled.main``;

const lightTheme: DefaultTheme = {
  style: 1,
  backgroundColor: "#ffffff",
  color: "#000000",
  fontWeight: "400",
  font: "'Inter', sans-serif",
};

const darkTheme: DefaultTheme = {
  style: 2,
  backgroundColor: "#121212",
  color: "#ffffff",
  fontWeight: "400",
  font: "'Inter', sans-serif",
};

const redTheme: DefaultTheme = {
  style: 3,
  backgroundColor: "#ff0000",
  color: "#ffffff",
  fontWeight: "400",
  font: "'Inter', sans-serif",
};

const themeItems = [
  { name: "Light", theme: lightTheme },
  { name: "dark", theme: darkTheme },
  { name: "red", theme: redTheme },
];

const AppLayout: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setAppTheme } = useAppTheme();
  const handleClickThemeItem = (theme: DefaultTheme) => {
    setDropdownOpen(false);
    setAppTheme(theme);
  };

  return (
    <>
      <Header>
        <Logo>
          Theme Switcher <RiImageCircleFill />
        </Logo>

        <DropdownContainer>
          <DropdownButton onClick={() => setDropdownOpen((prev) => !prev)}>
            Menu ▾
          </DropdownButton>

          <DropdownMenu $open={dropdownOpen}>
            {themeItems.map((item) => (
              <li
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

      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default AppLayout;
