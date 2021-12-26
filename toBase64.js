function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
  
  toDataURL('https://cdn.discordapp.com/attachments/571092147801948204/784586541146177606/6f32c864-985a-481d-8d8e-bd1f14ab9951.png', function(dataUrl) {
    console.log('RESULT:', dataUrl)
  })