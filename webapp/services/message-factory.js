app.factory("Post", function($resource) {
  
  return $resource("messages.json");

});
