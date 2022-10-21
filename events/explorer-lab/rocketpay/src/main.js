import "./css/index.css"
import IMask from 'imask';

// Pegar cores e logo do cartão.
const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    apple: ["black", "grey"],
    default: ["black", "grey"],
  }

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`) // Logo alterado de acordo com nome da imagem.
}

globalThis.setCardType = setCardType

// Masks

// Security Code
const securityCode= document.querySelector("#security-code")
const securityCodePattern = { // Pattern = padrão, para definir o padrão.
  mask: "0000"
}

const securityCodeMasked = IMask(securityCode, securityCodePattern) // Depois de ter passado pelo iMask.

// Expiry date
const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2), // new date().getFullYear() recebe 2022, slice pega os 2 números, string transforma tudo em string.
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
}

const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

const cardNumber = document.querySelector("#card-number")
const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardtype: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardtype: "mastercard",
    },
    {
      mask: "0000 0000 0000 0000",
      cardtype: "default",
    },
  ],
  dispatch: function (appended, dynamicMasked) { // function executada toda as vezes que for digitado algo no cardNumber.
    const number = (dynamicMasked.value + appended).replace(/\D/g, "") // replace de \D (tudo que não é dígito) por vazio, então não aparece nada se digitar uma letra.
    const foundMask = dynamicMasked.compiledMasks.find(function (item) {
      return number.match(item.regex)
    })
    console.log(foundMask)
    return foundMask
  }, 
}

const cardNumberMasked = IMask(cardNumber, cardNumberPattern)

// Pegar evento de clicar no button do form.
const addButton = document.querySelector("#add-card")
addButton.addEventListener("click", () => {
  alert("Cartão adicionado")
})

// Cancelar evento padrão de atualizar a página ao clicar no button do form. 
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault()
})

// Alterar nome escrito no cartão conforme é digitado
const cardHolder = document.querySelector("#card-holder")
cardHolder.addEventListener("input", () => {
  const ccHolder = document.querySelector(".cc-holder .value")

  ccHolder.innerText = cardHolder.value.length === 0 ? "DIEGO MARTINELLI MAGNO" : cardHolder.value // Exibir algo caso nada esteja digitado. Meu cardHolder.value.length é 0 (vazio), deixa escrito Diego Martinelli Magno : (caso contrário), coloca o que foi digitado 
})

// Quero capturar esse conteúdo se as regras dele tiverem sido cumpridas de acordo com o que foi definido na máscara.
// .on para utilizar o conteúdo desse input.  
securityCodeMasked.on("accept", () => {
  updateSecurityCode(securityCodeMasked.value); // valor do código de segurança
})

function updateSecurityCode(code){
  const ccSecurity = document.querySelector(".cc-security .value");
  ccSecurity.innerText = code.length === 0 ? "123" : code
}

// .on para ficar observando se o input onde o número do cartão digitado é aceito ("accept").
cardNumberMasked.on("accept", () => {
  updateCardNumber(cardNumberMasked.value); // valor do cartão
})

function updateCardNumber(number){
  const ccNumber = document.querySelector(".cc-number");
  // ccNumber.innerText = number === "" ? "1234 5678 9012 3456" : number
  ccNumber.innerText = number.length === 0 ? "1234 5678 9012 3456" : number
}