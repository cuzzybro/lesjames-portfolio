/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/lesjames-portfolio',
    output: 'export',
    reactStrictMode: true,
    env: {
        GITHUB_URL: 'https://github.com/cuzzybro',
        FACEBOOK_URL: 'https://facebook.com',
        TWITTER_URL: 'https://x.com',
        INSTAGRAM_URL: 'https://instagram.com',
        LINKEDIN_URL: 'https://linkedin.com',
        GOOGLE_URL: 'https://google.com',
        YOUTUBE_URL: 'https://youtube.com',
        MESSENGER_URL: 'https://messenger.com',
        BASE_PATH: '/lesjames-portfolio'
    }
};

export default nextConfig;
