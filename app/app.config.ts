export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      secondary: 'emerald',
      neutral: 'slate'
    },
    button: {
      defaultVariants: {
        color: 'primary'
      }
    },
    card: {
      slots: {
        root: 'bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow'
      }
    }
  }
})
