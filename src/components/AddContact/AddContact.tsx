import { makeStyles } from '@material-ui/core';
import React from 'react';
import CloseButton from 'src/components/shared/CloseButton.tsx/CloseButton';
import avatarPlaceholderImg from 'src/assets/avatar-placeholder.png';

const useStyles = makeStyles((theme) => ({
	AddContact: {
		position: 'relative',
	},
	topPart: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: theme.spacing(4),
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#243443',
	},
	closeButton: {
		
	},
	avatar: {
		width: 230,
		height: 230,
		borderRadius: '50%',
	}
}));

interface AddContactProps {
	onClose: () => void;
}

const AddContact: React.FC<AddContactProps> = ({
	onClose,
}) => {
	const classes = useStyles();

	return (
		<div className={classes.AddContact}>
			<div className={classes.topPart}>
				<h1 className={classes.title}>Add a new contact</h1>
				<CloseButton
					onClick={onClose}
					classNames={{
						CloseButton: classes.closeButton,
					}}
				/>
			</div>
			<img
				src={avatarPlaceholderImg}
				alt="avatar placeholder"
				className={classes.avatar}
			/>
		</div>
	);
}

export default AddContact;
