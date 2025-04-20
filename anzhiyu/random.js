var posts=["uncategorized/HelloWorld/","面试题/Redis/Redis面试题集合/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };