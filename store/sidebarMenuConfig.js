export const student = [{
  label: 'Inicio',
  route: 'student-home',
  icon: {
    type: 'md-icon',
    id: 'home'
  }
}]

export const instructor = [{
  label: 'Instructor Dashboard',
  route: 'instructor-dashboard',
  icon: {
    type: 'md-icon',
    id: 'school'
  }
}]

export const accountRoutes = [{
  label: 'Login',
  route: 'login'
}]

export const communityRoutes = [{
  label: 'Browse Teachers',
  route: 'community-teachers'
}]

export const studentMenu = {
  id: 'studentMenu',
  label: 'Student',
  exact: false,
  icon: {
    type: 'md-icon',
    id: 'account_box'
  },
  open: false,
  children: student
}

export const instructorMenu = {
  id: 'instructorMenu',
  label: 'Instructor',
  exact: false,
  icon: {
    type: 'md-icon',
    id: 'school'
  },
  open: false,
  children: instructor
}

export const communityMenu = {
  id: 'communityMenu',
  label: 'Community',
  exact: false,
  icon: {
    type: 'md-icon',
    id: 'people_outline'
  },
  open: false,
  children: communityRoutes
}

export const accountMenu = {
  id: 'account',
  label: 'Account',
  icon: {
    type: 'md-icon',
    id: 'person_outline'
  },
  open: false,
  children: accountRoutes
}

export const messagingMenu = {
  label: 'Messages',
  route: 'messages',
  icon: {
    type: 'md-icon',
    id: 'comment'
  },
  badge: {
    label: '3',
    variant: 'accent badge-notifications'
  }
}

export const state = () => ({
  prueba: [{
    label: 'Messages',
    route: 'messages',
    icon: {
      type: 'md-icon',
      id: 'comment'
    },
    badge: {
      label: '3',
      variant: 'accent badge-notifications'
    }
  }],
  student,
  instructor,

  apps: [
    studentMenu,
    instructorMenu,
    messagingMenu,
    accountMenu,
    communityMenu
  ],

  components: [
    {
      id: 'uiComponents',
      label: 'User Interface',
      icon: {
        type: 'md-icon',
        id: 'tune'
      },
      open: false,
      children: [
        {
          label: 'Avatar',
          route: 'components-ui-avatar'
        },
      ]
    },
    {
      id: 'layoutComponents',
      label: 'Layout',
      icon: {
        type: 'md-icon',
        id: 'tune'
      },
      open: false,
      children: [
        {
          label: 'Drawer',
          route: 'components-layout-drawer'
        }
      ]
    },
    {
      id: 'pluginComponents',
      label: 'Plugins',
      icon: {
        type: 'md-icon',
        id: 'folder'
      },
      open: false,
      children: [
        {
          label: 'Syntax Highlight',
          route: 'components-plugins-syntax-highlight'
        }
      ]
    }
  ],

  documentation: [
    {
      id: 'documentation',
      label: 'Documentation',
      icon: {
        type: 'md-icon',
        id: 'help'
      },
      open: false,
      children: [
        {
          label: 'Introduction',
          route: 'documentation'
        }
      ]
    }
  ]
})
