import { useState } from "react";

function About() {
  const [count, setCount] = useState(0);
  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
    >
      About Page{count}
    </div>
  );
}

export default About;
