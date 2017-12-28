import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import endPort from '@/components/new/endPort.vue'
import articleAdd from '@/components/new/article/articleAdd.vue'
import articleList from '@/components/new/article/articleList.vue'
import xgarticle from '@/components/new/article/xgarticle.vue'
import classificationOne from '@/components/new/classification/classificationOne.vue'
import classificationTwo from '@/components/new/classification/classificationTwo.vue'
import classificationList from '@/components/new/classification/classificationList.vue'
import interfaceOne from '@/components/new/interface/interfaceOne.vue'
import interfaceTwo from '@/components/new/interface/interfaceTwo.vue'
import messageOne from '@/components/new/message/messageOne.vue'
import messageTwo from '@/components/new/message/messageTwo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/endPort',
      name: 'endPort',
      component: endPort,
      children: [
        {
          path: '/articleAdd',
          name: 'articleAdd',
          component: articleAdd,
        },
        {
          path: '/xgarticle',
          name: 'xgarticle',
          component: xgarticle,
        },
        {
          path: '/articleList',
          name: 'articleList',
          component: articleList,
        },
        {
          path: '/classificationOne',
          name: 'classificationOne',
          component: classificationOne,
        },
        {
          path: '/classificationTwo',
          name: 'classificationTwo',
          component: classificationTwo,
        },
        {
          path: '/classificationList',
          name: 'classificationList',
          component: classificationList,
        },
        {
          path: '/interfaceOne',
          name: 'interfaceOne',
          component: interfaceOne,
        },
        {
          path: '/interfaceTwo',
          name: 'interfaceTwo',
          component: interfaceTwo,
        },
        {
          path: '/messageOne',
          name: 'messageOne',
          component: messageOne,
        },
        {
          path: '/messageTwo',
          name: 'messageTwo',
          component: messageTwo,
        }
      ]
    }
  ]
})
