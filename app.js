'use strict';
var { NavLink, HashRouter, Route, browserHistory } = window.ReactRouterDOM;

class Background extends React.Component {
  render() {
    return (
      <div class="body"></div>
    )
  }
}

class Profile extends React.Component {
  render() {
    return (
      <div class="card-profile">
        <div class="card-profile-container">
          <ul class="card-details">
            {this.props.detail.hasOwnProperty('location') &&
            <li class="card-detail">
              <svg class="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              <span class="card-label">{this.props.detail.location}</span>
            </li>}
            {this.props.detail.hasOwnProperty('mail') &&
            <li class="card-detail">
              <svg class="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg>
              <span class="card-label">{this.props.detail.mail}</span>
            </li>}
            {this.props.detail.hasOwnProperty('job') &&
            <li class="card-detail">
              <svg class="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
              <span class="card-label">{this.props.detail.job}</span>
            </li>}
          </ul>
        </div>
      </div>
    )
  }
}

class User extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="clearfix card-user">
          <div class="card-avatar-container">
            <img class="card-avatar" width='260' height='260' src={this.props.user.avatar} alt={this.props.user.name} />
          </div>
          <div class="card-name-container">
            <h1 class="card-names">
              <span class="card-name">{this.props.user.nick}</span>
              <span class="card-nickname">{this.props.user.name}</span>
            </h1>
          </div>
        </div>
        <div class="card-note">
          <div>{this.props.user.desc}</div>
        </div>
      </React.Fragment>
    )
  }
}

class UserMini extends React.Component {
  render() {
    return (
      <div class="card-sticky-bar" style={{display: this.props.isShow ? 'block' : 'none'}}>
        <div class="card-user-mini">
          <span class="card-avatar-mini"><img class="card-avatar" width="32" height="32" src={this.props.avatar} alt={this.props.name} /></span>
          <span class="card-name-mini"><strong>{this.props.name}</strong></span>
        </div>
      </div>
    )
  }
}

class Card extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        isShow: false,
      }
  }
  componentDidMount() {
    const cardNameContainer = document.querySelector('.card-name-container')
    window.addEventListener('scroll', () => {
      this.setState({isShow: cardNameContainer.getBoundingClientRect().bottom <= 0})
    });
  }
  render() {
    return (
      <div class="head-block-user">
        <div class="block head-block body-border">
          <div class="card">
            <UserMini isShow={this.state.isShow} name={this.props.user.name} avatar={this.props.user.avatar} />
            <User user={this.props.user} />
            <Profile detail={this.props.user.detail} />
          </div>
        </div>
      </div>
    )
  }
}

class Layout extends React.Component {
  render() {
    return (
      <div class="container body-container">
        <Background />
        <div class="head-inner">
          <Card user={this.props.user} />
          <div class="block head-block-nav main-container">
          {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

class Head extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedIdx: 0
      }
      this.switchTab = idx => {
        this.setState({selectedIdx: idx})
      }
  }
  render() {
    return (
      <div class="head">
        <div class="container">
          <div class="head-inner">
            <div class="head-block head-block-user"></div>
            <div class="head-block head-block-nav">
              <div class="nav-container">
                <nav class="nav-body">
                {this.props.navList.map(item => (
                  <NavLink exact className="nav-item" to={item.url} activeClassName="nav-item-selected">{item.name}</NavLink>
                ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div class="search-container body-border">
      	<div class="search-body">
      		<div class="search-box">
      			<input type="search" class="search-input" placeholder="Find a post..." />
      		</div>
      		<div class="search-options">
      			<div class="search-btn-box"><button class="search-btn"><i>Category:</i> All</button></div>
      			<div class="search-btn-box"><button class="search-btn"><i>Tag:</i> All</button></div>
            <a class="search-btn-box" href="https://www.algolia.com/?utm_source=react-instantsearch&utm_medium=website&utm_content=&utm_campaign=poweredby" dangerouslySetInnerHTML={{ __html: algoliaSvg }}></a>
          </div>
        </div>
      </div>
    )
  }
}

class Top extends React.Component {
  render() {
    return (
      <div>
        <div class="about-container head-block body-border">
          <div class="about-box">
            <div class="about-title">
              <div class="title-text">
                {this.props.post.title}<span class="text-gray-light">.md</span>
              </div>
            </div>
            <article class="about-content markdown-body mask" style={{'overflow-y': 'hidden'}} dangerouslySetInnerHTML={{ __html: this.props.post.excerpt }}></article>
          </div>
        </div>
      </div>
    )
  }
}

class TimeLine extends React.Component {
  render() {
    return (
      <div class="years-container">
        <div class="years-block">
          <div class="years-timeline">
            <ul class="years-list">
            {this.props.timeline.map(time => {
              var timeClass = 'years-item';
              if (time == this.props.time) {
                timeClass = `${timeClass} selected`;
              }
              return (
                <li><span className={timeClass} onClick={() => {
                  this.props.setTime(time)
                }}>{time}</span></li>
              )
            })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.format = date => {
      return moment(date).fromNow();
    }
  }
  render() {
    return (
      <div class="posts-item">
        <div class="posts-content">
          <div class="posts-info-container">
            <div class="posts-info-block">
              <div class="posts-date">
                <span class="posts-info-date-text">Posted {this.format(this.props.post.frontmatter.date)}</span>
              </div>
            </div>
          </div>
          <div class="posts-title-container">
            <div class="posts-title-block">
              <div class="posts-title-box">
                <h3 class="posts-title-text">{this.props.post.title}</h3>
              </div>
            </div>
          </div>
          <div class="posts-main-container">
            <div class="posts-main-block mask">
              <div class="markdown-body" dangerouslySetInnerHTML={{__html: this.props.post.excerpt}}></div>
            </div>
          </div>
          <div class="posts-topics-container">
            <div class="posts-topics-block">
            {this.props.post.frontmatter.tags.map(tag => (
              <a class="posts-topics-tag" href="">{tag}</a>
            ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Posts extends React.Component {
  render() {
    return (
      <div class="posts-list">
        <div class="posts-box">
        {this.props.posts.map(post => (
         <Post post={post} />
        ))}
        </div>
      </div>
    )
  }
}

class Archive extends React.Component {
  constructor(props) {
    super(props);
    var timelinePosts = {};
    this.props.posts.forEach(post => {
      var year = moment(post.frontmatter.date).format('YYYY');
      if (!timelinePosts.hasOwnProperty(year)) {
        timelinePosts[year] = [];
      };
      timelinePosts[year].push(post);
    });
    this.timeline = Object.keys(timelinePosts);
    this.timeline.sort((a, b) => {
      return b - a;
    });
    this.state = {
      selectedTime: this.timeline.length > 0 ? this.timeline[0] : 0,
    };
    this.setSelectedTime = time => {
      this.setState({selectedTime: time});
    };
    this.posts = {};
    this.timeline.forEach(time => {
      var posts = timelinePosts[time];
      posts.sort((a, b) => {
        var btimestamp = new Date(b.frontmatter.date).valueOf();
        var atimestamp = new Date(a.frontmatter.date).valueOf();
        return btimestamp - atimestamp;
      });
      this.posts[time] = posts;
    })
    this.timePosts = time => {
      return this.posts.hasOwnProperty(time) ? this.posts[time] : [];
    };
  }
  render() {
    return (
      <div class="posts-container">
        <div style={{display: 'flex'}}>
          <Posts posts={this.timePosts(this.state.selectedTime)} />
          <TimeLine timeline={this.timeline} setTime={this.setSelectedTime} time={this.state.selectedTime} />
        </div>
      </div>
    )
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    var topPosts = allData.posts.filter(post => {
      return post.frontmatter.hasOwnProperty('top');
    });
    this.topPost = topPosts.length > 0 ? topPosts[0]: {};
  }
  render() {
    return (
      <React.Fragment>
        <Head navList={allData.navList} />
        <Layout user={allData.user}>
          {Object.keys(this.topPost).length > 0 && <Top post={this.topPost} />}
          <Search />
          <Archive posts={allData.posts} />
        </Layout>
      </React.Fragment>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route exact path='/' component={Home}></Route>
        <Route path='/awesome' component={Home}></Route>
        <Route path='/readme' component={Home}></Route>
      </HashRouter>
    )
  }
}

const domContainer = document.querySelector('#atelier')
ReactDOM.render(<App />, domContainer);