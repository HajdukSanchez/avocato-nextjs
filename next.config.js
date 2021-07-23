module.exports = {
  async rewrites() {
    // Return the list of the rewrites
    return [
      {
        source: '/avocado/:path*',
        destination: '/product/:path*',
      },
    ]
  },
}
