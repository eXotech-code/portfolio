import React from 'react';
import Link from '../../components/Link';
import M1Banner from '../../media/M1-banner.webp';
import './Blog.scss';

class BlogPost extends React.Component {
    render() {
        return (
            <div className="blog-post">
                <p className="blog-post-long${">{this.props.time}</p>
                <img src={this.props.image} alt="blog post cover"></img>
                <h2 className="blog-post-title">{this.props.title}</h2>
                <p className="blog-post-description">{this.props.description}</p>
                <Link link={`/post/${this.props.id}`}>Read this post</Link>
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
                        id={post.id}
                    title={post.title}
                    time={post.date}
                    image={M1Banner}
                    description={post.description}
                    />
                 ))}
                </div>
        );
    }
}

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: []};
    }

    componentDidMount() {
        /* Just a random fetch request to check if
         * I can connect from frontend to backend. */

        const apiURL = '/api/posts/3'

        // Fire the request with fetch method.
        fetch(apiURL)
                .then(response => response.json())
                .then(data => this.setState({ posts: data }))
                .catch(console.log)
    }

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
                {this.state.posts.length
                    ? <BlogContent posts={this.state.posts} />
                    : <p>Loading posts...</p>}
            </div>
        );
    }
}

export default Blog;
