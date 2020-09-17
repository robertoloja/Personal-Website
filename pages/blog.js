import Post from '../components/Blog/Post'
import Head from "next/head";
import React from "react";

const blogApiUrl = 'https://rho-ohr-api.herokuapp.com/'

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        fetch(blogApiUrl + 'posts/')
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        posts: result,
                        isLoaded: true,
                        error: null
                    });
                })
            .catch(error => {
                console.error(error);
                this.setState({
                    posts: [],
                    isLoaded: false,
                    error: error,
                })
            })
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>
                <Head>
                    <title>Mah Blog</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>

                    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet"/>
                    <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
                </Head>
                Loading...
            </div>
        } else {
            return (
                <div style={{
                    display: 'grid',
                }}>
                    <ul>
                        {posts.map(post => (
                            <Post title={post.title}
                                  content={post.content}
                                  created={post.created}
                                  owner={post.owner}
                                  key={post.title + post.created}
                            />
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

const stylesheet = `a {
    outline: none;
    text-decoration: none;
    color: blue;
    padding-left: 3px;
}

a:hover {
    border-bottom: 1px solid;
}`


export default BlogPage