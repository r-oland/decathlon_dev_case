// Components==============
import { VtmnNavbar } from '@vtmn/react';
import React from 'react';
// =========================

function Logo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/decathlon-logo.svg"
      alt="logo"
      style={{
        // TODO: Doesn't set width automatically as it does in the docs: https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/story/components-navigation-navbar--overview
        width: 160,
      }}
    />
  );
}

export default function NavBar() {
  return (
    <div className="vtmn-mb-6 vtmn-shadow-100">
      <VtmnNavbar logo={<Logo />} logoHref="/" aria-label="Simple navbar" />
    </div>
  );
}
