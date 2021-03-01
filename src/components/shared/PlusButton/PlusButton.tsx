import { makeStyles } from '@material-ui/core';
import React from 'react';
import whitePlusIconImg from 'src/assets/white-plus-icon.png';

// Can easily be extended to show different images, background colors, having different dimensions, etc.

const useStyles = makeStyles((theme) => ({
	PlusButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#377DFF',
		borderRadius: '50%',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#0D3379',
		},
	},
}));

interface PlusButtonProps {
	onClick?: () => void;
	imgAlt?: string;
	classNames?: {
		PlusButton?: string;
	},
}

const PlusButton: React.FC<PlusButtonProps> = ({
	onClick,
	imgAlt,
	classNames,
}) => {
	const classes = useStyles({ classes: classNames });

	return (
		<div
			className={classes.PlusButton}
			onClick={onClick}
		>
			<img src={whitePlusIconImg} alt={imgAlt} />
		</div>
	);
}

export default PlusButton;
