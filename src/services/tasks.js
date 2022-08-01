const randomDate = () => {
  return new Date(
    2022,
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 31),
    Math.floor(Math.random() * 23),
    Math.floor(Math.random() * 60),
    Math.floor(Math.random() * 60)
  )
}

const getTasks = () => {
  return [
    {
      id: Date.now(),
      title: 'Get Oranges',
      done: false,
      createdAt: new Date(2022, 6, 31, 12, 42, 23),
    },
    {
      id: Date.now(),
      title: 'Learn Vue.js',
      done: true,
      createdAt: new Date(2022, 6, 29, 10, 22, 0),
    },
    {
      id: Date.now(),
      title: 'Make apps with Quasar',
      done: false,
      createdAt: new Date(2022, 6, 28, 9, 31, 33),
    },
    {
      id: Date.now(),
      title: 'Write API REST Kotlin-Ktor',
      done: false,
      createdAt: new Date(2022, 6, 31, 14, 0, 2),
    },
    {
      id: Date.now(),
      title: 'Learn Kotlin',
      done: true,
      createdAt: randomDate(),
    },
    {
      id: Date.now(),
      title: 'Learn React - never',
      done: true,
      createdAt: randomDate(),
    },
    {
      id: Date.now(),
      title: 'Play Guitar',
      done: false,
      createdAt: randomDate(),
    },
  ]
}

export { getTasks }
