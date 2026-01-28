import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    keywords,
    ogImage = '/favicon.png',
    canonical
}) => {
    const location = useLocation();
    const baseUrl = 'https://iptv-factory.com';
    const currentUrl = canonical || `${baseUrl}${location.pathname}`;

    useEffect(() => {
        // Update title
        if (title) {
            document.title = `${title} | IPTV Factory`;
        }

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Update description
        if (description) {
            updateMetaTag('description', description);
            updateMetaTag('og:description', description, true);
            updateMetaTag('twitter:description', description);
        }

        // Update keywords
        if (keywords) {
            updateMetaTag('keywords', keywords);
        }

        // Update Open Graph tags
        if (title) {
            updateMetaTag('og:title', `${title} | IPTV Factory`, true);
            updateMetaTag('twitter:title', `${title} | IPTV Factory`);
        }

        updateMetaTag('og:url', currentUrl, true);
        updateMetaTag('og:image', `${baseUrl}${ogImage}`, true);
        updateMetaTag('twitter:image', `${baseUrl}${ogImage}`);

        // Update canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', currentUrl);

    }, [title, description, keywords, ogImage, currentUrl]);

    return null;
};

export default SEO;
