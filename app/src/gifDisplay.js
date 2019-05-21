class GifDisplay {

  constructor(client, url = "https://api.giphy.com/v1/gifs/search?") {
    this.url = url;
    this.gifResults
    this.client = client
  };

  execute() {
    this._listeners();

  };

  _listeners() {
    let that = this;
    $("form").on('submit', function (e) {
      that._getGifs();
      e.preventDefault();
    });
  }

  _getGifs(e) {
    let searchItem = document.getElementById('searchItem').value
    console.log(searchItem)
    let gifUrl = this.url + "api_key=<%= iparam.api_key.key %>&q=" + searchItem + "&limit=9&offset=0&rating=G&lang=en"
    this.client.request.get(gifUrl)
      .then(
        function(data) {
          console.log(data)
        },
        function(error) {

       }
     )
  }

};
