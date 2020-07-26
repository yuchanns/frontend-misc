var allData = {
  navList: [
    { 'name': '首页', 'url': '/' },
    { 'name': '收录', 'url': '/awesome' },
    { 'name': '关于', 'url': '/readme' }
  ],
  user: {
    avatar: 'https://avatars0.githubusercontent.com/u/25029451',
    name: 'yuchanns',
    nick: '科学搜查官',
    desc: 'Too much want to know, So little time to learn.',
    detail: {
      location: 'Shenzhen, China',
      mail: 'airamusume@gmail.com',
      job: '后端开发工程师',
    },
  },
  posts: [
    {
      title: 'Replacing net.DefaultResolver with a caching DNS over TLS/HTTPS resolver',
      excerpt: `<p>DNS caching has been discussed multiple times in the past. The consensus seems to be that Go won't go there: <a href="https://github.com/golang/go/issues/24796">github.com/golang/go/issues/24796</a></p><p>I've seen a few DNS caching solutions for Go (<a href="https://github.com/rs/dnscache">one</a>, <a href="https://github.com/mercari/go-dnscache">two</a>), however, I haven't seen any implementations that allow replacing the <code>net.DefaultResolver</code>?</p><p>Package <a href="https://github.com/artyom/dot">github.com/artyom/dot</a> got me thinking if I could do the same for DNS caching, and also DNS over HTTPS.</p><p>So <a href="https://godoc.org/github.com/ncruces/go-dns">github.com/ncruces/go-dns</a> is my attempt. Replacing <code>net.DefaultResolver</code> with a caching DNS over HTTPS resolver using 1.1.1.1 as the name server should be this simple:</p><pre><code class="language-go">net.DefaultResolver = dns.NewCachingResolver(dns.NewHTTPSResolver(</code></pre>`,
      frontmatter: {
        tags: ['golang', 'dns', 'https'],
        date: 'Wed, 13 May 2020 06:12:07 GMT+0800',
      },
    },
    {
      title: 'How to do something every 5 minutes in Go?',
      excerpt: `<p>I feel like it's a dummy question, but I want to ask it anyway since I do not have much experience with concurrent programming.</p><p>In the app I am currently working on, someone wrote a code that should do something (in this case, printing "TICK!") every, let's say 5 minutes:</p><pre><code class="language-go">go func() {
  for {
    fmt.Println("TICK!")
    time.Sleep(5 * time.Minute)
  }
}()</code></pre>`,
      frontmatter: {
        tags: ['golang', 'timertick'],
        date: 'Wed, 13 May 2020 10:10:05 GMT+0800',
      },
    },
    {
      title: '用redis做队列',
      excerpt: `<p>最近做一个小型项目，因为<strong>rabbitMQ</strong>等专业软件比较重，故团队决定采用<strong>redis</strong>实现一个轻量的队列。</p><h3>目标</h3><p>在这篇文章中，你可以获得：</p><ul><li><code>redigo</code>包的基本用法</li><li>初步认知<code>context</code>包的作用</li><li>了解一个功能模块的实现思路以及如何逐步完善的步骤</li><li><strong>Go</strong>特性(<code>select</code>、<code>channel</code>和<code>goroutine</code>)的利用</li></ul><p>最终代码量大概265行左右。</p>`,
      frontmatter: {
        tags: ['golang', 'redis', 'queue'],
        date: 'Wed, 25 Dec 2019 15:30:15 GMT+0800',
      },
    },
    {
      title: '读《Go语言学习笔记》',
      excerpt: `<p>阅读《Go语言学习笔记》随手摘抄——</p><h3>数据</h3><ul><li><p>退化赋值操作：前提条件：至少有一个新变量被定义，且必须是同一作用域</p><pre><code class="language-go">func main() {
  x := 100  // 定义新变量
  println(&amp;x)

  x, y := 200, "abc"  // 只有y是被定义的新变量

  println(&amp;x, x)
  println(y)</code></pre></li></ul>`,
      frontmatter: {
        tags: ['golang', 'study'],
        date: 'Thu, 19 Sep 2019 14:19:47 GMT+0800',
      },
    },
    {
      title: 'README',
      excerpt: `<p>I'm yuchanns.</p><p><a href="https://github.com/yuchanns/github-readme-stats"><img src="https://camo.githubusercontent.com/aff1dab3b5d3bcc03fc228007dcadf9cdd2fdfce/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d79756368616e6e732673686f775f69636f6e733d74727565" alt="Anurag's github stats" data-canonical-src="https://github-readme-stats.vercel.app/api?username=yuchanns&amp;show_icons=true" style="max-width:100%;"></a></p><ul><li>I'm currently working on Shenzhen China.</li><li>I'm currently learning golang, lisp, k8s.</li><li>Ask me about php, js, docker, golang.</li><li>How to reach me:<ul><li>mail: airamusume@gmail.com</li><li>qq: 87260333</li></ul></li></ul>`,
      frontmatter: {
        top: true,
        tags: ['readme'],
        date: 'Sat, 01 Oct 2016 12:00:00 GMT+0800',
      },
    },
  ]
}