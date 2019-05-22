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
      that._clearGifs();
      that._getGifs();
      e.preventDefault();
    });
  }

  _getGifs(e) {
    let that = this
    let searchItem = document.getElementById('searchItem').value
    console.log(searchItem)
    let gifUrl = this.url + "api_key=<%= iparam.api_key.key %>&q=" + searchItem + "&limit=9&offset=0&rating=G&lang=en"
    this.client.request.get(gifUrl)
      .then(
        function(gifsData) {
          that.gifResults = JSON.parse(gifsData.response)
          that._displayGifs()
        },
        function(error) {
        }
     )
  }

  _displayGifs() {
    console.log(this.gifResults.data)
    this.gifResults.data.forEach(function(element) {
      let elem = document.createElement("img")
      elem.src = element.images.fixed_width.url
      document.getElementById("gifs").appendChild(elem)
    })

  }

  _clearGifs() {
    document.getElementById("gifs").innerHTML = ""
  }

};
