import React from 'react';

class UserCard extends React.Component {
  render() {
    // console.log('in usercard', this.props)
    return (
      <div className='userCard'>
        <img src={this.props.user.avatar_url} alt={this.props.user.name} />
        <div className='userDetails'>
          <h3>{this.props.user.name}</h3>
          <p className='userName'>{this.props.user.login}</p>
          <p>Location: {this.props.user.location}</p>
          <p>Profile: <a href={this.props.user.html_url}>
              {this.props.user.html_url}
            </a>
          </p>
          <p>Followers: {this.props.user.followers}</p>
          <p>Following: {this.props.user.following}</p>
          <p>Bio: {this.props.user.bio}</p>
        </div>
      </div>
    )
  }
}

export default UserCard;