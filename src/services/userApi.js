export async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Users could not be fetched!');
    return res.json(); 
}