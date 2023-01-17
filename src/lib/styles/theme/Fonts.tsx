import { Global } from "@emotion/react";

// ONE MORE FONT IN _document.tsx

const Fonts = () => (
  <Global
    styles={`
      /* heading primary */
      @font-face {
        font-family: 'W95FA';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/w95fa.woff2') format('woff2'), url('/fonts/w95fa.otf') format('OpenType');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* heading secondary */
      @font-face {
        font-family: 'Sysfont';
        src: url('/fonts/sysfont.woff2') format('woff2'),
        url('/fonts/sysfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
      /* quote */
      @font-face {
        font-family: 'ITC Garamond';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/ITCGaramondLightNarrow/font.woff2') format('woff2'), url('/fonts/ITCGaramondLightNarrow/font.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* body medium */
      @font-face {
        font-family: 'Neue Haas';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/NeueHaas/Medium.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* body medium italic */
      @font-face {
        font-family: 'Neue Haas';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/NeueHaas/MediumItalic.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* body regular */
      @font-face {
        font-family: 'Neue Haas';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/NeueHaas/Roman.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* body regular italic */
      @font-face {
        font-family: 'Neue Haas';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/NeueHaas/RomanItalic.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

export default Fonts;
