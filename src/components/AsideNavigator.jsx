import React, { useState } from "react";
import { css } from "@emotion/css";
import Aside from "./normalizers/aside";
import ReziseBar from "./ReziseBar";
import ButtonIcon from "./ButtonIcon";
import Lead from "../components/normalizers/typography/lead";
import { asideNavigation as svgs } from "./svg/customs";
import { palette } from "../theme/colors";
import { flex } from "../helpers";

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
    ...flex("flex-start", "flex-start", "column"),
    position: "relative",
    padding: 5,
    justifyContent: "space-between",
    gridArea: "as1",
    background: palette.backgroundBody,
    transition: "ease-in-out 0.4s",
    opacity: show ? 1 : 0,
    transform: !show && "translate(-100%)",
    flex: 1,
    zIndex: 1000,
    "&>*": {
      ...flex("flex-start", "flex-start", "column"),
    },
    section: {
      "&>*": {
        margin: ".3em .5em",
      },
    },
  });
  const playListStyle = css({
    button: {
      marginTop: "100%",
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

      <section className={playListStyle}>
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
