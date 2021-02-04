import React, { useState } from "react";
import Aside from "./normalizers/aside";
import Highlighted from "./normalizers/typography/highlighted";
import ButtonIcon from "./ButtonIcon";
import Browse from "./svg/Browse";
import Home from "./svg/Home";
import Radio from "./svg/Radio";
import Plus from "./svg/Plus";
import { css } from "@emotion/css";
import Lead from "../components/normalizers/typography/lead";
import { palette } from "../theme/colors";
import { sizes } from "../theme/sizing";

const style = css({
  position: "relative",
  "&>*": {
    margin: "54px 7px",
  },
  section: {
    "&>*": {
      margin: "10px 7px",
    },
  },
  ".title": {
    alignSelf: "stretch",
  },
  div: {
    position: "absolute",
    bottom: 50,
    borderTop: `solid 1px ${palette.backgroundMain}`,
    width: "90%",
    paddingTop: "10px",
  },
});

const mainNav = [
  {
    title: "Home",
    Component: Home,
    active: true,
    /* dispatchComponent: Component */
  },
  {
    title: "Browse",
    Component: Browse,
    active: false,
  },
  {
    title: "Radio",
    Component: Radio,
    active: false,
  },
];

const AsideNavigator = (/*handleDispatch*/) => {
  const [active, setActive] = useState(mainNav);

  function handleActiveBtn(activeItem) {
    const newState = active.map((btn) => {
      if (btn.title === activeItem) {
        btn.active = true;
      } else {
        btn.active = false;
      }
      return btn;
    });
    setActive(newState);
  }

  return (
    <Aside className={style}>
      <Highlighted size={sizes.h1}>...</Highlighted>
      <section>
        {mainNav.map((btn, i) => {
          const { title, Component } = btn;
          return (
            <ButtonIcon
              title={title}
              Icon={Component}
              setActive={handleActiveBtn}
              active={active[i].active}
            />
          );
        })}
      </section>
      <section>
        <Lead className="title">your library</Lead>
        <ButtonIcon title="Made For You" />
        <ButtonIcon title="Recently Played" />
        <ButtonIcon title="Liked Songs" />
        <ButtonIcon title="Albums" />
        <ButtonIcon title="Artists" />
        <ButtonIcon title="Podcasts" />
      </section>
      <section>
        <Lead className="title">Playlists</Lead>
      </section>
      <div>
        <ButtonIcon title="New Playlist" Icon={Plus} variant="normal" />
      </div>
    </Aside>
  );
};

export default AsideNavigator;
