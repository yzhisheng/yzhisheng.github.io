var posts=["posts/1fe0f6422996.html","posts/b1dca31f7085.html","posts/1fa4f10759d6.html","posts/bb0592610b44.html","posts/a703f5ddf12f.html","posts/79dc5bb335bb.html","posts/6394f1287931.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };