module.exports = {
  title: "MetaGame Wiki",
  tagline: "MetaGame is a society of global citizens with the aim of outgrowing nation states & zero-sum games of old economic thinking by building and promoting better alternatives; building a future we want to live in.",
  url: "https://wiki.metagame.wtf",
  baseUrl: "/",
  favicon: "img/mg-icon.png",
  organizationName: "MetaFam",
  projectName: "metagame-wiki",
  themeConfig: {
    navbar: {
      title: "MetaGame Wiki",
      logo: {
        alt: "MetaGame Logo",
        src: "img/mg-icon.png"
      },
      links: [
        { to: "docs/introduction", label: "📕 Handbook", position: "left" },
        {
          to: "docs/manifesto/pillar-articles",
          label: "📜 Manifesto",
          position: "left"
        },
        { to: "docs/roadmap/phases", label: "🗺 Roadmap", position: "left" },
        {
          to: "docs/resources/graphics",
          label: "🌳 Resources",
          position: "left"
        },
        {
          href: "https://metagame.wtf",
          label: "Home",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "The Game",
          items: [
            {
              label: "🌌 Interspace",
              href: "https://interspace.metagame.wtf"
            },
            {
              label: "🧬 The Source",
              href: "https://metafam.github.io/TheSource/timeline/@metagame/"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "💬 Discord",
              href: "https://discord.gg/VYZPBnx"
            },
            {
              label: "🧵 Forums",
              href: "https://forum.metagame.wtf"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "🐦 Twitter",
              href: "https://twitter.com/MetaFam"
            },
            {
              label: "🗞 Newsletter",
              href: "https://metagame.substack.com"
            }
          ]
        }
      ]
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/MetaFam/metagame-wiki/edit/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
