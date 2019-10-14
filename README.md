# PWA Scanner QR And Reader NFC

PWA are the evolution of web pages towards a technological ecosystem closer to that of a mobile or desktop application, installable in the operating system. This is developed to scan QR codes and read NFC triggers from the smartphone, It is also a way to exemplify the use of web technologies such as PWA, Webassembly (wasm), Webpack, Html5, CSS3, bootstrap and JavaScript to solve a specific problem, such as the need to access the camera of the smarphone to scan a QR code or access an NFC system to read its content.

# Usage

The PWA is very simple to use, simply on its main page it has two buttons, one to access the QR scanner and the other to the NFC reader.
 
Depending on the web browser accessing the URL of this PWA, it will automatically be suggested to install it as an icon on the desktop. If you are testing or using it directly and decide not to install it, you can always start the simple and safe installation process through the menu or toolbars, as the case may be, in browsers such as Chrome, FireFox, Opera and Safary that have a version updated for it.

Important note.- With respect to the NFC function of this App, as of 10/09/2019, the only browser that allowed (experimentally) access to the NFC system of the smartphone was the Chrome and had to activate the WebNFC flag, passing it to enable, from the following chl url: chrome://flags. It is suggested to update on this.

# Demo

First of all, it can be interesting to see live what PWA does. If this is the case and before using it, it is advisable to have access to a QR code to be able to scan it, with the Google image search engine, the word QR and a different device that we are going to use as a scanner it is easy and fast to obtain [QR code examples](https://www.google.com/search?q=qr&sxsrf=ACYBGNQvf2CHElh29Efs517GpRNnkVDWHQ:1571075556440&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj6v9PDqJzlAhUrDWMBHYD0CRcQ_AUIEigB&biw=1280&bih=650).

To test the NFC reader, it will have to be attached to a device containing such technology.

To go to the live demo follow this URL: [PWA-SCAN-QR-NFC](https://francisco-garcia-sosa.pro/pwa-scanner-qr-and-reader-nfc)

# Build / Deploy

It is important to generate an https certificate for local development and that when the tests are performed there are no errors when accessing the camera from the browser, for example. The main reason is that more and more HTML5 APIs require the use of HTTPS to work.

  - Checkout this repo to the required host in a servable directory (e.g. /var/www/html). Instructions on how to [clone a repository from GitHub](https://help.github.com/en/articles/cloning-a-repository).
  - Start your server (e.g. http-server, httpd start, etc)
  - Go to the required URL in the browser you would like to test (e.g. https://127.0.0.1:8080)


# Contributing

This project has been created from information obtained from the internet and repositories in GitHub, in addition to the corresponding hours for the love of art :).
A readme file that redirects to the original repository is included in the folders that contain a subproject or even two subprojects.

If you are interested in modifying this project and adapting it to other needs, it is recommended to minimize an introduction to technologies such as:

  - [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - [CCS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
  - [JavaScrtipt](https://en.wikipedia.org/wiki/JavaScript)
  - [PWA (Progressive Web App)](https://en.wikipedia.org/wiki/Progressive_web_applications)
  - [Webpack](https://en.wikipedia.org/wiki/Webpack)
  - [WebAssembly (wasm)](https://es.wikipedia.org/wiki/WebAssembly)

For a good contributing, please, see CONTRIBUTING.MD -- DT ref: https://github.com/ether/etherpad-lite/blob/develop/CONTRIBUTING.md

# Authors

  - Francisco Garcia Sosa
  - Please add others based on Github commits.

# Links

Post any problem in our bug tracker: https://github.com/DevFranGS/pwa-qr-nfc/issues/new

Post bug reports before posting negative comments, our community works hard to maintain this software, we welcome the comments and your help.

# Licensing

MIT See https://github.com/DevFranGS/pwa-qr-nfc/LICENSE
