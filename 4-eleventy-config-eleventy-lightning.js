const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [440, 880],
    formats: ["avif", "webp", "jpeg"],
    outputDir: "./public/img",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}

module.exports = (eleventyConfig) => {
  // If you already have a config, add just the following line
  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/favicon.png");

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    markdownTemplateEngine: "njk",

    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
// 16/08/2023
