import styled from "styled-components";
import media from "styled-media-query";
import { AiOutlineClose } from "react-icons/ai";

interface ISidebarProps {
  showMenu: boolean;
}

export const Sidebar = styled.section<ISidebarProps>`
  width: 270px;
  ${media.lessThan("medium")`
		width: 100%;
	`}
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: red;
  transition: margin 0.4s linear;
  margin-left: ${(props) => (props.showMenu ? "-100%" : "0")};
`;

export const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 8px #00000099;
`;

export const ButtonClose = styled(AiOutlineClose)`
  display: block;
  width: 100%;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
`;
export const Menu = styled.nav`
  margin-top: 20px;
`;
