function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let position = katzDeliLine.indexOf(name) +1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return 
  }
}