var postRandomizer = function() {

  var postList   = $(".post-link[href]"),
      postItems  = postList.length,
      postRandom = postList[Math.floor(Math.random() * postItems)];

  $("#random-post").attr("href", postRandom);

};
