const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/r3ndy/r3ndy/Programming/GatsbyJS/Gatsby JS Crash Course by Traversy Media/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/r3ndy/r3ndy/Programming/GatsbyJS/Gatsby JS Crash Course by Traversy Media/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/r3ndy/r3ndy/Programming/GatsbyJS/Gatsby JS Crash Course by Traversy Media/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/r3ndy/r3ndy/Programming/GatsbyJS/Gatsby JS Crash Course by Traversy Media/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/r3ndy/r3ndy/Programming/GatsbyJS/Gatsby JS Crash Course by Traversy Media/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/r3ndy/r3ndy/Programming/GatsbyJS/Gatsby JS Crash Course by Traversy Media/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/r3ndy/r3ndy/Programming/GatsbyJS/Gatsby JS Crash Course by Traversy Media/src/pages/page-2.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/home/r3ndy/r3ndy/Programming/GatsbyJS/Gatsby JS Crash Course by Traversy Media/src/pages/services.js")))
}

