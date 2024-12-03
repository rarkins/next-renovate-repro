module.exports = {
  extends: ["config:base"],
  timezone: "Europe/Berlin", // Adjust to your timezone
  rangeStrategy: "minor",
  semanticCommits: true,
  prCreation: true,
  platform: "github",
  gitAuthor: "Renovate Bot <renovate@renovatebot.com>",
  labels: ["renovate", "dependencies"],
  dependencyDashboard: true,
  assignees: ["maxrn"],
  reviewers: ["maxrn"],
  ignoreDeps: ["@types/*"],
};
