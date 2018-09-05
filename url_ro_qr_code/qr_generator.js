// chrome.tabs.getSelected(null, function(tab) {});

// chrome.tabs.getCurrent(function(tab) {
//   $("#qrcode").qrcode({ width: 128, height: 128, text: tab.url });
// });

chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    console.log(tabs[0].url);
    $("#qrcode").qrcode({ width: 128, height: 128, text: tabs[0].url });
});
