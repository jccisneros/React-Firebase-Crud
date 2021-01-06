import { Global, css } from "@emotion/react";

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:ital,wght@0,500;1,700&display=swap");

        html {
          font-size: 62.5%;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
          padding: 0;
          margin: 0;
        }

        body {
          font-size: 1, 6rem;
          line-height: 1.5;
          font-family: "Open Sans", sans-serif;
          overflow-x: hidden;
        }

        h1,
        h2,
        h3 {
          margin: 0, 0, 2rem, 0;
          line-height: 1.5;
          letter-spacing: 0.3rem;
        }

        h1,
        h2 {
          font-family: "Roboto", sans-serif;
          font-weight: 700;
          font-size: 3rem !important;
        }

        h3,
        h4,
        h5 {
          font-family: "Roboto", sans-serif;
          font-weight: 500;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        a {
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease-out;
        }

        img {
          max-width: 100%;
          width: 100%;
          height: auto;
        }
      `}
    />
  );
}
