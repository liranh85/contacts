import React, { useEffect, useState } from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import CustomModal from 'src/components/shared/CustomModal/CustomModal';
import api from 'src/services/api/api';
import Contact, { ContactProps } from 'src/components/Contact/Contact';
import PlusButton from 'src/components/shared/PlusButton/PlusButton';
import AddContact from 'src/components/AddContact/AddContact';

const useStyles = makeStyles((theme) => ({
	Contacts: {
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
	},
	contactListCard: {
		position: 'relative',
		width: 560,
		minHeight: 500,
		overflow: 'visible',
	},
	contactListCardContent: {
		width: '100%',
		padding: 0,
		paddingBottom: '0 !important',
		position: 'absolute',
		bottom: 5,
	},
	plusButton: {
		position: 'absolute',
		right: -165,
		bottom: 25,
		width: 100,
		height: 100,
	},
}));

const Contacts: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [contactList, setContactList] = useState<ContactProps[]>([]);
	const classes = useStyles();

	useEffect(
		() => {
			api.getContacts()
				.then(contacts => setContactList(contacts))
				.catch(error => {
					console.warn('Could not get contacts', error);
				});
		},
		[]
	)

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<div className={classes.Contacts}>
			<Card className={classes.contactListCard}>
				<CardContent className={classes.contactListCardContent}>
					{
						contactList.map((contact, i) => (
							<Contact
								key={i}
								{...contact}
							/>
						))
					}
				</CardContent>
				<PlusButton
					onClick={handleOpenModal}
					imgAlt="Add a new contact"
					classNames={{
						PlusButton: classes.plusButton,
					}}
				/>
			</Card>
			<CustomModal
				isOpen={isOpen}
				onClose={handleCloseModal}
			>
				<AddContact
					onClose={handleCloseModal}
				/>
			</CustomModal>
		</div>
	);
}

export default Contacts;
