import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const HomePage = ({ posts, users, push }) => {
  const gotoArticle = id => () => {
    console.log(11111);
    push(`/article/${id}`);
  };

  return (
    <>
      {posts && users && posts.length > 0 && (
        <List>
          {posts.slice(0, 10).map(({ id, title, userId }) => {
            let userName = users.find(el => el.id === userId).name;
            let text = title.length < 30 ? title : title.slice(0, 30) + '...';
            return (
              <ListItem button key={id} onClick={gotoArticle(id)}>
                <ListItemText primary={text} secondary={`Posted by: ${userName}`} />
              </ListItem>
            );
          })}
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
