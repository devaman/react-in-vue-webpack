import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import SignIn from './components/Signin'
import SignUp from './components/Signup'
import ReactComponent from './components/ReactComponent'
import ReactComponentLoad from './components/ReactComponentLoad'
import App from './App.vue'

const routes = [
  { path: '/', name: 'Signin', component: SignIn },
  { path: '/signup', name: 'Signup', component: SignUp },
  {
    path: '/react',
    name: 'react',
    component:ReactComponentLoad,
    children: [
      {
        path: ':pathMatch(.*)*',
        component: ReactComponent
      }
    ]
  }
]

const mount = (el, { history }) => {
  const router = createRouter({
    history: history,
    routes,
  })
  const app = createApp(App);
  app.use(router)
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot, { history: createWebHistory() });
  }
}
export { mount };