import { useState } from "react";

const useCount = () => {
	const [count, setCount] = useState(0);

	return { count };
};

export default useCount;
