import React from "react";
import Section from "../components/Section";

import { logoIcons } from "../constants";

const MovingLogo = () => {
  return (
    <Section
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="w-full inline-flex flex-nowrap overflow-hidden"
    >
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logoIcons.map((item) => (
          <li>
            <a href={item.url}>
              <img
                src={item.src}
                key={item.id}
                alt={item.alt}
                width={120}
                height={60}
              />
            </a>
          </li>
        ))}
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logoIcons.map((item) => (
          <li>
            <a href={item.url}>
              <img
                src={item.src}
                key={item.id}
                alt={item.alt}
                width={120}
                height={60}
              />
            </a>
          </li>
        ))}
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logoIcons.map((item) => (
          <li>
            <a href={item.url}>
              <img
                src={item.src}
                key={item.id}
                alt={item.alt}
                width={120}
                height={60}
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default MovingLogo;
