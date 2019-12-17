export function loadFbSdk () {
  return new Promise(resolve => {
    window.fbAsyncInit = function() {
      FB.init({
        appId            : '947739745402761',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.1'
      });
    };
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  })
}

// export function fbAsyncInit (options) {
//   FB.init(options)
//   FB.AppEvents.logPageView()
//   Vue.FB = FB
//   window.dispatchEvent(new Event('fb-sdk-ready'))
// }

// export function loadFbSdk () {
//   return new Promise(resolve => {
//     window.fbAsyncInit = function() {
//       FB.init({
//         appId            : '947739745402761',
//         autoLogAppEvents : true,
//         xfbml            : true,
//         version          : 'v2.12'
//       });
//     };
//     (function (d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0]
//       if (d.getElementById(id)) return
//       js = d.createElement(s)
//       js.id = id
//       js.src = "https://connect.facebook.net/en_US/sdk.js"
//       fjs. parentNode.insertBefore(js, fjs)
//     }(document, 'script', 'facebook-jssdk'));
//   })
// }
const vueFb = {}
vueFb.install = function install (Vue, options) {
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) { return }
    js = d.createElement(s)
    js.id = id
    js.src = "//connect.facebook.net/en_US/sdk.js"
    fjs.parentNode.insertBefore(js, fjs)
    console.log('setting fb sdk')
  }(document, 'script', 'facebook-jssdk'))

  window.fbAsyncInit = function onSDKInit () {
    FB.init(options)
    FB.AppEvents.logPageView()
    Vue.FB = FB
    window.dispatchEvent(new Event('fb-sdk-ready'))
  }
}

export default vueFb
