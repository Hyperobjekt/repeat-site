// postcss.config.js
let plugins = ["tailwindcss", "autoprefixer"];
if (process.env.NODE_ENV != "development") {
  plugins.push([
    "@fullhuman/postcss-purgecss",
    {
      content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
      safelist: [
        "text-gray-500",
        "text-gray-800",
        "bg-transparent",
        "bg-white",
        "bg-gray-100",
        "bg-opacity-15",
        "hover:bg-white",
        "hover:bg-opacity-15",
        "hover:text-gray-800",
        "group-hover:text-gray-800",
        "bg-repeat-table-1"
      ],
      defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
    },
  ]);
}
module.exports = {
  plugins: plugins,
};
