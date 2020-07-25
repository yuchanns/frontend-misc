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
            <li class="card-detail">
              <svg class="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              <span class="card-label">Shenzhen, China</span>
            </li>
            <li class="card-detail">
              <svg class="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg>
              <span class="card-label">airamusume@gmail.com</span>
            </li>
            <li class="card-detail">
              <svg class="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
              <span class="card-label">后端开发工程师</span>
            </li>
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
            <img class="card-avatar" width='260' height='260' src="https://avatars0.githubusercontent.com/u/25029451" alt="yuchanns" />
          </div>
          <div class="card-name-container">
            <h1 class="card-names">
              <span class="card-name">科学搜查官</span>
              <span class="card-nickname">yuchanns</span>
            </h1>
          </div>
        </div>
        <div class="card-note">
          <div>Too much want to know, So little time to learn.</div>
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
          <span class="card-avatar-mini"><img class="card-avatar" width="32" height="32" src="https://avatars0.githubusercontent.com/u/25029451?s=460&u=1a3f348e3d0aff0b4d602899b63bf2e0b3140c5e&v=4" alt="yuchanns" /></span>
          <span class="card-name-mini"><strong>yuchanns</strong></span>
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
            <UserMini isShow={this.state.isShow} />
            <User />
            <Profile />
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
          <Card />
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
        navList: [
          { 'name': '首页', 'url': '/' },
          { 'name': '收录', 'url': '/awesome' },
          { 'name': '关于', 'url': '/readme' }
        ],
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
                {this.state.navList.map(item => {
                  return (
                      <NavLink exact className="nav-item" to={item.url} activeClassName="nav-item-selected">{item.name}</NavLink>
                  )
                })}
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
  constructor(props) {
    super(props)
    this.article = `<p>I'm yuchanns.</p><p><a href="https://github.com/yuchanns/github-readme-stats"><img src="https://camo.githubusercontent.com/aff1dab3b5d3bcc03fc228007dcadf9cdd2fdfce/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d79756368616e6e732673686f775f69636f6e733d74727565" alt="Anurag's github stats" data-canonical-src="https://github-readme-stats.vercel.app/api?username=yuchanns&amp;show_icons=true" style="max-width:100%;"></a></p><ul><li>I'm currently working on Shenzhen China.</li><li>I'm currently learning golang, lisp, k8s.</li><li>Ask me about php, js, docker, golang.</li><li>How to reach me:<ul><li>mail: airamusume@gmail.com</li><li>qq: 87260333</li></ul></li></ul>`
  }
  render() {
    return (
      <div>
        <div class="about-container head-block body-border">
          <div class="about-box">
            <div class="about-title">
              <div class="title-text">
                README<span class="text-gray-light">.md</span>
              </div>
            </div>
            <article class="about-content markdown-body mask" style={{'overflow-y': 'hidden'}} dangerouslySetInnerHTML={{ __html: this.article }}></article>
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
  render() {
    return (
      <div class="posts-item">
        <div class="posts-content">
          <div class="posts-info-container">
            <div class="posts-info-block">
              <div class="posts-date">
                <span class="posts-info-date-text">Posted {this.props.post.date}</span>
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
            {this.props.post.tags.map(tag => (
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
    this.timeline = [
      '2020',
      '2019',
      '2018',
    ];
    this.state = {
      selectedTime: this.timeline[0],
    }
    this.setSelectedTime = time => {
      this.setState({selectedTime: time})
    }
    this.posts = {
      '2020': [
        {
          title: 'Replacing net.DefaultResolver with a caching DNS over TLS/HTTPS resolver',
          date: '2 months ago',
          tags: ['golang', 'dns', 'https'],
          excerpt: `<p>DNS caching has been discussed multiple times in the past. The consensus seems to be that Go won't go there: <a href="https://github.com/golang/go/issues/24796">github.com/golang/go/issues/24796</a></p><p>I've seen a few DNS caching solutions for Go (<a href="https://github.com/rs/dnscache">one</a>, <a href="https://github.com/mercari/go-dnscache">two</a>), however, I haven't seen any implementations that allow replacing the <code>net.DefaultResolver</code>?</p><p>Package <a href="https://github.com/artyom/dot">github.com/artyom/dot</a> got me thinking if I could do the same for DNS caching, and also DNS over HTTPS.</p><p>So <a href="https://godoc.org/github.com/ncruces/go-dns">github.com/ncruces/go-dns</a> is my attempt. Replacing <code>net.DefaultResolver</code> with a caching DNS over HTTPS resolver using 1.1.1.1 as the name server should be this simple:</p><pre><code class="language-go">net.DefaultResolver = dns.NewCachingResolver(dns.NewHTTPSResolver(</code></pre>`,
        },
        {
          title: 'How to do something every 5 minutes in Go?',
          date: '2 months ago',
          tags: ['golang', 'timertick'],
          excerpt: `<p>I feel like it's a dummy question, but I want to ask it anyway since I do not have much experience with concurrent programming.</p><p>In the app I am currently working on, someone wrote a code that should do something (in this case, printing "TICK!") every, let's say 5 minutes:</p><pre><code class="language-go">go func() {
for {
   fmt.Println("TICK!")
   time.Sleep(5 * time.Minute)
}
}()</code></pre>`,
        }
      ],
    };
    this.timePosts = time => {
      return this.posts.hasOwnProperty(time) ? this.posts[time] : [];
    }
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
  render() {
    return (
      <React.Fragment>
        <Head />
        <Layout>
          <Top />
          <Search />
          <Archive />
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