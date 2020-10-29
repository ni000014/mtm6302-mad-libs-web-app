const stories = [
  {
    title: 'Mission Statement',
    words: [
      'Adjective',
      'Verb 1',
      'Verb 2',
      'Plural Noun 1',
      'Plural Noun 2',
      'Plural Noun 3'
    ],
    output: function (words) {
      return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
    }
  },
  {
    title: 'Lunch Room!',
    words: [
      'Animal',
      'Adjective 1',
      'Adjective 2',
      'Vegetable 1',
      'Vegetable 2',
      'Noun',
      'Container'
    ],
    output: function (words) {
      return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
    }
  },

  {
    title: 'Weather Report',
    words: [
      'Adjective 1',
      'Adjective 2',
      'Article of Clothing',
      'Number 1',
      'Number 2',
      'Plural Noun 1',
      'Plural Noun 2'
    ],
    output: function (words) {
      return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
    }
  }
]

// for (let word of stories[0].words){
//   console.log(`<input type='text' name='${word.split(' ').join('')}'>`)
// }




//put story titles into the buttons 
const $button = document.querySelectorAll('button')
//console.log($button)
for (let i=0; i<stories.length; i++){  
  $button[i].textContent=stories[i].title  
}

//insert inputs into the form  (using if...else or switch)
/*
const $form = document.querySelector('form')
let inputs= []

function switchForm(type){
  inputs = []
  if (type === 'missionWords'){
    for (let word of stories[0].words){
      inputs.push(`<input type='text name='${word}' placeholder='${word}'>`)
    } 
    $form.innerHTML= inputs.join('')
    console.log('hi1')
  } else if (type === 'lunchWords'){
      for (let word of stories[1].words){
        inputs.push(`<input type='text name='${word}' placeholder='${word}'>`)
      } 
      $form.innerHTML= inputs.join('')
      console.log('hi2')
    } else if (type === 'weatherWords'){
        for (let word of stories[2].words){
        inputs.push(`<input type='text name='${word}' placeholder='${word}'>`)
        } 
        $form.innerHTML= inputs.join('')
        console.log('hi3')
      }
}
*/

$form = document.querySelector('form')
$container = document.querySelector('.container')
$formContainer = document.querySelector('.formContainer')
$final=document.querySelector('.final')
let inputs=[]
let outputWords = {}
let typeFlag;

function addForm(type){
  inputs = []
  typeFlag = type
  console.log(typeFlag)
  switch (type){
    case 'missionWords':
      for (let word of stories[0].words){ 
        inputs.push(`<input type='text' name='${word}' placeholder='${word}' id='${word.split(' ').join('')}'>`)
      } 
      $form.innerHTML= inputs.join('')
      break;
    case 'lunchWords':
      for (let word of stories[1].words){
        inputs.push(`<input type='text' name='${word}' placeholder='${word}' id='${word.split(' ').join('')}'>`)
      } 
      $form.innerHTML= inputs.join('')  
      break;
    case 'weatherWords':
      for (let word of stories[2].words){
        inputs.push(`<input type='text' name='${word}' placeholder='${word}' id ='${word.split(' ').join('')}'>`)
        } 
        $form.innerHTML= inputs.join('')
        break;
    default:
      console.log("something wrong with switch")
      }
}


document.getElementById('mission').addEventListener('click',function(){
  addForm('missionWords')
  $formContainer.classList.toggle('on')
})
document.getElementById('lunch').addEventListener('click',function(){
  addForm('lunchWords')
  $formContainer.classList.toggle('on')
})
document.getElementById('weather').addEventListener('click',function(){
  addForm('weatherWords')
  $formContainer.classList.toggle('on')
})


//create and read story using switch
document.getElementById('read').addEventListener('click',provide)

function provide(){
  switch (typeFlag) {
    case 'missionWords':
      outputWords = {
        'Adjective': document.getElementById('Adjective').value,
        'Verb 1': document.getElementById('Verb1').value,
        'Verb 2': document.getElementById('Verb2').value,
        'Plural Noun 1': document.getElementById('PluralNoun1').value,
        'Plural Noun 2': document.getElementById('PluralNoun2').value,
        'Plural Noun 3': document.getElementById('PluralNoun3').value
      }
      document.getElementById('finished').innerHTML=stories[0].output(outputWords)
      document.getElementById('name').textContent=stories[0].title
      $final.classList.toggle('on')
      break;
    case 'lunchWords':
      outputWords = {
        'Animal': document.getElementById('Animal').value,
        'Adjective 1': document.getElementById('Adjective1').value,
        'Adjective 2': document.getElementById('Adjective2').value,
        'Vegetable 1': document.getElementById('Vegetable1').value,
        'Vegetable 2': document.getElementById('Vegetable2').value,
        'Noun': document.getElementById('Noun').value,
        'Container': document.getElementById('Container').value
      }
      document.getElementById('finished').innerHTML=stories[1].output(outputWords)
      document.getElementById('name').textContent=stories[1].title
      $final.classList.toggle('on')
      break;
    case 'weatherWords':
      outputWords = {
        'Adjective 1': document.getElementById('Adjective1').value,
        'Adjective 2': document.getElementById('Adjective2').value,
        'Article of Clothing': document.getElementById('ArticleofClothing').value,
        'Number 1': document.getElementById('Number1').value,
        'Number 2': document.getElementById('Number2').value,
        'Plural Noun 1': document.getElementById('PluralNoun1').value,
        'Plural Noun 2': document.getElementById('PluralNoun2').value
      }
      document.getElementById('finished').innerHTML=stories[2].output(outputWords)
      document.getElementById('name').textContent=stories[2].title
      $final.classList.toggle('on')
      break;  
    default:
      break;
  }
}
//since all of my buttons are outside of the forms, no page refresh happens 
//event.preventDefault() not necessary

//create another story ,return to the first form 
document.getElementById('another').addEventListener('click',function(event){
  $final.classList.toggle('on')
  $formContainer.classList.toggle('on')
  window.scrollTo(0, 0); 
})
//event.preventDefault() not necessary


