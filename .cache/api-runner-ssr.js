var plugins = [{
      plugin: require('C:/Developement/Assignment Tasks/Plasm/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr'),
      options: {"plugins":[],"siteUrl":"https://kwikswap.org"},
    },{
      plugin: require('C:/Developement/Assignment Tasks/Plasm/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","createLinkInHead":true},
    },{
      plugin: require('C:/Developement/Assignment Tasks/Plasm/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Developement/Assignment Tasks/Plasm/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('C:/Developement/Assignment Tasks/Plasm/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"C:\\Developement\\Assignment Tasks\\Plasm\\src\\layouts\\index.js","docs":"C:\\Developement\\Assignment Tasks\\Plasm\\src\\layouts\\docs.js","blog":"C:\\Developement\\Assignment Tasks\\Plasm\\src\\layouts\\blogPost.js"},"remarkPlugins":[null],"rehypePlugins":[null],"gatsbyRemarkPlugins":["gatsby-remark-embedder","gatsby-remark-copy-linked-files","gatsby-remark-autolink-headers",{"resolve":"gatsby-remark-twitter-cards","options":{"title":"Kwikswap","separator":"|","author":"@KwikswapProtocol","background":"C:\\Developement\\Assignment Tasks\\Plasm\\static\\images\\twitter_card_bg.jpg","fontColor":"#FF3093","fontStyle":"sans-serif","titleFontSize":124,"fontFile":"C:\\Developement\\Assignment Tasks\\Plasm\\static\\fonts\\Inferi-Normal.ttf"}},"gatsby-remark-smartypants",{"resolve":"gatsby-remark-images","options":{"maxWidth":1200,"showCaptions":true}}],"lessBabel":false,"mediaTypes":["text/markdown","text/x-markdown"],"root":"C:\\Developement\\Assignment Tasks\\Plasm"},
    },{
      plugin: require('C:/Developement/Assignment Tasks/Plasm/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/fav.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"f4309a11e5dc6dc76118508ed8d34bac"},
    },{
      plugin: require('C:/Developement/Assignment Tasks/Plasm/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n            {\n              allMdx(filter: {fileAbsolutePath: {regex: \"/blog/\"}}, sort: {order: DESC, fields: frontmatter___date}) {\n                edges {\n                  node {\n                    id\n                    frontmatter {\n                      date\n                      title\n                      previewText\n                    }\n                    fields {\n                      slug\n                    }\n                    rawBody\n                  }\n                }\n              }\n            }\n            ","output":"/rss.xml","title":"Kwikswap Blog RSS Feed"}]},
    },{
      plugin: require('C:/Developement/Assignment Tasks/Plasm/node_modules/gatsby-plugin-algolia-docsearch-appid/gatsby-ssr'),
      options: {"plugins":[],"apiKey":"8962240e69e6d23a88432f501c115470","indexName":"kwikswap_v1_docs","appId":"VZ0CVS8XCW","inputSelector":"blank"},
    },{
      plugin: require('C:/Developement/Assignment Tasks/Plasm/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
