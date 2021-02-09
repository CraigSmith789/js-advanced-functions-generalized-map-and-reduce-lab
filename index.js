// Add your functions here
function map(ary, blk){
  let a = []
  for(let i = 0; i < ary.length; i++){
    let r = blk(ary[i])
    a.push(r)

  }
  return a
}
function reduce(ary, blk, stp ){
  let i = 1;
  let s = ary[0];
  if (!!stp){
    s = stp ;
    i = 0;
  
  }     
  
  for(; i < ary.length; i++){
    s = blk(ary[i],s);              
  }
  return s;
}
