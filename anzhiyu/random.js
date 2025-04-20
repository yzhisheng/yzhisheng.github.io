var posts=["面试题/Redis/Redis面试题集合/","uncategorized/HelloWorld/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };