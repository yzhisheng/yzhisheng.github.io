var posts=["posts/1fe0f6422996.html","posts/6394f1287931.html","posts/f68ef47ec248.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };