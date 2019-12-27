import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

const SITE_URL = '/';
const defaultTitle = 'React Carousel';
const defaultDescription = 'React Carousel';
const defaultImage = `default.png`;
const defaultTwitter = '';
const defaultSep = ' | ';

class HelmetWrapper extends Component {
    getMetaTags(
      {
          title,
          description,
          image,
          contentType,
          twitter,
          category,
          meta,
      },
      pathname
    ) {
        const _title = title ? (title + defaultSep + defaultTitle).substring(0, 60) : defaultTitle;
        const _description = description ? description.substring(0, 155) : defaultDescription;
        const _image = image ? `${SITE_URL}${image}` : defaultImage;
        const metaTags = [
            { itemprop: 'name', content: meta && meta.title || _title },
            { itemprop: 'description', content: meta && meta.description || _description },
            { itemprop: 'image', content: meta && meta.image || _image },
            { name: 'description', content: meta && meta.description || _description },
            
            //twitter
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: defaultTwitter },
            { name: 'twitter:title', content: meta && meta.title || _title },
            { name: 'twitter:description', content: meta && meta.description || _description },
            { name: 'twitter:creator', content: twitter || defaultTwitter },
            { name: 'twitter:image:src', content: meta && meta.image || _image },
            
            //og-tags
            { property: 'og:title', content: meta && meta.title || _title },
            { property: 'og:type', content: contentType || 'website' },
            { property: 'og:url', content: SITE_URL + pathname },
            { property: 'og:image', content: meta && meta.image || _image },
            { property: 'og:image:width', content: '600' },
            { property: 'og:image:height', content: '600' },
            { property: 'og:description', content: meta && meta.description || _description },
            { property: 'og:site_name', content: defaultTitle },
        ];
        
        return metaTags;
    }
    
    render() {
        const { children, className, ...rest } = this.props;
        return (
          <div className={className}>
              <Helmet
                htmlAttributes={{ lang: 'en' }}
                title={rest.title ? rest.title : defaultTitle}
                link={[
                    {
                        rel: 'canonical',
                        href: rest.canonical
                    }
                ]}
                meta={this.getMetaTags(rest, this.props.location.pathname)}
              />
              {children}
          </div>
        );
    }
}

export default withRouter(HelmetWrapper);
