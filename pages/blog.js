const blogApiUrl = 'http://127.0.0.1:8000/'

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
        const { error, isLoaded, posts } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            console.log("Posts: " + posts)
            return (
                <ul>
                    {posts.map(post => (
                        <li key={post.title}>
                            <p>{post.title}</p>
                            {post.content}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default BlogPage