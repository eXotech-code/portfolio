import React from 'react';
import Link from '../../components/Link';
import M1Banner from '../../media/M1-banner.webp';
import './Blog.scss';

class BlogPost extends React.Component {
    render() {
        return (
            <div className="blog-post">
                <p className="blog-post-long${">{this.props.time}</p>
                <img src={this.props.image} alt="blog post cover" />
                <h2 className="blog-post-title">{this.props.title}</h2>
                <p className="blog-post-description">{this.props.description}</p>
                <Link link={`/post/${this.props.id}`} data={this.props} icon={true}>Read this post</Link>
            </div>
        );
    }
}

class BlogContent extends React.Component {
    render() {
        return(
            <div className="blog-posts-container">
                {this.props.posts.map((post) => (
                    <BlogPost
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        time={post.date}
                        image={M1Banner}
                        description={post.description}
                        content={post.content}
                    />
                 ))}
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
                {this.props.posts.length
                    ? <BlogContent posts={this.props.posts} />
                    : <p>Loading posts...</p>}
            </div>
        );
    }
}

export default Blog;
