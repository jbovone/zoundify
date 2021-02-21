import React, { useState } from "react";
import { css } from "@emotion/css";
import Aside from "./normalizers/aside";
import ReziseBar from "./ReziseBar";
import ButtonIcon from "./ButtonIcon";
import Lead from "../components/normalizers/typography/lead";
import { asideNavigation as svgs } from "./svg/customs";
import { palette } from "../theme/colors";

const { Browse, Home, Plus, Radio } = svgs;
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

const AsideNavigator = ({ show = true, setWidth }) => {
  const style = css({
    position: "relative",
    gridArea: "as1",
    background: palette.backgroundBody,
    transition: "ease-in-out 0.4s",
    opacity: show ? 1 : 0,
    transform: !show && "translate(-100%)",
    zIndex: 1000,
    "&>*": {
      margin: "35px 7px",
    },
    section: {
      "&>*": {
        margin: "12px 17px",
        padding: "2px 0",
      },
    },
    ".playlist-btn": {
      position: "absolute",
      bottom: 0,
      padding: "12px 20px",
      borderTop: `solid 1px ${palette.backgroundMain}`,
    },
  });

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
      <section>
        {mainNav.map((btn, i) => {
          const { title, Component } = btn;
          return (
            <ButtonIcon
              key={`aside-nav-${i}`}
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
        {[
          "Made For You",
          "Recently Played",
          "Liked Songs",
          "Albums",
          "Artists",
          "Podcasts",
        ].map((item) => (
          <ButtonIcon key={item} title={item} />
        ))}
      </section>

      <section>
        <Lead className="title">Playlists</Lead>
        <ButtonIcon
          className="playlist-btn"
          title="New Playlist"
          Icon={Plus}
          variant="normal"
        />
      </section>

      <ReziseBar setWidth={setWidth} right />
    </Aside>
  );
};

export default AsideNavigator;
