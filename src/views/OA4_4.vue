<template>
	<!-- Navbar -->
	<div style="display: flex;  flex-direction: column;  width: 100%; height:min-content; padding: 1.80%;">
		<Navbar/>

		<div class="cuestionario4" style="width: 85%; padding: 1%; margin: auto; margin-top:0.80%;">
			<div style="position: relative; padding-bottom: 56.25%; padding-top:0; height: 0;">
          	   <Quizz4/>
			</div> 
		</div> 
	</div>	
</template>


<script setup>
	import Navbar from '../components/Navbar4.vue'
	import Quizz4 from '../components/Quizz4.vue'
</script>