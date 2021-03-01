import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import ArrowRightImg from 'src/assets/arrow-right.png';

const useStyles = makeStyles((theme) => ({
	Contact: {
		width: '100%',
	},
	content: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: theme.spacing(6),
	},
	leftSide: {
		display: 'flex',
		alignItems: 'center',
	},
	rightSide: {

	},
	nameAndRole: {
		marginLeft: theme.spacing(2),
	},
	name: {
		fontSize: 24,
		fontWeight: 600,
		color: '#243443',
	},
	role: {
		fontSize: 18,
		color: '#58616A',
	},
	avatarContainer: {
		position: 'relative',
	},
	avatar: {
		width: 70,
		height: 70,
	},
	availabilityIndicator: ({ isAvailable }: { isAvailable: boolean }) => ({
		position: 'absolute',
		right: 0,
		bottom: 10,
		width: 16,
		height: 16,
		border: '2px solid #FFFFFF',
		borderRadius: '50%',
		backgroundColor: isAvailable ? '#2DCA8C' : '#FC6E4F',
	}),
}));

export interface ContactProps {
	name: string;
	role: string;
	avatarUrl: string;
	isAvailable: boolean;
}

const Contact: React.FC<ContactProps> = ({
	name,
	role,
	avatarUrl,
	isAvailable,
}) => {
	const classes = useStyles({ isAvailable });
	return (
		<Card className={classes.Contact}>
			<CardContent className={classes.content}>
				<div className={classes.leftSide}>
					<div className={classes.avatarContainer}>
						<img
							src={avatarUrl}
							alt="contact avatar"
							className={classes.avatar}
						/>
						<div className={classes.availabilityIndicator}></div>
					</div>
					<div className={classes.nameAndRole}>
						<p className={classes.name}>{name}</p>
						<p className={classes.role}>{role}</p>
					</div>
				</div>
				<div className={classes.rightSide}>
					<img src={ArrowRightImg} alt="arrow right" />
				</div>
			</CardContent>
		</Card>
	)
}

export default Contact;
