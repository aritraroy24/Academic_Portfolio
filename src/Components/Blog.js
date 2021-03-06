import React, { Component } from 'react';

class Blog extends Component {
  render() {

    if (this.props.data) {
      var blogs = this.props.data.blogs.map(function (blogs) {
        var blogImage = 'images/blog/' + blogs.image;
        return <div key={blogs.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a target="_blank" href={blogs.url} title={blogs.title}>
              <img alt={blogs.title} src={blogImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{blogs.title}</h5>
                  <p>{blogs.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i>
                <div className="blogdate">{blogs.date}</div>
              </div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Read My Blogs on Medium</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {blogs}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
