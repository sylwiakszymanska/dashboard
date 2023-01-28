export function fetchUsers() {
  return fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
      .then(response => response.json());
}


