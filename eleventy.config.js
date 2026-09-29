import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function (eleventyConfig) {
  // Copy static assets to the output untouched
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

  // Custom tags — useTransform expands them in your .html output
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc",
    useTransform: true,
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
}