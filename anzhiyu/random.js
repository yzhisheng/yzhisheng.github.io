var posts=["posts/1fe0f6422996.html","posts/b1dca31f7085.html","posts/fe4543a6c78f.html","posts/6394f1287931.html","posts/1fa4f10759d6.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };