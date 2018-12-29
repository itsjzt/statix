const fs = require("fs");
const frontmatter = require("front-matter");
const pug = require("pug");
const marked = require("marked");
const path = require("path");
const touch = require("touch");

function main() {
  const files = fs.readdirSync(`${__dirname}/src/posts`);
  const template = fs.readFileSync("./src/pages_template.pug", "utf8");

  // build MD files

  for (file of files) {
    if (!file.endsWith(".md")) continue;
    let data = fs.readFileSync(`./src/posts/${file}`, "utf8");
    let format = frontmatter(data);
    let obj = { ...format.attributes, body: marked(format.body) };
    let filedata = pug.render(template, { ...obj });
    let filename = file.replace(".md", ".html");
    // touch.sync(`${__dirname}/build/blog/${filename}`);
    fs.writeFileSync(path.join("build", filename), filedata);
  }

  // build HTML files

  for (file of files) {
    if (!file.endsWith(".md")) continue;
    let data = fs.readFileSync(`./src/posts/${file}`, "utf8");
    let format = frontmatter(data);
    let obj = { ...format.attributes, body: marked(format.body) };
    let filedata = pug.render(template, { ...obj });
    let filename = file.replace(".md", ".html");
    // touch.sync(`${__dirname}/build/blog/${filename}`);
    fs.writeFileSync(path.join("build", filename), filedata);
  }
}

main();
