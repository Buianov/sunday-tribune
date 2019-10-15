import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

  return (
    <>
      <div>
        <TextField
          id="name"
          label="Search..."
          value={filter.name}
          onChange={filterHandler}
          margin="normal"
        />
      </div>
      {users && filteredArticles && (
        <List>
          {filteredArticles.slice(0, articlesCount).map(({ id, title, userId }) => {
            let userName = users.find(el => el.id === userId).name;
            let text = title.length < 30 ? title : title.slice(0, 30) + '...';
            return (
              <ListItem button key={id} onClick={gotoArticle(id)}>
                <ListItemText primary={text} secondary={`Posted by: ${userName}`} />
              </ListItem>
            );
          })}
          {articlesCount < filteredArticles.length && (
            <Button variant="contained" onClick={showMore}>
              Show more...
            </Button>
          )}
        </List>
      )}
    </>
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
