# Featured Blog Images

This directory contains featured images for blog posts used in social sharing and article preview cards.

## Image Specifications

- **Recommended Resolution**: 1200x630 pixels (16:9 aspect ratio - optimal for OpenGraph/Twitter Cards)
- **Format**: JPEG, PNG, or WebP
- **File Size**: Keep under 200KB for optimal performance
- **Quality**: Web-optimized images (avoid excessive compression)

## File Naming Convention

Name images according to blog post ID:
- `1.jpg` - Understanding IPTV Technology (Post ID: 1)
- `2.jpg` - Xtream Codes vs Stalker Middleware (Post ID: 2)
- `3.jpg` - How to Choose a Legitimate IPTV Service Provider (Post ID: 3)
- `4.jpg` - IPTV Optimization Guide (Post ID: 4)
- `5.jpg` - Mobile IPTV Setup (Post ID: 5)
- `6.jpg` - Legal Aspects of IPTV (Post ID: 6)
- `7.jpg` - Troubleshooting IPTV Issues (Post ID: 7)
- `8.jpg` - The Real Cost of IPTV (Post ID: 8)
- `9.jpg` - Best IPTV Players & Apps (Post ID: 9)
- `10.jpg` - Improving IPTV Video Quality (Post ID: 10)
- `11.jpg` - Streaming Sports on IPTV (Post ID: 11)
- `12.jpg` - IPTV Security & Privacy (Post ID: 12)

## Default/Fallback Image

- `default.jpg` - Used if a specific post's image is missing (optional)

## How Images Are Used

### Social Sharing
- **OpenGraph (Facebook, LinkedIn)**: 1200x630px images are displayed when content is shared
- **Twitter Cards**: Uses `summary_large_image` card type with featured image
- **Meta Tags**: Automatically injected via SEO component

### Blog Display
- **Featured Post**: Displayed in a 1:1 aspect ratio container on desktop, full-width on mobile
- **Article Preview Cards**: Shown 3:4 aspect ratio (cropped from original)
- **Article Page**: Featured image displayed above article body in 16:9 format

## Implementation

Featured images are automatically referenced from:
- `featuredImage: "/blog-images/[ID].jpg"` in blog post data (Blog.jsx & BlogPost.jsx)
- SEO component automatically generates OpenGraph and Twitter Card meta tags
- BlogPosting schema includes image URL for search engine rich snippets

## Performance Tips

1. Use image optimization tools:
   - TinyPNG.com for JPEG/PNG compression
   - Squoosh.app for WebP conversion
   - ImageOptim for batch processing

2. Consider using responsive image formats:
   - Modern browsers support WebP (smaller file size)
   - Fallback to JPEG for older browsers

3. Image CDN integration (optional):
   - For production, consider serving images from a CDN
   - Update image URLs in posts to CDN domain

## Design Recommendations

For best visual results:
- Use consistent color palettes that align with category colors
- Include relevant IPTV/streaming related imagery
- Add text overlays for post titles (for social preview clarity)
- Ensure text contrast is sufficient (WCAG AA minimum)
- Keep important content centered (safe area for social previews)

## Example Category Colors

- **Education**: Blue (#3B82F6)
- **Technical**: Purple (#A855F7)
- **Safety**: Red (#EF4444)
- **Guides**: Green (#10B981)
- **Legal**: Amber (#F59E0B)

## Testing

Test featured images with:
1. Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/sharing/
2. Twitter Card Validator: https://cards-dev.twitter.com/validator
3. LinkedIn Inspector: https://www.linkedin.com/feed/inspector/

---

**Note**: Placeholder images will show gradient backgrounds if featured images are missing. Replace with actual images for optimal presentation.
