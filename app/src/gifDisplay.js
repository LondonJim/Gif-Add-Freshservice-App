class GifDisplay {

  constructor(client, url = "https://api.giphy.com/v1/gifs/search?") {
    this.url = url
    this.gifResults
    this.client = client
  }

  execute() {
    this._listeners()

  }

  _listeners() {
    let that = this
    $("form").on('submit', function (e) {
      that._clearGifs()
      that._getGifs()
      e.preventDefault()
    })
  }

  _getGifs(e) {
    let that = this
    let searchItem = document.getElementById('searchItem').value
    let gifUrl = this.url + "api_key=<%= iparam.api_key.key %>&q=" + searchItem + "&limit=10&offset=0&rating=G&lang=en"
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
    let that = this
    let num = 0
    this.gifResults.data.forEach(function(element) {
      let elem = document.createElement("img")
      elem.id = `image${num}`
      elem.src = element.images.fixed_width.url
      elem.addEventListener("click", function() { that._addToMessage(element.images.fixed_width.url)})
      document.getElementById("gifs").appendChild(elem)
      num++
    })

  }

  _clearGifs() {
    document.getElementById("gifs").innerHTML = ""
  }

  // doesn't work due to not being able to access a cross-origin frame.
  _addToMessage(element) {
    let newImage = $(`<img src="${element}" alt="Symbol">`)
    top.document.getElementsByClassName("redactor_editor")[0].getElementsByTagName("p")[1].append(newImage)
  }

}
