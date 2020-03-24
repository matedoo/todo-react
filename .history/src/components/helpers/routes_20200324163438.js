const serverUrl = "http://localhost:3001"

export const toDoItemsApiUrl = id =>
    id ? `${serverUrl}/todoItems/${id}` : `${serverUrl}/todoItems`