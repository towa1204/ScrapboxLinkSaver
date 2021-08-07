chrome.tabs.query({highlighted: true, currentWindow: true},function(tabs){
  let $textarea = $('<textarea></textarea>');
  let copy_text = '';
  for (let i = 0; i < tabs.length; i++) {
    let newStr = tabs[i].title.replace('[','【').replace(']','】');
    copy_text += '[' + newStr + ' ' + tabs[i].url + ']\n';
  }
  $textarea.text(copy_text);
  $('#copied').append($textarea);
  $textarea.select();
  document.execCommand('copy');
  $textarea.remove();
  $('#copied').text('copied!'); 
});
