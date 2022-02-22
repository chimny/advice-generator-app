const adviceID = document.querySelector('.container h2');
const textID = document.querySelector('.container p');
const button = document.querySelector('button');

async function fetchFunction() {
    try{
        adviceID.innerText = 'loading...';
        textID.innerText = 'loading...';
        const res = (await fetch('https://api.adviceslip.com/advice'));
        const json = await res.json();
        adviceID.innerText = 'Advice #' + await json.slip.id;
        textID.innerText = "\""+ await json.slip.advice +"\"";
    }
    catch(e){
      console.error(`oh no ${e}`)
    }

}



button.addEventListener('click', fetchFunction)



