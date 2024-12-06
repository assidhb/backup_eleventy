module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/favicon.svg");
  eleventyConfig.addWatchTarget("./src/assets/sass/");
  eleventyConfig.addShortcode("mt3", function (caption, source) {
    return `<li class="mt-3">
        <figure>
          <figcaption>${caption}</figcaption>
          <audio controls="" src="${source}">
            Désolé, votre navigateur ne peut pas lire le fichier audio
          </audio>
        </figure>
      </li>`;
  });
  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html"],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public",
    },
  };
};
// 04/08/2023
