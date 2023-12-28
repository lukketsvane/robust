const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

const nextConfig = {
  images: {
    domains: ['source.unsplash.com', 'unsplash.com', 'd5i52xlspk7ew.cloudfront.net'],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);
