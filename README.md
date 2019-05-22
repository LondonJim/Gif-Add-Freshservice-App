# Gif Selector

Freshservice widget that displays gifs based on user search option. Because of site origin restrictions, at this time clicking on them doesn't insert them into a message.

Create your own app here:
https://developers.freshservice.com/docs/quick-start/

## Installation

You must have a freshservice account to access the freshservice helpdesk site. Also

```
git clone git@github.com:LondonJim/Gif-Add-Freshservice-App.git
```

Add folder `config` and create files `iparam_test_data.json` and `iparams.json`. For dev and testing purposes only use the `iparam_test_data.json` file to place variables.

This app uses an api that requires a key from https://developers.giphy.com/, it can be placed in this file:

```
{ "api_key": {
    "key": "your key here",
    "secure": true
  }
}
```

To run the app `fdk run`

Open up your freshservice helpdesk site, navigate to tickets, click on a ticket, add `?dev=true` to the end of the url. The widget will appear on the sidebar.


## Using the secret variable

When using external sites/apis within this app you must use `request`. As you can see the secret variable has been passed in to url: `<%= iparam.api_key.key %>`

```
let gifUrl = this.url + "api_key=<%= iparam.api_key.key %>&q=" + searchItem + "&limit=9&offset=0&rating=G&lang=en"
this.client.request.get(gifUrl)
  .then(
    function(gifsData) {
      // do something with the gifsData
    },
    function(error) {
      // do something with an error
    }
 )
```
