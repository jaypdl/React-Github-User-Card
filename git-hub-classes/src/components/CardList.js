import React from 'react';
import UserCard from './UserCard';

class CardList extends React.Component {
  render() {
    return (
      <div>
        <h2>Here's {this.props.state.mainUserData.name}'s info:</h2>
        <UserCard user={this.props.state.mainUserData} />
        <h2>And these are the people who follow {this.props.state.mainUserData.name}:</h2>
        {this.props.state.followerData.map(follower => {
          return(
            <UserCard key={follower.login} user={follower} />
          )
        })}
      </div>
    )
  }
}

export default CardList;