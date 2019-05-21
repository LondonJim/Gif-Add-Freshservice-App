runMain = (client) => {
  gifDisplay = new GifDisplay(client);
  gifDisplay.execute()
}

$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          var client = _client;
          client.events.on('app.activated',
            function() {
              runMain(client)
            });
        });
});
