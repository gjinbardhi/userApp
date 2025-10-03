import { Input } from '@chakra-ui/react';

export default function SearchBar({ value, onChange, ...props }) {
  return (
    <Input
      placeholder="Search by name / username / email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}  // lets parent pass flex="1"
    />
  );
}
