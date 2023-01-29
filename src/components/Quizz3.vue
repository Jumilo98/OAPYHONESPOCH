<script setup>
import { ref, computed } from 'vue'

const questions = ref([
  {
	question: 'Que es un dato?',
	answer: 0,
	options: [
		'Es una de las cosas básicas que utliza un programa como una letra o un número.',
		'Es una de las cosas básicas que no utliza un programa como una letra o un número.',
		'Es un tipo de variable que ayuda a programar.'
	],
	selected: null
  },
  {
	question: 'Que es una variable?',
	answer: 2,
	options: [
		'No es un nombre que se refiere a un dato',
		'Son declaraciones que ayudan a programar',
		'Es un nombre que se refiere a un dato'
	],
	selected: null
  },
  {
	question: 'Cuales son los tipos de variables?',
	answer: 0,
	options: [
		'Entero, cadena de texto y flotante',
		'String y entero',
		'Entero y flotante'
	],
	selected: null
  },
  {
	question: 'Cual no es una regla de las variables?',
	answer: 0,
	options: [
		'Pueden iniciar con un número',
		'No pueden llevar caracteres especiales',
		'No pueden llevar el nombre de palabras reservadas del lenguaje'
	],
	selected: null
  },
  {
	question: 'Cuantos operadores aritmeticos se vieron en la presentacion?',
	answer: 2,
	options: [
		'4',
		'5',
		'6'
	],
	selected: null
  },
  {
	question: 'Cuantos subniveles tiene la jerarquia de Operaciones??',
	answer: 1,
	options: [
		'5',
		'4',
		'3'
	],
	selected: null
  },
  {
	question: 'Que determina la jerarquia?',
	answer: 0,
	options: [
		'El orden con el que deben realizarse esas operaciones',
		'El orden con el que no deben realizarse esas operaciones'
	],
	selected: null
  },
  {
	question: 'Que son los operadores?',
	answer: 0,
	options: [
		'Los operadores son símbolos especiales que representan cálculos, como la suma o la multiplicación.',
		'Los operadores no son símbolos especiales que representan cálculos, como la suma o la multiplicación.',
		'Los operadores son símbolos especiales que no representan cálculos, como la suma o la multiplicación.'
	],
	selected: null
  },
  {
	question: 'Elija un ejemplo de tipo entero',
	answer: 0,
	options: [
		'number = int (9.99)',
		'float pi = 3.14f',
		'new_string = "hola"'
	],
	selected: null
  },
  {
	question: '5 es un dato, Verdadero o Falso?',
	answer: 1,
	options: [
		'Falso',
		'Verdadero'
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
		<h1>Cuestionario Primeros Pasos y Operadores</h1>
		
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
