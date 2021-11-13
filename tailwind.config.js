const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(10px)",
      "blur-10": "blur(10px)",
      "blur-20": "blur(20px)",
    },
    extend: {
      fontFamily: {
        sans: ["effra", ...defaultTheme.fontFamily.sans],
        effra: ["effra", "sans-serif"], // body Text
        obliqua: ["obliqua", "sans-serif"],
        utopia: ["utopia-std", "serif"], // Hero Text
      },
      backgroundPosition: {
        "repeat-right-top": "right 16rem top 9rem",
        "repeat-mobile": "right 2rem top 9rem",
      },
      backgroundImage: (theme) => ({
        "media-vox": "url('/images/vox-media.png')",
        "media-washington-post": "url('/images/washington-post.png')",
        "media-new-york-times": "url('/images/new-york-times.png')",
        "home-cover": "url('/images/home-cover.jpg')",
        "about-cover": "url('/images/about-cover.jpg')",
        "media-cover": "url('/images/media-cover.jpg')",
        "policies-cover": "url('/images/policies-cover.jpg')",
        "policy-background": "url('/images/policy-background.jpg')",
      }),
      opacity: {
        10: "0.1",
        15: "0.15",
        90: "0.90",
      },
      transitionProperty: {
        width: "width",
      },
      minHeight: {
        map: "260px",
      },
      height: {
        "screen/2": "50vh",
        "screen/1.5": "66.667vh",
        "screen/1.3": "75vh",
      },
      gridColumn: {
        "span-14": "span 14 / span 14",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        14: "repeat(14, minmax(0, 1fr))",
      },
      colors: {
        repeat: {
          "table-1": "#926868",
          "table-2": "#7F7353",
          "table-3": "#607C5C",
          "table-4": "#5B7B80",
          "table-5": "#7E6E8C",
          "table-6": "#5E4557",
          teal: "#325d6b",
          //black: "#323438",
          black: "#565656",
          dark: "#7C7C7C",
          neutral: "#C4C4C4",
          light: "#F3EEE5",
          gray: "#757575",
          DEFAULT: "#ED6D0B",
          primary: "#4059ad",
          burnt: "#D2801E",
          "light-blue": "#EDF1F2",
          "dark-blue": "#424D62",
        },
      },
      borderColor: {
        teal: "#325d6b",
        //black: "#323438",
        black: "#565656",
        dark: "#7C7C7C",
        neutral: "#C4C4C4",
        light: "#F3EEE5",
        DEFAULT: "#ED6D0B",
        primary: "#4059ad",
        burnt: "#D2801E",
        "light-blue": "#EDF1F2",
        "dark-blue": "#424D62",
      },
      rotate: {
        60: "60deg",
      },
      cursor: {
        auto: "auto",
        DEFAULT: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        "not-allowed": "not-allowed",
        crosshair: "crosshair",
        "zoom-in": "zoom-in",
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      maxWidth: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
  },
  variants: {
    top: ["focus"],
    display: ["responsive", "group-hover", "group-focus"],
    position: ["focus"],
    borderWidth: ["hover", "focus"],
    backgroundImage: ["hover", "focus"],
    opacity: ["responsive", "hover", "active", "focus", "group-hover"],
    filter: ["responsive"],
    backdropFilter: ["responsive"],
    backgroundOpacity: ["responsive", "hover", "active", "group-hover", "focus"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-filters"),
  ],
};
