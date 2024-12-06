const Image = require("@11ty/eleventy-img");

const imageShortcode = async (
  src,
  alt,
  widths = [null, 400, 800],
  formats = ["webp", "jpeg"],
  sizes = "100vw"
) => {
  const imageMetadata = await Image(src, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir: "public/assets/img",
    urlPath: "/assets/img",
  });
  const imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  return Image.generateHTML(imageMetadata, imageAttributes);
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/img/");
  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      output: "public",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
// 09/01/2023
