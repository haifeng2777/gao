function isSub(ext){return"srt"==ext||"ass"==ext||"ssa"==ext}function getSize(size){return size<=0?"":1099511627776<size?(size/=1099511627776).toFixed(2)+"TB":1073741824<size?(size/=1073741824).toFixed(2)+"GB":1048576<size?(size/=1048576).toFixed(2)+"MB":(size/=1024).toFixed(2)+"KB"}function removeExt(text){return-1<text.indexOf(".")?text.substring(0,text.lastIndexOf(".")):text}async function log(str){}export{isSub,getSize,removeExt,log};