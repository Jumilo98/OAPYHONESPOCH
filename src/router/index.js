import { createRouter, createWebHistory } from 'vue-router'
import OA1 from '../views/OA1.vue'
import OA2 from '../views/OA2.vue'
import OA3 from '../views/OA3.vue'
import OA4 from '../views/OA4.vue'
import OA5 from '../views/OA5.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/OA1',
			component: OA1
		},
		{
			path: '/OA1_2',
			component: () => import('../views/OA1_2.vue')
		},
		{
			path: '/OA1_3',
			component: () => import('../views/OA1_3.vue')
		},
		{
			path: '/OA1_4',
			component: () => import('../views/OA1_4.vue')
		},
		{
			path: '/OA2',
			component: OA2
		},
		{
			path: '/OA2_2',
			component: () => import('../views/OA2_2.vue')
		},
		{
			path: '/OA2_3',
			component: () => import('../views/OA2_3.vue')
		},
		{
			path: '/OA2_4',
			component: () => import('../views/OA2_4.vue')
		},
		{
			path: '/OA3',
			component: OA3
		},
		{
			path: '/OA3_2',
			component: () => import('../views/OA3_2.vue')
		},
		{
			path: '/OA3_3',
			component: () => import('../views/OA3_3.vue')
		},
		{
			path: '/OA3_4',
			component: () => import('../views/OA3_4.vue')
		},
		{
			path: '/OA4',
			component: OA4
		},
		{
			path: '/OA4_2',
			component: () => import('../views/OA4_2.vue')
		},
		{
			path: '/OA4_3',
			component: () => import('../views/OA4_3.vue')
		},
		{
			path: '/OA4_4',
			component: () => import('../views/OA4_4.vue')
		},
		{
			path: '/OA5',
			component: OA5
		},
		{
			path: '/OA5_2',
			component: () => import('../views/OA5_2.vue')
		},
		{
			path: '/OA5_3',
			component: () => import('../views/OA5_3.vue')
		},
		{
			path: '/OA5_4',
			component: () => import('../views/OA5_4.vue')
		},

	],
})

export default router