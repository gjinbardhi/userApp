import { SimpleGrid, Text } from '@chakra-ui/react';
import UserItem from './UserItem';

export default function UserList({ users = [] }) {
  if (users.length === 0) return <Text mt={2}>No results.</Text>;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {users.map(u => <UserItem key={u.id} user={u} />)}
    </SimpleGrid>
  );
}
