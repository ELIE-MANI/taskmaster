const API_URL = 'https://stub.muindetuva.com/api/tasks'

export async function getTasks() {
  const response = await fetch(API_URL,{
    headers: {
      authorization:`Bearer 17|OAkvhOPYN4VRJL2SkcnAzW3PvzyzYI4r4bYBklXoe6f28b04`
    }
  });
  if(!response.ok) {
    throw new Error('Failed to fetch tasks')
  }
  return response.json(); 
}

export async function createTask(newTask) {
  const response = await fetch(API_URL, { 
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
      authorization: `Bearer 17|OAkvhOPYN4VRJL2SkcnAzW3PvzyzYI4r4bYBklXoe6f28b04`
    },
    body: JSON.stringify(newTask)
  });
  if(!response.ok) {
    throw new Error('Failed to create task')
  }
}