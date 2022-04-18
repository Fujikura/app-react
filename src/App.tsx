import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

import { GlobalStyles } from "./styles/GlobalStyles";
import * as S from "./styles";

function App() {
  const [hideMenu, setHideMenu] = useState(true);

  const hideSidebar = () => {
    setHideMenu(!hideMenu);
  };

  return (
    <BrowserRouter>
      <S.App>
        <GlobalStyles />
        <Sidebar showMenu={hideMenu} hideSidebar={hideSidebar} />
        <div>
          <Header handleShowMenu={hideSidebar} />
          <Content />
        </div>
      </S.App>
    </BrowserRouter>
  );
}

export default App;
