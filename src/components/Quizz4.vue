<script setup>
import { ref, computed } from 'vue'

const questions = ref([
  {
	question: 'Que son los operadores relacionales?',
	answer: 1,
	options: [
		'Hace referencia a procesos logicos matematicos',	
		'Hace referencia a condiciones entre datos, tambien pueden ser vistos como comparaciones ',
		'Hace referencia a condiciones entre datos, tambien pueden ser vistos como diferencias '	
	],
	selected: null
  },
  {
	question: 'Cuales son los nombres de estos operadores relacionales < y >?',
	answer: 0,
	options: [
		'Mayor y menor, que',
		'Igual que y menor que',
		'Mayor igual y menor igual '
	],
	selected: null
  },
  {
	question: 'Que son los operadores logicos?',
	answer: 1,
	options: [
		'Hace referencia a operaciones algorimicas con numeros sin simbolos',
		'Hace referencia a condiciones entre variables, tambien pueden ser vistos como comparaciones ',
		'Son los que trabajan con el fin de ayudar con la evaluación de la entrada que el usuario le da con las condiciones que ha establecido.'
	],
	selected: null
  },
  {
	question: 'Cuales son operadores logicos?',
	answer: 2,
	options: [
		'<,>, =',
		'si, no, tal vez',
		'and, not, or'
	],
	selected: null
  },
  {
	question: 'Que son los condicionales?',
	answer: 2,
	options: [
		'Son situaciones en las que pueden verse varias funciones en un conjunto de datos dentro de un programa',
		'Son situaciones en las que no pueden darse  varios resultados dentro de un programa',
		'Son situaciones en las que pueden darse  varios resultados dentro de un programa'
	],
	selected: null
  },
  {
	question: 'Cuando se utiliza un ELIF?',
	answer: 0,
	options: [
		'Se utiliza cuando se combinan varias opciones que el programa debe elegir',
		'Es dado caso en que no se cumpla la condición  del If',
		'Cuando se necesita una sola respuesta sin ninguna salida ni decision'
	],
	selected: null
  },
  {
	question: 'Cual es el resultado de False or True?',
	answer: 0,
	options: [
		'True',
		'False'
	],
	selected: null
  },
  {
	question: 'Cual es el resultado de if 2 > 1: print(" 2 es mayor que 1")?',
	answer: 0,
	options: [
		'(" 2 es mayor que 1")',
		'(" 1 es mayor que 2")'
	],
	selected: null
  },
  {
	question: 'Que contiene la primera linea de la condicion a evaluar, IF()',
	answer: 0,
	options: [
		'Conficion a evaluar y expresion logica',
		'Expresion logica',
		'Ninguna de las anteriores'
	],
	selected: null
  },
  {
	question: 'Cual es el resultado de if 1 > 3: print(" 1 es mayor que 3") else:   print("3 es mayor que 1")?',
	answer: 1,
	options: [
		'(" 1 es mayor que 3")',
		'(" 3 es mayor que 1")'
	],
	selected: null
  }
])

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
	let value = 0
	questions.value.map(q => {
		if (q.selected != null && q.answer == q.selected) {
			console.log('correct');
			value++
		}
	})
	return value
})

const getCurrentQuestion = computed(() => {
	let question = questions.value[currentQuestion.value]
	question.index = currentQuestion.value
	return question
})

const SetAnswer = (e) => {
	questions.value[currentQuestion.value].selected = e.target.value
	e.target.value = null
}

const NextQuestion = () => {
	if (currentQuestion.value < questions.value.length - 1) {
		currentQuestion.value++
		return
	}
	
	quizCompleted.value = true
}
</script>

<template>
	<main class="app2">
		<h1>Cuestionario Booleanos y Condicionales</h1>
		
		<section class="quiz" v-if="!quizCompleted">
			<div class="quiz-info">
				<span2 class="question">{{ getCurrentQuestion.question }}</span2>
				<span class="score">Puntos {{ score }}/{{ questions.length }}</span>
			</div>
			
			<div class="options">
				<label 
					v-for="(option, index) in getCurrentQuestion.options" 
					:for="'option' + index" 
					:class="`option ${
						getCurrentQuestion.selected == index 
							? index == getCurrentQuestion.answer 
								? 'correct' 
								: 'wrong'
							: ''
					} ${
						getCurrentQuestion.selected != null &&
						index != getCurrentQuestion.selected
							? 'disabled'
							: ''
					}`">
					<input 
						type="radio" 
						:id="'option' + index" 
						:name="getCurrentQuestion.index" 
						:value="index" 
						v-model="getCurrentQuestion.selected" 
						:disabled="getCurrentQuestion.selected"
						@change="SetAnswer" 
					/>
					<span>{{ option }}</span>
				</label>
			</div>
			
			<button2 
				@click="NextQuestion" 
				:disabled="!getCurrentQuestion.selected">
				{{ 
					getCurrentQuestion.index == questions.length - 1 
						? 'Finalizar' 
						: getCurrentQuestion.selected == null
							? 'Continuar'
							: 'Siguiente Pregunta'
				}}
			</button2>
		</section>

		<section v-else>
			<h2>Cuestionario Finalizado!</h2>
			<p>Tu puntaje es: {{ score }}/{{ questions.length }}</p>
		</section>

		<section>
			
				<img src="../assets/logo.png" style=" width: 10cm; padding: 2cm;">
			
		</section>

	</main>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}

body {
	
	color: rgb(20, 5, 5);
}

.app2 {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	height: 100%;
}

h1 {
	font-size: 2rem;
	margin-bottom: 2rem;
}

.quiz {
	background-color: #1E293B;
	padding: 1rem;
	width: 100%;
	max-width: 640px;
}

.quiz-info {
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
}

.quiz-info .question {
	color: #ffe600;
	font-size: 1.25rem;
}

.quiz-info .score {
	color: rgb(231, 231, 231);
	font-size: 1.25rem;
}

.options {
	margin-bottom: 1rem;
}

.option {
	padding: 1rem;
	display: block;
	background-color: #d0d0d3;
	margin-bottom: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
}

.option:hover {
	background-color: #9facbb;
}

.option.correct {
	background-color: #2cce7d;
}

.option.wrong {
	background-color: #ff5a5f;
}

.option:last-of-type {
	margin-bottom: 0;
}

.option.disabled {
	opacity: 0.5;
}

.option input {
	display: none;
}

button2 {
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem 1rem;
	background-color: #2cce7d;
	color: #050000;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.2rem;
	border-radius: 0.5rem;
}

button2:disabled {
	opacity: 0.5;
}

h2 {
	font-size: 2rem;
	margin-bottom: 2rem;
	text-align: center;
}

p {
	color: #2059d6;
	font-size: 1.5rem;
	text-align: center;
}
</style>
