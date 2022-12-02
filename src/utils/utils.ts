import { Message } from "../interfaces/IMessages";

export function getRandomValue(array: string | any[]) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Clear Container range contents of template code when the web component is connected to the DOM
 */
 export function clearContents(myNode: HTMLElement): void {
  // using range as mostly we use the Host tag to encapsulate HTMLElements
  let range = document.createRange();
  range.selectNodeContents(myNode);
  range.deleteContents();
}

export const animateCSS = (node: Element, animation: string, prefix: string = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, _reject) => {
    const animationName = `${prefix}${animation}`

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    const handleAnimationEnd = (event: Event) => {
      event.stopPropagation()
      console.log(node.classList)
      node.classList.remove(`${prefix}animated`, animationName)
      resolve('Animation ended')
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true })
  })


export function shuffleMessages(messages: Message[]) {
  let clone = [...messages]
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone
}

export function stringGen() {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

// rename vars 
/*function camelize(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}*/

function loadFromIndexedDB( id: string){
  return new Promise(
    function(resolve, reject) {
      var dbRequest = indexedDB.open('keyval-store');

      dbRequest.onerror = function() {
        reject(Error('IDB Connection error'));
      };

      dbRequest.onupgradeneeded = function(event: any) {
        // Objectstore does not exist. Nothing to load
        event.target.transaction.abort();
        reject(Error('IDB Not found'));
      };

      dbRequest.onsuccess = function(event:any) {
        var database      = event.target.result;
        var transaction   = database.transaction('keyval');
        var objectStore   = transaction.objectStore('keyval');
        var objectRequest = objectStore.get( id );

        objectRequest.onerror = function() {
          reject(Error(`${id} no IDB data`));
        };

        objectRequest.onsuccess = function() {
          if (objectRequest.result) resolve(objectRequest.result);
          else reject(Error(`${id} not in IDB`));
        };
      };
    }
  );
}

export function anonymize(name:any) {
  let names = name
    .toUpperCase()
    .split(/[\s_-]+/) // space and underscore
  if(names.length){
    names.forEach((element: string, index)  => {
      names[index] = element.charAt(0) + '.'
    })  
    return names.join(' ')    
  }    
  return ''
}

export async function getIDBKey (key: string) {
  return await loadFromIndexedDB( key ).then(function (reponse) {
      return reponse;
    }).catch(function (error) {
      console.debug(error.message)
      return {data:[]}
    });
}