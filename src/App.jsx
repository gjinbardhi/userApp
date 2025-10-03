import { useMemo, useState } from 'react';
import { Container, HStack } from '@chakra-ui/react';
import { useUsers } from './hooks/useUsers';
import SearchBar from './components/SearchBar';
import SortToggle from './components/SortToggle';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

export default function App() {
  const { users, addUser } = useUsers(); // users from Redux
  const [query, setQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const toggleSort = () => setSortAsc(s => !s);

  // filter from Redux list
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter(u =>
      (u.name ?? '').toLowerCase().includes(q) ||
      (u.username ?? '').toLowerCase().includes(q) ||
      (u.email ?? '').toLowerCase().includes(q)
    );
  }, [users, query]);

  // sort the filtered list
  const visible = useMemo(() => {
    const copy = [...filtered];
    copy.sort((a, b) => {
      const A = (a.name ?? '').toLowerCase();
      const B = (b.name ?? '').toLowerCase();
      return sortAsc ? A.localeCompare(B) : B.localeCompare(A);
    });
    return copy;
  }, [filtered, sortAsc]);

  return (
    <Container maxW="container.lg" py={6}>
      <UserForm onAdd={addUser} />

      {/* search + sort in a single row; search stretches */}
      <HStack spacing={3} mb={4}>
        <SearchBar value={query} onChange={setQuery} flex="1" />
        <SortToggle asc={sortAsc} onToggle={toggleSort} />
      </HStack>

      <UserList users={visible} />
    </Container>
  );
}
