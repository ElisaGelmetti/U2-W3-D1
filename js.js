const Person = function(){
    this.fistName=''
    this.lastName=''
    this.greet= function(){
        return "x è più vicchio di " + this.firstName
    }
}
const p1 = new Person()
p1.firstName="y"
console.log(p1.greet()) 




// campo nome
const firstnameInput = document.getElementById('firstname-field')
// campo cognome
const surnameInput = document.getElementById('surname-field')
// campo telefono
const speciesInput = document.getElementById('species-field')

// creo la mia lista di contatti
const contacts = []

class Contact {
  constructor(_firstname, _surname, _species) {
    this.firstname = _firstname
    this.surname = _surname
    this.species = _species
  }
}

const renderList = function () {
 
  const contactsList = document.querySelector('ul')

  contactsList.innerHTML = ''
 
  contacts.forEach((contact) => {
   
    const newLi = document.createElement('li')
   
    newLi.innerText = `${contact.firstname} ${contact.surname} - ${contact.species}`
  
    contactsList.appendChild(newLi)
  })
}
const formReference = document.querySelector('form')
formReference.addEventListener('submit', function (e) {
  e.preventDefault() 
  const newContact = new Contact(
    firstnameInput.value,
    surnameInput.value,
    speciesInput.value
  )  renderList()
})