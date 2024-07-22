import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
  &.light-mode {
    --bg-color: transparent linear-gradient(180deg, #20d1bc 0%, #1aade3 100%) 0%
      0% no-repeat padding-box;
    --weather-item-bg: #1a20214d;
    --description-color: #ffffff99;
  }

  &.dark-mode {
    --bg-color: radial-gradient(
      circle at 10% 20%,
      rgb(69, 86, 102) 0%,
      rgb(34, 34, 34) 90%
    );
    --weather-item-bg: #767f814d;
    --description-color: #ffffff;
  }

  --text-active-color: #1aafe0;
  --color-secondary: #072a41;
  --text-inactive-color: #13264a33;
  --text-active-color: #1aafe0;
  --text-details-color: #072a41;
  --primary-color-muted: #ffffff99;
  --primary-color: #ffffff;

  --container-padding: 4.4375rem;
  --container-width: calc(100% - var(--container-padding) * 2);

  --font-family: Helvetica Neue, sans-serif;
  --font-style-normal: normal;
  --font-weight-medium: medium;
  --font-weight-bold: bold;
  --line-height: 100%;

  --font-size-12: 0.75rem;
  --font-size-15: clamp(0.625rem, 0.5492rem + 0.3236vw, 0.9375rem);
  --font-size-16: 1rem;
  --font-size-18: 1.125rem;
  --font-size-19: clamp(0.875rem, 0.7992rem + 0.3236vw, 1.1875rem);
  --font-size-21: 1.3125rem;
  --font-size-22: 1.375rem;
  --font-size-25: clamp(0.9375rem, 0.693rem + 0.7767vw, 1.5625rem);
  --font-size-26: clamp(var(--font-size-16), 0.693rem + 0.7767vw, 1.625rem);
  --font-size-34: clamp(1rem, 0.7269rem + 1.165vw, 2.125rem);
  --font-size-35: 2.1875rem;
  --font-size-50: 3.125rem;
  --font-size-90: clamp(3.125rem, 2.5182rem + 2.589vw, 5.625rem);

  --text-uppercase: uppercase;

  --transition-theme: color 0.3s, background-color 0.3s;
}
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

@font-face {
  src: url("../assets/fonts/HelveticaFont.woff") format("woff");
  font-family: var(--font-family);
  font-weight: var(--font-weight-medium);
  font-style: var(--font-style-normal);
  font-display: swap;
}

body {
  font-family: var(--font-family);
  transition: var(--transition-theme);
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

@media (max-width: 1200px) {
  html {
    font-size: 14px;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 12px;
  }
}



 
  
`