import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { openArticle, closeArticle, showComments } from '../../actions/articleActions';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Content,
  ContentHeader,
  ContentAuthor,
  ContentText,
  ContentClose,
  Comment,
  CommentName,
  CommentBody,
  CommentBlock,
} from './index.style';
import CloseIcon from '@material-ui/icons/Close';

class Article extends Component {
  static propTypes = {
    push: PropTypes.func.isRequired,
    openArticle: PropTypes.func.isRequired,
    closeArticle: PropTypes.func.isRequired,
    showComments: PropTypes.func.isRequired,
    posts: PropTypes.array,
    users: PropTypes.array,
    match: PropTypes.object.isRequired,
    comments: PropTypes.array,
    text: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  };

  state = {
    loading: false,
  };

  componentDidMount = () => {
    this.loadArticle();
  };

  componentDidUpdate = () => {
    const { text } = this.props;

    if (!text) {
      this.loadArticle();
    }
  };

  componentWillUnmount = () => {
    const { closeArticle } = this.props;
    closeArticle();
  };

  loadArticle = () => {
    const { openArticle, posts, users, match } = this.props;

    const post = posts && posts.find(el => el.id === Number(match.params.id));
    const author = post && users && users.find(el => el.id === post.userId);

    if (post && author) {
      let data = {
        title: post.title,
        author: author.name,
        text: post.body,
      };
      openArticle(data);
    }
  };

  goHome = () => {
    const { push } = this.props;
    push('/');
  };

  showComments = () => {
    const { showComments, match } = this.props;

    this.setState({
      loading: true,
    });
    showComments(Number(match.params.id)).then(_ => {
      this.setState({ loading: false });
    });
  };

  render() {
    const { loading } = this.state;
    const { text, title, author, comments } = this.props;

    return (
      <>
        {text && author && (
          <Content>
            <ContentClose>
              <CloseIcon onClick={this.goHome} />
            </ContentClose>
            <ContentHeader>{title}</ContentHeader>
            <ContentAuthor>Author: {author}</ContentAuthor>
            <ContentText>{text}</ContentText>
            <CommentBlock>
              Comments:
              {comments.length === 0 && (
                <Button onClick={this.showComments} variant="contained" size="small">
                  {loading && <CircularProgress size={22} />}
                  {!loading && 'Show comments'}
                </Button>
              )}
              {comments.length > 0 &&
                comments.map(el => {
                  return (
                    <Comment key={el.id}>
                      <CommentName>{el.name.slice(0, 10)} said:</CommentName>
                      <CommentBody>{el.body}</CommentBody>
                    </Comment>
                  );
                })}
            </CommentBlock>
          </Content>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.article.text,
    title: state.article.title,
    author: state.article.author,
    comments: state.article.comments,
    posts: state.crud.posts,
    users: state.crud.users,
  };
};

const mapDispatchToProps = {
  push,
  openArticle,
  closeArticle,
  showComments,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article);
