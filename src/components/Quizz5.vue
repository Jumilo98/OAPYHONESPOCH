<script setup>
import { ref, computed } from 'vue'

const questions = ref([
  {
	question: 'Las estructuras o sentencias repetitivas, también llamados bucles permiten:',
	answer: 0,
	options: [
		'Permiten ejecutar una o varias acciones repetidas veces',
		'Permiten ejecutar una accion',
		'Permiten ejecutar una accion repetidas veces'
	],
	selected: null
  },
  {
	question: 'Que es un iterador?',
	answer: 2,
	options: [
		'Es una estructura restrictiva, ya que la condición se encuentra antes del bloque de sentencias.',
		'Es una forma de  detener el bucle al llegar  a una  condición definida.',
		'Es un contador que poseen los bucles, es importante que tenga uno, de otra forma, el bucle será infinito',
		
	],
	selected: null
  },
  {
	question: 'Que es un break?',
	answer: 1,
	options: [
		'Significa para comprobar si el operando de la izquierda es mayor que o igual al valor de la de la derecha.',
		'Es una forma de detener el bucle al llegar  a una  condición definida.',
		'Es una forma de continuar con la repeticion de cada condicion'
	],
	selected: null
  },
  {
	question: 'Que es la estructura mientras?',
	answer: 1,
	options: [
		'Es una estructura no restrictiva, ya que la condición se encuentra antes del bloque de sentencias',
		'Es una estructura restrictiva, ya que la condición se encuentra antes del bloque de sentencias',
		'Es una estructura condicional, que toma decisiones pasando por una condicion que debe cumplirse.'
	],
	selected: null
  },
  {
	question: 'Que ocurre si se ejecuta esta sentencia mintras (while), i=0, while i<10:, i+=1, print (i)',
	answer: 1,
	options: [
		'Si sobrepasa el 11 dejara de ejecutarse y para el ciclo de repeticion',
		'i tomara el valor de 10 y asi finalizara el ciclo de repeticion',
		'Al repetirse 9 veces se comparara con 10 mostrando i=9, dando un true, finalizando la repeticion'
	],
	selected: null
  },
  {
	question: 'Para que es utilizada la estructura de repeticion para (for)?',
	answer: 0,
	options: [
		'Es utilizada cuando conocemos la cantidad de iteraciones, repeticiones o ciclos que debe realizar el lazo o estructura',
		'Es utilizada cuando no conocemos la cantidad de iteraciones, repeticiones o ciclos que debe realizar el lazo o estructura',
		'Es utilizada para iterar n veces, y tomar decisione con condiciones tenindo 2 salidas de verdadero y falso'
	],
	selected: null
  },
  {
	question: 'Cual es la respuesta de esta estructura for, nums = [4, 78, 9, 84], for n in nums: print(n)?',
	answer: 2,
	options: [
		'nums = [4, 78, 9, 84]',
		'nums',
		'4, 78, 9, 84'
	],
	selected: null
  },
  {
	question: 'Que es una funcion?',
	answer: 2,
	options: [
		'Una función no es una secuencia de sentencias que realizan una operación y que reciben un nombre',
		'Una función es una secuencia de sentencias que no realizan una operación y que reciben un nombre',
		'Una función es una secuencia de sentencias que realizan una operación y que reciben un nombre'
	],
	selected: null
  },
  {
	question: 'Que es un parametro?',
	answer: 0,
	options: [
		'Son variables que se definen al declarar funciones, las cuales van a ser utilizadas para evitar valores al hacer un llamado a la función.',
		'Son los valores que van a tomar cada uno de los parámetros que se han definido en las funciones',
		'Son los valores que no van a tomar cada uno de los parámetros que se han definido en las funciones'
	],
	selected: null
  },
  {
	question: 'Que es un argumento?',
	answer: 1,
	options: [
		'Son variables que se definen al declarar funciones, las cuales van a ser utilizadas para evitar valores al hacer un llamado a la función.',
		'Son los valores que van a tomar cada uno de los parámetros que se han definido en las funciones',
		'Son los valores que no van a tomar cada uno de los parámetros que se han definido en las funciones'
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
		<h1>Cuestionario Bucles y Funciones</h1>
		
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
