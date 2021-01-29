import React from 'react';
import Link from './components/Link';
import M1Banner from './media/M1-banner.webp';
import './Blog.scss';

class BlogPost extends React.Component {
    render() {
        return (
            <div className="blog-post">
                <h2 className="blog-post-title">{this.props.title}</h2>
                <p className="blog-post-long">{this.props.time}</p>
                <img src={this.props.image} alt="blog post cover"></img>
                <p className="blog-post-long">{this.props.description}</p>
                <Link>Read this post</Link>
            </div>
        );
    }
}

class Blog extends React.Component {
    render() {
        return (
            <div className="blog">
                <div className="blog-section-name-container">
                    <div>
                        <p className="section-name">Blog</p>
                        <p className="section-name">
                            Stream of my thoughts that are piling up
                            in my head about stuff. Updated weekly.
                        </p>
                    </div>
                </div>
                <div className="blog-posts-container">
                    <BlogPost 
                    title="My thoughts about Macs with M1" 
                    time="January 1, 1970 at 0:00"
                    image={M1Banner}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla libero, iaculis a dignissim quis, elementum sed quam. Aenean pharetra congue turpis, quis interdum arcu volutpat congue. Duis placerat urna vitae euismod volutpat."
                    />
                    <BlogPost 
                    title="My thoughts about Macs with M1" 
                    time="January 1, 1970 at 0:00"
                    image={M1Banner}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla libero, iaculis a dignissim quis, elementum sed quam. Aenean pharetra congue turpis, quis interdum arcu volutpat congue. Duis placerat urna vitae euismod volutpat."
                    />
                    <BlogPost 
                    title="My thoughts about Macs with M1" 
                    time="January 1, 1970 at 0:00"
                    image={M1Banner}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla libero, iaculis a dignissim quis, elementum sed quam. Aenean pharetra congue turpis, quis interdum arcu volutpat congue. Duis placerat urna vitae euismod volutpat."
                    />
                </div>
            </div>
        );
    }
}

export default Blog;