import { makeStyles, Modal } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: '80%',
		maxWidth: 800,
		borderRadius: 23,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
}));

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
}

const CustomModal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
}) => {
	const classes = useStyles();

	return (
		<div>
			<Modal
				open={isOpen}
				onClose={onClose}
			>
				<div
					className={classes.paper}
				>
					{children}
				</div>
			</Modal>
		</div>
	);
}

export default CustomModal;
