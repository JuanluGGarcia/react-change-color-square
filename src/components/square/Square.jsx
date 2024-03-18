import { useState } from 'react';
import Button from '../button/Button';
import { StyledSquare } from './style';

const Square = () => {
	const [isRed, setIsRed] = useState(true);

	return (
		<>
			<StyledSquare $bgColorIsRed={isRed} />
			<Button action={() => handleColor(isRed, setIsRed)}>Change Color</Button>
		</>
	);
};

const handleColor = (isRed, setIsRed) => {
	if (isRed === true) {
		setIsRed(false);
	} else {
		setIsRed(true);
	}
	setIsRed(!isRed);
	// console.log(isRed);

    // Esto tambien se podría poner como:
    // setIsRed(!isRed);
};

export default Square;
