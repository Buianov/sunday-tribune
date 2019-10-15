import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  NewsContainer,
  NewsBlock,
  HeaderNewsBlock,
  NewsTitle,
  NewsAuthor,
  NewsImage,
  Container,
} from './index.style';

const HomePage = ({ posts, users, push }) => {
  const blankFilter = {
    name: '',
    author: '',
  };
  const [articlesCount, setArticlesCount] = useState(10);
  const [filter, setFilter] = useState(blankFilter);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    setFilteredArticles(posts);
  }, [posts]);

  const showMore = () => {
    if (articlesCount < posts.length) {
      setArticlesCount(articlesCount + 10);
    }
  };

  const gotoArticle = id => () => {
    push(`/article/${id}`);
  };

  const filterHandler = e => {
    setFilter({
      ...filter,
      [e.target.id]: e.target.value,
    });
    setFilteredArticles(
      posts.filter(el => {
        if (e.target.id === 'name') {
          return el.title.includes(e.target.value);
        }
      }),
    );
    console.log(filteredArticles);
  };

  const capitalize = str => {
    return str
      .split(' ')
      .map(el => el.charAt(0).toUpperCase() + el.slice(1))
      .join(' ');
  };

  return (
    <Container>
      <div>
        <TextField
          id="name"
          label="Search by title..."
          value={filter.name}
          onChange={filterHandler}
          margin="normal"
        />
      </div>
      {users && filteredArticles && (
        <NewsContainer>
          {filteredArticles.slice(0, articlesCount).map(({ id, title, userId }) => {
            let userName = users.find(el => el.id === userId).name;
            return (
              <NewsBlock key={id} onClick={gotoArticle(id)}>
                <NewsTitle>{capitalize(title)}</NewsTitle>
                <NewsAuthor>{`Posted by: ${userName}`}</NewsAuthor>
                <NewsImage>
                  <img
                    src={`https://picsum.photos/150/?random=${Math.floor(Math.random() * 6 + 1)}`}
                  />
                </NewsImage>
              </NewsBlock>
            );
          })}
          {articlesCount < filteredArticles.length && (
            <Button variant="contained" onClick={showMore}>
              Show more...
            </Button>
          )}
        </NewsContainer>
      )}
    </Container>
  );
};

HomePage.propTypes = {
  push: PropTypes.func.isRequired,
  posts: PropTypes.array,
  users: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    posts: state.crud.posts,
    users: state.crud.users,
  };
};

const mapDispatchToProps = {
  push,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
