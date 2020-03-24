const serverUrl = "http://localhost:3000"

export const toDoItemsApiUrl = id =>
    id ? `${serverUrl}/todoItems/${id}` : `${serverUrl}/todoItems`