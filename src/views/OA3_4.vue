<template>
	<!-- Navbar -->
	<div style="display: flex;  flex-direction: column;  width: 100%; height:min-content; padding: 1.80%;">
		<Navbar/>

		<div class="cuestionario3" style="width: 85%; padding: 1%; margin: auto; margin-top: 0.80%;">
			<div style="position: relative; padding-bottom: 56.25%; padding-top:0; height: 0;">
                <Quizz3/>
			</div> 
		</div> 
	</div>	
</template>


<script setup>
	import Navbar from '../components/Navbar3.vue'
	import Quizz3 from '../components/Quizz3.vue'
</script>