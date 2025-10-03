import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";

export default function UserForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Name cannot be empty");
      return;
    }

    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email address");
      return;
    }

    onAdd({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={3} align="stretch" mb={6}>
        <FormControl isInvalid={!!error && !name.trim()}>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          {!name.trim() && error && (
            <FormErrorMessage>{error}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid={!!error && name.trim() && !/^\S+@\S+\.\S+$/.test(email)}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {name.trim() && !/^\S+@\S+\.\S+$/.test(email) && error && (
            <FormErrorMessage>{error}</FormErrorMessage>
          )}
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Add User
        </Button>
      </VStack>
    </form>
  );
}
