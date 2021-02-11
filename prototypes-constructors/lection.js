// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
function Messenger(name) {
  this.name = name;
}

Messenger.prototype.say = function (message) {
  console.log(`[${this.name}]: ${message}`);
};

function HtmlMessenger(name, logo) {
  // {}
  Messenger.call(this, name); // { name: }

  this.logo = logo || this.name.slice(0, 1).toUpperCase();
}

HtmlMessenger.prototype = Object.create(Messenger.prototype);
HtmlMessenger.prototype.constructor = HtmlMessenger;

HtmlMessenger.prototype.say = function (message, toHtml) {
  if (toHtml) {
    document.body.innerHTML += message;
  } else {
    Messenger.prototype.say.call(this, message);
  }
};

const telegram = new Messenger('telegram');
const whatsapp = new HtmlMessenger('whatsapp');

window.telegram = telegram;
window.whatsapp = whatsapp;
