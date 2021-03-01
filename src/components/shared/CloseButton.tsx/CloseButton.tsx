import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	CloseButton: {},
	button: {
		width: 45,
		height: 45,
		borderRadius: '50%',
		backgroundColor: '#E5F1FF',
		cursor: 'pointer',
		position: 'relative',
		'&::after': {
			position: 'absolute',
			content: '"\\d7"',
			fontSize: 24,
			color: '#377DFF',
			fontWeight: 'bold',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -55%)',
		},
		'&:hover': {
			backgroundColor: '#377DFF',
			'&::after': {
				color: '#FFF',
			},
		},
	},
}));

interface CloseButtonProps {
	onClick?: () => void;
	classNames?: {
		CloseButton?: string;
	}
}

const CloseButton: React.FC<CloseButtonProps> = ({
	onClick,
	classNames,
}) => {
	const classes = useStyles({ classes: classNames });

	return (
		<div
			className={classes.CloseButton}
			onClick={onClick}
		>
			<div className={classes.button}></div>
		</div>
	);
}

export default CloseButton;
