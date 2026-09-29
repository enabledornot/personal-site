import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc",
    useTransform: true,
  });

  return {
    pathPrefix: "/personal-site/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
}