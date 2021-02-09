import React, { useState, useEffect } from "react";
import Aside from "./normalizers/aside";
import ReziseBar from "./ReziseBar";
import ButtonIcon from "./ButtonIcon";
import Browse from "./svg/Browse";
import Home from "./svg/Home";
import Radio from "./svg/Radio";
import Plus from "./svg/Plus";
import { css } from "@emotion/css";
import Lead from "../components/normalizers/typography/lead";
import { palette } from "../theme/colors";
import useResize from "../hooks/useResize";

const style = css({
  position: "relative",
  paddingTop: "33px",
  "&>*": {
    margin: "35px 7px",
  },
  section: {
    "&>*": {
      margin: "12px 17px",
      padding: "2px 0",
    },
  },
  ".title": {
    alignSelf: "stretch",
  },
  ".aside-playlist": {
    position: "absolute",
    width: "100%",
    padding: 5,
    bottom: "0",
    borderTop: `solid 1px ${palette.backgroundMain}`,
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
  const [width, setWidth] = useResize(240);

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
    <Aside className={style} width={width}>
      <section>
        {mainNav.map((btn, i) => {
          const { title, Component } = btn;
          return (
            <ButtonIcon
              title={title}
              Icon={Component}
              setActive={handleActiveBtn}
              active={active[i].active}
              decorator={true}
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
      <section className="aside-playlist">
        <ButtonIcon title="New Playlist" Icon={Plus} variant="normal" />
      </section>
      <ReziseBar setWidth={setWidth} right />
    </Aside>
  );
};

export default AsideNavigator;
