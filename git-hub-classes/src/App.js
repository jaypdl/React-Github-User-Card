import React from 'react';
import fetchData from './utils/fetchData';
import CardList from './components/CardList';
import './App.css';

// const testObj = {
//   "login": "jaypdl",
//   "id": 20601752,
//   "node_id": "MDQ6VXNlcjIwNjAxNzUy",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/20601752?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/jaypdl",
//   "html_url": "https://github.com/jaypdl",
//   "followers_url": "https://api.github.com/users/jaypdl/followers",
//   "following_url": "https://api.github.com/users/jaypdl/following{/other_user}",
//   "gists_url": "https://api.github.com/users/jaypdl/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/jaypdl/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/jaypdl/subscriptions",
//   "organizations_url": "https://api.github.com/users/jaypdl/orgs",
//   "repos_url": "https://api.github.com/users/jaypdl/repos",
//   "events_url": "https://api.github.com/users/jaypdl/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/jaypdl/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Jay Ponce de Leon",
//   "company": null,
//   "blog": "https://www.linkedin.com/in/jayponcedeleon/",
//   "location": "South East New Mexico",
//   "email": null,
//   "hireable": null,
//   "bio": "I'm a Full-Stack Web Development student at Lambda School",
//   "twitter_username": "jayponcedeleon",
//   "public_repos": 55,
//   "public_gists": 0,
//   "followers": 10,
//   "following": 24,
//   "created_at": "2016-07-22T17:22:18Z",
//   "updated_at": "2021-01-12T06:00:53Z"
// }

// const testFollowers = [
//     {
//     "login": "Aszalea-Calderon",
//     "id": 70869551,
//     "node_id": "MDQ6VXNlcjcwODY5NTUx",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/70869551?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Aszalea-Calderon",
//     "html_url": "https://github.com/Aszalea-Calderon",
//     "followers_url": "https://api.github.com/users/Aszalea-Calderon/followers",
//     "following_url": "https://api.github.com/users/Aszalea-Calderon/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Aszalea-Calderon/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Aszalea-Calderon/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Aszalea-Calderon/subscriptions",
//     "organizations_url": "https://api.github.com/users/Aszalea-Calderon/orgs",
//     "repos_url": "https://api.github.com/users/Aszalea-Calderon/repos",
//     "events_url": "https://api.github.com/users/Aszalea-Calderon/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Aszalea-Calderon/received_events",
//     "type": "User",
//     "site_admin": false
//     },
//     {
//     "login": "ahmedseragcodes",
//     "id": 70908925,
//     "node_id": "MDQ6VXNlcjcwOTA4OTI1",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/70908925?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/ahmedseragcodes",
//     "html_url": "https://github.com/ahmedseragcodes",
//     "followers_url": "https://api.github.com/users/ahmedseragcodes/followers",
//     "following_url": "https://api.github.com/users/ahmedseragcodes/following{/other_user}",
//     "gists_url": "https://api.github.com/users/ahmedseragcodes/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/ahmedseragcodes/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/ahmedseragcodes/subscriptions",
//     "organizations_url": "https://api.github.com/users/ahmedseragcodes/orgs",
//     "repos_url": "https://api.github.com/users/ahmedseragcodes/repos",
//     "events_url": "https://api.github.com/users/ahmedseragcodes/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/ahmedseragcodes/received_events",
//     "type": "User",
//     "site_admin": false
//     }
//   ]

//   const testFollowerData = [
//     {
//       "login": "Aszalea-Calderon",
//       "id": 70869551,
//       "node_id": "MDQ6VXNlcjcwODY5NTUx",
//       "avatar_url": "https://avatars2.githubusercontent.com/u/70869551?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/Aszalea-Calderon",
//       "html_url": "https://github.com/Aszalea-Calderon",
//       "followers_url": "https://api.github.com/users/Aszalea-Calderon/followers",
//       "following_url": "https://api.github.com/users/Aszalea-Calderon/following{/other_user}",
//       "gists_url": "https://api.github.com/users/Aszalea-Calderon/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/Aszalea-Calderon/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/Aszalea-Calderon/subscriptions",
//       "organizations_url": "https://api.github.com/users/Aszalea-Calderon/orgs",
//       "repos_url": "https://api.github.com/users/Aszalea-Calderon/repos",
//       "events_url": "https://api.github.com/users/Aszalea-Calderon/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/Aszalea-Calderon/received_events",
//       "type": "User",
//       "site_admin": false,
//       "name": "Aszalea Calderon",
//       "company": null,
//       "blog": "",
//       "location": "Earth, California",
//       "email": null,
//       "hireable": null,
//       "bio": "I love creation, tech, travel, and playing games. ",
//       "twitter_username": null,
//       "public_repos": 65,
//       "public_gists": 0,
//       "followers": 18,
//       "following": 25,
//       "created_at": "2020-09-07T02:04:50Z",
//       "updated_at": "2021-01-11T17:15:57Z"
//       },
//       {
//         "login": "ahmedseragcodes",
//         "id": 70908925,
//         "node_id": "MDQ6VXNlcjcwOTA4OTI1",
//         "avatar_url": "https://avatars0.githubusercontent.com/u/70908925?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/ahmedseragcodes",
//         "html_url": "https://github.com/ahmedseragcodes",
//         "followers_url": "https://api.github.com/users/ahmedseragcodes/followers",
//         "following_url": "https://api.github.com/users/ahmedseragcodes/following{/other_user}",
//         "gists_url": "https://api.github.com/users/ahmedseragcodes/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/ahmedseragcodes/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/ahmedseragcodes/subscriptions",
//         "organizations_url": "https://api.github.com/users/ahmedseragcodes/orgs",
//         "repos_url": "https://api.github.com/users/ahmedseragcodes/repos",
//         "events_url": "https://api.github.com/users/ahmedseragcodes/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/ahmedseragcodes/received_events",
//         "type": "User",
//         "site_admin": false,
//         "name": "Ahmed Serag",
//         "company": "Lambda School",
//         "blog": "http://www.linkedin.com/in/AhmedCanAm",
//         "location": "Toronto, Ontario & Phoenix, AZ",
//         "email": null,
//         "hireable": true,
//         "bio": " Learning How to Make Interesting Things @ Lambda School. Experienced Advertiser. ",
//         "twitter_username": "AhmedCanAm",
//         "public_repos": 30,
//         "public_gists": 0,
//         "followers": 10,
//         "following": 22,
//         "created_at": "2020-09-07T16:14:54Z",
//         "updated_at": "2021-01-11T19:01:07Z"
//         }
//   ]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mainUserData: {},
      mainUserFollowerData: [],
      followerData: []
    }
  }

  componentDidMount(){
    // this.setState({
    //   mainUserData:testObj,
    //   mainUserFollowerData: testFollowers,
    //   followerData: testFollowerData
    // })
    fetchData('jaypdl')
      .then(res => {
        this.setState({
          mainUserData: res
        });
      });
    }
    
  componentDidUpdate(prevProps, prevState){
    console.log('prev state', prevState)
    if (this.state.mainUserData !== prevState.mainUserData) {  
      fetchData('jaypdl/followers')
        .then(res => {
        this.setState({
          mainUserFollowerData: res
        });
      });
    }

    if (this.state.mainUserFollowerData !== prevState.mainUserFollowerData) {
      this.state.mainUserFollowerData.map(follower => {
        return(
        fetchData(`${follower.login}`)
          .then(res => {
          this.setState({
            followerData: [...this.state.followerData, res]
          });
        })
      )})
    }
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub User Cards!</h1>
        </header>
          <CardList state={this.state} />
      </div>
    );
  }
}

export default App;
