import { useParams, Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Card, CardHeader, CardBody, Heading, Text, Link, Stack } from '@chakra-ui/react';

export default function Users() {
  const { id } = useParams();
  const user = useSelector(s => s.users.list.find(u => String(u.id) === id));

  if (!user) return <Box p={6}><Text>User not found.</Text></Box>;

  return (
    <Box p={6} maxW="container.md" mx="auto">
      <Card>
        <CardHeader>
          <Heading size="lg">{user.name}</Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing={2}>
            <Text><b>Email:</b> {user.email ?? '-'}</Text>
            <Text><b>Username:</b> {user.username ?? '-'}</Text>
            <Text><b>Phone:</b> {user.phone ?? '-'}</Text>
            <Text><b>Website:</b> {user.website ?? '-'}</Text>
            {user.address && (
              <Text><b>Address:</b> {user.address.street}, {user.address.city}, {user.address.zipcode}</Text>
            )}
            {user.company && (
              <Text><b>Company:</b> {user.company.name}</Text>
            )}
            <Link as={RouterLink} to="/">← Back to list</Link>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
