/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "dynamicbusiness.test",
      "dipankarmaikap.a2hosted.com",
      "secure.gravatar.com",
    ],
  },
};
