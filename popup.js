chrome.tabs.query({},function(tabs){
  let $textarea = $('<textarea></textarea>');
  $textarea.text('[' + tabs[0].title + ' ' + tabs[0].url + ']');
  $('#copied').append($textarea);
  $textarea.select();
  document.execCommand('copy');
  $textarea.remove();
  $('#copied').text('[' + tabs[0].title + ' ' + tabs[0].url + ']'); 
});
