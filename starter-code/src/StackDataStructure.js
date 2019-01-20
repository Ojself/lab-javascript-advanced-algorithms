

//////Stack
function StackDataStructure () {
  this.stackControl=[];
  this.MAX_SIZE=10;
}

StackDataStructure.prototype.isEmpty = function(){
  if(this.stackControl.length === 0)
    return true;
  return false;
}

StackDataStructure.prototype.canPush = function(){
  return this.stackControl.length < this.MAX_SIZE
    
}

StackDataStructure.prototype.push = function(lastElement){
  if(this.canPush()){
    this.stackControl.push(lastElement);
    return this.stackControl;
  }
  return "Stack Overflow";
}

StackDataStructure.prototype.pop = function(){
  if(this.stackControl.length<=0)
    return "Stack Underflow";
  lastElement=this.stackControl[this.stackControl.length-1];
  this.stackControl.splice(this.stackControl.length-1,1);
  return lastElement;
}

StackDataStructure.prototype.clear = function(){
  while(!this.isEmpty())
    this.pop();
}