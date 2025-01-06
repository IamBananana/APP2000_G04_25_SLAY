import React from "react";

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h2>Hello, {name}! Welcome to TypeScript + React.</h2>;
};

export default Greeting;
