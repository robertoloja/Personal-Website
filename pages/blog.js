import Post from '../components/Blog/Post'
import Nav from '../components/Blog/Nav'
import Head from 'next/head';
import React from 'react';


class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    getPosts(endpoint) {
        fetch(endpoint)
            .then(res => {
                if (res.ok) return res.json()
            })
            .then(result => {
                this.setState({
                    posts: result,
                    isLoaded: true,
                    error: null
                });
            })
    }

    componentDidMount() {
        this.getPosts('https://rho-ohr-api.herokuapp.com/posts/')
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>
                <Nav></Nav>
                <Head>
                    <title>Mah Blog</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>

                    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&display=swap"
                          rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet"/>
                    <link href="../static/fonts/liberation-mono.css" rel="stylesheet"/>
                    <link href="../static/css/prism.css" rel="stylesheet"/>
                    <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
                </Head>
                Give me a moment, I'm waking up a Heroku droplet...
            </div>
        } else {
            const showPaginationButtons = direction => {
                if (posts && posts[direction.toLowerCase()]) {
                    return <a onClick={() => this.getPosts(posts[direction.toLowerCase()])}>{direction}</a>
                } else {
                    return
                }
            }
            return (
                <div style={{margin: '0 auto'}}>
                    <Nav></Nav>
                    <ul>
                        {posts && posts.results ? posts.results.map(post =>
                            <Post title={post.title}
                                  content={post.content}
                                  created={post.created}
                                  owner={post.owner}
                                  key={post.title + post.created}/>
                        )  : ''}
                    </ul>
                    {showPaginationButtons('Previous')}
                    {showPaginationButtons('Next')}
                </div>
            )
        }
    }
}

const stylesheet = `a {
    outline: none;
    text-decoration: none;
    color: #33a;
    padding-left: 3px;
}

a:hover {
    text-decoration: underline;
    color: #99c;
}`

export default BlogPage