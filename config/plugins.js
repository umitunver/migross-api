module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_dwxPmmGc0SO4EYf5zrFAwFDjwei0",
      apiToken: "cskQQENCEktctABeA1epp28h",
      appFilter: "migross-api",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
