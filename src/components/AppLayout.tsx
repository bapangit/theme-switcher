import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { RiImageCircleFill } from "react-icons/ri";
import type { DefaultTheme } from "styled-components/dist/types";
import { useAppTheme } from "@/context/ThemeContext";
import { themes } from "@/utils/theme";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
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
      background-color: #4a4a4a5d;
    }
  }
`;

const Main = styled.main``;

const themeItems = [
  { name: "Light", theme: themes.light },
  { name: "dark", theme: themes.dark },
  { name: "red", theme: themes.red },
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
            Choose Theme ▾
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
