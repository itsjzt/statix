const fs = require("fs");
const frontmatter = require("front-matter");
const pug = require("pug");
const marked = require("marked");
const path = require("path");

function main() {
  const post_files = fs.readdirSync(`${__dirname}/src/posts`);
  const template = fs.readFileSync("./src/posts_template.pug", "utf8");

  // build MD files
  // this is where the post are made in html pages
  for (file of post_files) {
    if (!file.endsWith(".md")) continue;
    let data = fs.readFileSync(`./src/posts/${file}`, "utf8");
    let format = frontmatter(data);
    let obj = { ...format.attributes, body: marked(format.body) };
    let filedata = pug.render(template, { ...obj });
    let filename = file.replace(".md", ".html");
    fs.writeFileSync(path.join("build", filename), filedata);
  }

  // build HTML files
  // pages are pug files that need to be compiled
  const page_files = fs.readdirSync(`${__dirname}/src/pages`);
  for (file of page_files) {
    if (!file.endsWith(".pug")) continue;
    let data = fs.readFileSync(`./src/pages/${file}`, "utf8");
    let filedata = pug.render(data);
    let filename = file.replace(".pug", ".html");
    fs.writeFileSync(path.join("build", filename), filedata);
  }
}

main();
