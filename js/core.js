function format(txt,tagstart,tagend)
{
if(txt.setSelectionRange)
{
txt.value=txt.value.substring(0,txt.selectionStart)+tagstart+txt.value.substring(txt.selectionStart,txt.selectionEnd)+tagend+txt.value.substring(txt.selectionEnd,txt.value.length)
}else{
var selectedText=document.selection.createRange().text;
if(selectedText!="")
{
var newText=tagstart+selectedText+tagend;
document.selection.createRange().text=newText;
}}}

