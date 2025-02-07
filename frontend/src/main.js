import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import { createClient } from '@supabase/supabase-js';
import { createPinia } from 'pinia';
// import { useAuthStore } from './store/auth';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);
const app = createApp(App);

app.provide('supabase', supabase);
app.use(router);
app.use(createPinia());
app.mount('#app');
