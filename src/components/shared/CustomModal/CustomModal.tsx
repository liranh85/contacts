import { makeStyles, Modal } from '@material-ui/core';
import React from 'react';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
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
	title,
	children,
}) => {
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);

	return (
		<div>
			<Modal
				open={isOpen}
				onClose={onClose}
				{...(title && { 'aria-labelledby': 'modal-title' })}
				{...(children && { 'aria-describedby': 'modal-content' })}
			>
				<div
					style={modalStyle}
					className={classes.paper}
				>
					<h2 id="modal-title">{title}</h2>
					<p id="modal-content">
						{children}
					</p>
				</div>
			</Modal>
		</div>
	);
}

export default CustomModal;
