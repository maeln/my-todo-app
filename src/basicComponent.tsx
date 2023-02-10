import "./styles.css";

interface NameProps {
  firstName: string;
  lastName: string;
}

export default function HelloName({ firstName, lastName }: NameProps) {
  return (
    <div>
      Hello {firstName} {lastName}
    </div>
  );
}
