chrome.tabs.query({highlighted: true, currentWindow: true},function(tabs){
  let $textarea = $('<textarea></textarea>');
  let copy_text = '';
  for (let i = 0; i < tabs.length; i++) {
    let new_str = tabs[i].title.replace(/\[/g,'【').replace(/\]/g,'】');
    copy_text += '[' + new_str + ' ' + tabs[i].url + ']\n';
  }
  $textarea.text(copy_text);
  $('#copied').append($textarea);
  $textarea.select();
  document.execCommand('copy');
  $textarea.remove();
  $('#copied').text('copied!'); 
});
