import pluginWebc from "@11ty/eleventy-plugin-webc";
import path from "node:path";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc",
    useTransform: true,
  });

  eleventyConfig.addFilter("relative", function (target) {
    const from = this.page.url;
    const pageDir = from.endsWith("/") ? from : path.posix.dirname(from);
    let rel = path.posix.relative(pageDir, target);
    return rel.startsWith(".") ? rel : "./" + rel;
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