import { Link as RouterLink } from 'react-router-dom';
import { Card, CardHeader, CardBody, Heading, Text, Link } from '@chakra-ui/react';

export default function UserItem({ user }) {
  return (
    <Card variant="outline">
      <CardHeader pb={1}>
        <Heading size="md">
          <Link as={RouterLink} to={`/users/${user.id}`}>{user.name}</Link>
        </Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text>@{user.username}</Text>
        <Text fontSize="sm" color="gray.600">{user.email}</Text>
      </CardBody>
    </Card>
  );
}
