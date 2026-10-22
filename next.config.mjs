/** @type {import('next').NextConfig} */

// Browser caching for images, video and fonts is set in public/_headers
// (that's the file Cloudflare Pages reads for static files).
//
// Note: experimental.inlineCss was tried to remove the render-blocking CSS
// file that SEO tools flag, but it raised Total Blocking Time and lowered the
// Lighthouse score, so the CSS stays in its own (small, cached) file.

const nextConfig = {
  async headers() {
    return [
      {
        // Tell browsers to always use HTTPS for this site.
        source: '/:path*',
        headers: [{ key: 'Strict-Transport-Security', value: 'max-age=31536000' }],
      },
    ];
  },
};

export default nextConfig;
