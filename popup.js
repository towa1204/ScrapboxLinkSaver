chrome.tabs.query({},function(tabs){
  let $textarea = $('<textarea></textarea>');
  let copy_text = '';
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].highlighted === true) {
      copy_text += '[' + tabs[i].title + ' ' + tabs[i].url + ']\n';
    }
  }
  $textarea.text(copy_text);
  $('#copied').append($textarea);
  $textarea.select();
  document.execCommand('copy');
  $textarea.remove();
  $('#copied').text('copied!'); 
});
