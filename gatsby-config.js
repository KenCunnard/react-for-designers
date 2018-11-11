module.exports = {
  siteMetadata: {
    title: 'My Sweet Gatsby Site',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '7195u9q1n0hh',
        accessToken: 'c48e847e52222738924fea583748b3870019cbbf66c72b7cb94c3e0437a71685'
      }
    }
  ]
}
