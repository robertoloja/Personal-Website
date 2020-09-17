import Post from '../components/Blog/Post'

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
                }
            )
    }

    render() {
        const {error, isLoaded, posts} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
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
            )
        }
    }
}

export default BlogPage