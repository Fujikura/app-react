import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

interface IDropdownProps {
  item: {
    label: string;
    path: string;
    icon?: React.ReactNode;
    subitems?: {
      label: string;
      path: string;
    }[];
  };
  hideSidebar: () => void;
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
  const [showDropdowItems, setShowDropdownItems] = useState(false);
  const { item, hideSidebar } = props;

  const handleShowDropdownItemsClick = () => {
    setShowDropdownItems(!showDropdowItems);
    if (!item.subitems) {
      hideSidebar();
    }
  };

  return (
    <S.Dropdown>
      <S.DropdownItem onClick={handleShowDropdownItemsClick}>
        {item.icon}
        <Link to={item.path}>{item.label}</Link>
      </S.DropdownItem>
      {showDropdowItems &&
        item.subitems &&
        item.subitems.map((item) => (
          <S.DropdownSubItem onClick={hideSidebar}>
            <Link to={item.path}>{item.label}</Link>
          </S.DropdownSubItem>
        ))}
    </S.Dropdown>
  );
};
export { Dropdown };
