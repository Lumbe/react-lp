import axios from 'axios'
import ProjectApi from './src/api/projectApi'

export default {
  getSiteProps: () => ({
    title: 'Сервус Винница',
  }),
  getRoutes: async () => {
    const { data: {projects} } = await ProjectApi.getAll();
    return [
      {
        path: '/',
      },
      {
        path: '/about',
      },
      {
        path: '/commercial-buildings'
      },
      {
        path: '/eu-certificates'
      },
      {
        path: '/building-technology'
      },
      {
        path: '/build-stages'
      },
      {
        path: '/rapid-building'
      },
      {
        path: '/house-projects'
      },
      {
        path: '/advantages'
      },
      {
        path: '/price'
      },
      {
        path: '/reviews'
      },
      {
        path: '/own-project'
      },
      {
        path: '/contacts'
      },
      {
        path: '/typography'
      },
      {
        path: '/projects',
        getProps: () => ({
          projects,
        }),
        children: projects.map(project => ({
          path: `/projects/${project.slug}`,
          getProps: () => ({
            project,
          }),
        })),
      },
    ]
  },
}