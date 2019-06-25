import { render } from "react-dom";
import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import "./styles.css";

const slides = [
  {
    id: 0,
    url:
      "photo-1560452618-0e6a7fa64e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 1,
    url:
      "photo-1530984160542-fd03871bb747?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 2,
    url:
      "photo-1459111461138-7dc2df20e792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 3,
    url:
      "photo-1541294725825-94318746d378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
  }
];

const RenderImage = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });
  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 4), 2000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{
        ...props,
        backgroundImage: `url(https://images.unsplash.com/${
          item.url
        }&auto=format&fit=crop)`
      }}
    />
  ));
};

export default RenderImage;
