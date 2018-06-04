var katzDeli=[]
var newName
var katzDeliLine=[]

function takeANumber(katzDeliLine,newName){
  
    katzDeliLine.push(newName)
    return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(!katzDeliLine){
     return "There is nobody waiting to be served!"
}
else{
  return `Currently serving ${katzDeliLine.shift()}.`
}

}

function currentLine(katzDeliLine){
  var i
  if(!katzDeliLine){
        return "The line is currently empty."
  }
  else{
    
  do{

    return `"The line is currently: ${i+1}. ${katzDeliLine[i]}"`
    i++
  }
  while(i<katzDeliLine.length+1)
}
}