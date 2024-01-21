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

console.log(cards)
console.log(addItemToStart(cards, 900))