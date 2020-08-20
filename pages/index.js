import Head from "next/head"
import stylesheet from 'styles/main.scss'
import emailjs from 'emailjs-com'


import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading"
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ""})
        }, 100)
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout
            })
        }, 350)
    }

    handleCloseArticle() {
        this.setState({
            articleTimeout: !this.state.articleTimeout
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: ""
            })
        }, 350)
    }

    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? "is-article-visible" : ""}`}>
                <div>
                    <Head>
                        <title>Roberto Loja</title>
                        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
                              rel="stylesheet"/>
                        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                        <script type="text/javascript"
                                src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">
                        </script>
                        <script type="text/javascript">
                            (function() {
                            emailjs.init("user_grrrmewkPIwj6Xm5SsgKd")
                        })
                        ();
                        </script>
                    </Head>

                    <style dangerouslySetInnerHTML={{__html: stylesheet}}/>

                    <div id="wrapper">
                        <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout}/>
                        <Main
                            isArticleVisible={this.state.isArticleVisible}
                            timeout={this.state.timeout}
                            articleTimeout={this.state.articleTimeout}
                            article={this.state.article}
                            onCloseArticle={this.handleCloseArticle}
                        />
                        <Footer timeout={this.state.timeout}/>
                    </div>

                    <div id="bg"/>
                </div>
            </div>
        )
    }
}

export default IndexPage
