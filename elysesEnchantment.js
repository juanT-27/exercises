const cards= [1,2,3,4,5,8,7,3,7,8]

// o pick a card, return the card at index position from the given stack.
const getItem =(elements,itemIndex)=>{
return elements[itemIndex]
}

// Perform some sleight of hand and exchange the card at index position with the replacement card provided. Return the adjusted stack.
const setItem= (elements, position, newCard)=>{
    elements[position]= newCard;
    return elements
}

const addItemToStart= (elements, newElement) =>{
    elements.push(newElement)
    return elements
}

const removeItem= (elements, position, amount)=>{
elements.splice(position, amount)
    return elements
}

 function frontDoorPassword(word) {
    const upperCase= word[0].toUpperCase()
    const lowerCase= word.slice(1).toLowerCase();
    let completeWord= `${upperCase}${lowerCase}`
    return completeWord
  }

  function backDoor(word){
    const capitalizeLetter= `${frontDoorPassword(word)}, please`
    return capitalizeLetter
  }

console.log(backDoor("HELLO"))