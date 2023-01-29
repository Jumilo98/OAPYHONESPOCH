<script setup>
import { ref, computed } from 'vue'

const questions = ref([
  {
	question: 'Python es un lenguaje de alto nivel?',
	answer: 0,
	options: [
		'Si',
		'No',
		'No, es un lenguaje'
	],
	selected: null
  },
  {
	question: 'Python tiene implicitas estructuras de datos como:',
	answer: 2,
	options: [
		'listas y tuplas',
		'diccionarios y conjuntos',
		'Todas las anteriores'
	],
	selected: null
  },
  {
	question: 'Programar en Python ayuda a realizar tareas complejas en poco codigo?',
	answer: 0,
	options: [
		'Si',
		'No'		
	],
	selected: null
  },
  {
	question: 'Quien creo el lenguaje de Python?',
	answer: 2,
	options: [
		'Mark Elliot Zuckerberg',
		'Jeff Bezos',
		'Guido van Rossum'
	],
	selected: null
  },
  {
	question: 'Cual fue el sistema que Rossum trabajaba entre los años 80 y 90?',
	answer: 2,
	options: [
		'Cpython',
		'Amazon',
		'Amoeba'
	],
	selected: null
  },
  {
	question: 'Cual es la fecha de lanzamiento de Python 2.0?',
	answer: 1,
	options: [
		'6 de octubre del 2002',
		'16 de octubre del 2000',
		'11 Septiembre del 2001'
	],
	selected: null
  },
  {
	question: 'Cual fue la primera version de Python en lanzarse al mercado?',
	answer: 0,
	options: [
		'0.9.0',
		'0.2.0',
		'1.0.1'
	],
	selected: null
  },
  {
	question: 'Cuales son las principales caracteristicas de Python?',
	answer: 2,
	options: [
		'Lenguaje de alto nivel e interpretado',
		'POO',
		'Todas las anteriores'
	],
	selected: null
  },
  {
	question: 'Cual version de Python es con la que se trabaja actualmente?',
	answer: 1,
	options: [
		'3.11.7',
		'3.11.1',
		'3.12.0'
	],
	selected: null
  },
  {
	question: 'Que premio le fue otorgado a Guido Van Rossum?',
	answer: 1,
	options: [
		'Programador del año',
		'Software Libre',
		'Ninguno'
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
			console.log('correcto');
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
		<h1>Cuestionario Introduccion a Python</h1>
		
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
