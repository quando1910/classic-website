import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Pictures from '@/components/pictures'
import Decoration from '@/components/decoration'
import Videos from '@/components/videos'
import Costume from '@/components/costume'
import ClothesDetails from '@/components/clothes-detail'
import Clothes from '@/components/clothes'
import Concept from '@/components/concept'
import AboutUs from '@/components/about-us'
import ComingSoon from '@/components/coming-soon'
import Page404 from '@/components/page404'
import Gallery from '@/components/gallery'
import PicIns from '@/components/pic-ins'
import Price from '@/components/price'
import Detail from '@/components/details'
import Stories from '@/components/stories'
import StoryDetail from '@/components/story-detail'
import PicSys from '@/components/pic-sys'
import PicCode from '@/components/pic-code'
import Contracts from '@/components/contracts'

// import Info from '@/components/info'
// import Preview from '@/components/post/post-preview'
// import AuthLogin from '@/components/auth/auth-login'
// import AuthSignUp from '@/components/auth/auth-signup'
// import AddPost from '@/components/post/add-post'
// const Home = () => import(/* webpackChunkName: "main-page" */ '@/components/home.vue')

// const Showrooms = () => import(/* webpackChunkName: "group-news" */ '@/components/showrooms.vue')
// const Preview = () => import(/* webpackChunkName: "group-news" */ '@/components/post/post-preview')
// const AddPost = () => import(/* webpackChunkName: "group-news" */ '@/components/post/add-post')
// const Popular = () => import(/* webpackChunkName: "group-popular" */ '@/components/popular')
// const SubDetail = () => import(/* webpackChunkName: "group-details" */ '@/components/sub-detail')
// const MainDetail = () => import(/* webpackChunkName: "group-details" */ '@/components/main-detail')
// const GalleryBox = () => import(/* webpackChunkName: "group-details" */ '@/components/gallery-box')
// const Info = () => import(/* webpackChunkName: "group-details" */ '@/components/info')
// const AuthLogin = () => import(/* webpackChunkName: "group-auth" */ '@/components/auth/auth-login')
// const AuthSignUp = () => import(/* webpackChunkName: "group-auth" */ '@/components/auth/auth-signup')
// const Suggestion = () => import(/* webpackChunkName: "group-suggest" */ '@/components/suggestion')

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/pictures',
      component: Pictures,
      children: [
        {
          path: '',
          component: PicIns,
          name: 'PicIns'
        },
        {
          path: 'gallery',
          component: Gallery,
          name: 'Gallery'
        }
      ]
    },
    {
      path: '/decoration',
      component: Decoration,
      name: 'Decoration'
    },
    {
      path: '/contracts/:token/:id',
      component: Contracts,
      name: 'Contracts'
    },
    {
      path: '/videos',
      component: Videos,
      name: 'Videos'
    },
    {
      path: '/costume',
      component: Costume,
      name: 'Costume'
    },
    {
      path: '/clothes',
      component: Clothes,
      name: 'Clothes'
    },
    {
      path: '/clothes/:id',
      component: ClothesDetails,
      name: 'ClothesDetails'
    },
    {
      path: '/article/:id',
      component: Detail,
      name: 'Detail',
      alias: ['/costume/:id', '/notice/:id', '/concept/:id', '/posing/:id', '/offer/:id', '/ask/:id']
    },
    {
      path: '/concept',
      component: Concept,
      name: 'Concept',
      alias: ['/posing', '/offer', '/ask', '/notice']
    },
    {
      path: '/about',
      component: AboutUs,
      name: 'AboutUs'
    },
    {
      path: '/price',
      component: Price,
      name: 'Price'
    },
    {
      path: '/coming',
      component: ComingSoon,
      name: 'ComingSoon'
    },
    {
      path: '/stories',
      component: Stories,
      name: 'Stories'
    },
    {
      path: '/stories/:id',
      component: StoryDetail,
      name: 'StoryDetail'
    },
    {
      path: '/viewers',
      component: PicSys,
      name: 'PicSys'
    },
    {
      path: '/viewers/:code',
      component: PicCode,
      name: 'PicCode'
    },
    {
      path: '**',
      component: Page404,
      name: 'Page404'
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   try {
//     if (to.matched[to.matched.length - 1].meta.requiresAuth === false) {
//       if (localStorage.getItem('ACCESS_TOKEN')) {
//         next({path: '/news-feed'})
//       } else {
//         next()
//       }
//     } else if (to.matched[to.matched.length - 1].meta.requiresAuth === true) {
//       if (localStorage.getItem('ACCESS_TOKEN')) {
//         next()
//       } else {
//         next({path: '/news-feed'})
//       }
//     } else {
//       next(true)
//     }
//   } catch (e) {
//     next()
//   }
// })

export default router
