var posts=["posts/1fe0f6422996.html","posts/6394f1287931.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };