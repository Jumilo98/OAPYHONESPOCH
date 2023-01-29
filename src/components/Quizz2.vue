<script setup>
import { ref, computed } from 'vue'

const questions = ref([
  {
	question: 'Cual es la direccion donde podra descargar Python?',
	answer: 0,
	options: [
		'https://www.python.org/downloads/',
		'https://www.cpython.org/downloads/',
		'https://www.python.org/downloads/3.11.1'
	],
	selected: null
  },
  {
	question: 'Cuantos pasos se debe seguir en total para instalar python?',
	answer: 2,
	options: [
		'10',
		'15',
		'6'
	],
	selected: null
  },
  {
	question: 'Cual es la direccion donde podra descargar Visual Studio Code?',
	answer: 0,
	options: [
		'https://code.visualstudio.com',
		'https://visualstudiocode.com',
		'https://vscode.com'		
	],
	selected: null
  },
  {
	question: 'Cuantos pasos se debe seguir en total para instalar python?',
	answer: 1,
	options: [
		'10',
		'4',
		'6'
	],
	selected: null
  },
  {
	question: 'Para que se instalan extensiones en VSC?',
	answer: 1,
	options: [
		'Para que la interfaz se vea bonita',
		'Para facilitar el tipeo y sintaxis',
		'Para programar con ayuda de IA'
	],
	selected: null
  },
  {
	question: 'Cuantas extensiones se recomendo instalar?',
	answer: 1,
	options: [
		'4',
		'2',
		'1'
	],
	selected: null
  },
  {
	question: 'Cual es el formato de un archivo de python?',
	answer: 0,
	options: [
		'.py',
		'.pthn',
		'.pt'
	],
	selected: null
  },
  {
	question: 'De cuantas maneras se puede ejecutar un archivo .py',
	answer: 0,
	options: [
		'2',
		'3',
		'4'
	],
	selected: null
  },
  {
	question: 'Con que programas se pueden ejecutar archivos .py?',
	answer: 2,
	options: [
		'Cmd',
		'Visual Studio Code',
		'Todas las anteriores'
	],
	selected: null
  },
  {
	question: 'Como se llama el programa para ejecutar codigo en python?',
	answer: 0,
	options: [
		'IDLE',
		'Cpython',
		'VSC'
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
		<h1>Cuestionario Preparacion del Entorno</h1>
		
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
