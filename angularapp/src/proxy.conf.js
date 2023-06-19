const PROXY_CONFIG = [
  {
    context: [
      "/Todo",
    ],
    target: "https://localhost:7022",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
