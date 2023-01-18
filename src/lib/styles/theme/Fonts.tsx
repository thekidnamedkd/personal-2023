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
        font-style: normal;
        font-weight: 800;
        src: url('/fonts/sysfont.woff2') format('woff2'),
        url('/fonts/sysfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'SourceCodePro';
        font-style: normal;
        src: url('/fonts/sysfont.ttf') format('TrueType'),
      }
      `}
  />
);

export default Fonts;
