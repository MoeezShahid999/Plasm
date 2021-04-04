module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://kwikswap.org"},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-smoothscroll/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-background-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"C:\\Developement\\Assignment Tasks\\Plasm\\src\\layouts\\index.js","docs":"C:\\Developement\\Assignment Tasks\\Plasm\\src\\layouts\\docs.js","blog":"C:\\Developement\\Assignment Tasks\\Plasm\\src\\layouts\\blogPost.js"},"remarkPlugins":[null],"rehypePlugins":[null],"gatsbyRemarkPlugins":["gatsby-remark-embedder","gatsby-remark-copy-linked-files","gatsby-remark-autolink-headers",{"resolve":"gatsby-remark-twitter-cards","options":{"title":"Kwikswap","separator":"|","author":"@KwikswapProtocol","background":"C:\\Developement\\Assignment Tasks\\Plasm\\static\\images\\twitter_card_bg.jpg","fontColor":"#FF3093","fontStyle":"sans-serif","titleFontSize":124,"fontFile":"C:\\Developement\\Assignment Tasks\\Plasm\\static\\fonts\\Inferi-Normal.ttf"}},"gatsby-remark-smartypants",{"resolve":"gatsby-remark-images","options":{"maxWidth":1200,"showCaptions":true}}],"lessBabel":false,"mediaTypes":["text/markdown","text/x-markdown"],"root":"C:\\Developement\\Assignment Tasks\\Plasm"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/fav.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"f4309a11e5dc6dc76118508ed8d34bac"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
