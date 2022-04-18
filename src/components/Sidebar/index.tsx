import React from "react";
import { SidebarData } from "./SidebarData";
import * as S from "./styles";

import { Dropdown } from "../../components/Dropdown";

type ISidebarProps = {
  showMenu: boolean;
  hideSidebar: () => void;
};

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const { showMenu, hideSidebar } = props;
  return (
    <S.Sidebar showMenu={showMenu}>
      <S.Header>
        <S.ButtonClose onClick={hideSidebar} />
      </S.Header>
      <S.Menu>
        {SidebarData.map((item, index) => (
          <Dropdown 
		  	item={item}
			key={index}
			hideSidebar={hideSidebar} />
        ))}
      </S.Menu>
    </S.Sidebar>
  );
};
export { Sidebar };
