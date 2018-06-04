var katzDeli=[]
var newName
var katzDeliLine=[]

function takeANumber(katzDeliLine,newName){
  
    katzDeliLine.push(newName)
    return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(!katzDeliLine){
    return
  }
  
  var i=0
  while (i<katzDeliLine.length){
  if(katzDeliLine.length>0){
  return `Currently serving ${katzDeliLine[i]}.`
  katzDeliLine.shift()
  i++
}
else{
  return "There is nobody waiting to be served!"
}
}

}
function currentLine(katzDeliLine){
var i
if (katzDeliLine.length>0){
  for (i=0;i<katzDeliLine.length;i++){
    return `"The line is currently: ${i+1}. ${katzDeliLine[i]}"`
  }
}
  else {
    return "The line is currently empty."
  }
}