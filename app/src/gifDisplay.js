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
      e.preventDefault();
    });
  }

};
