import React from "react";

import {
	StyleSheet,
	View,
	Text
} from "react-native";

class Pin extends React.Component{
	render(){
		return (
			<View style={styles.PinContainer}>
				<View style={styles.PinHeader}>
					<View style={styles.UtilityNav}>
						<Text>Go back</Text>
						<Text>Heart it</Text>
						<Text>Share it</Text>
						<Text>View more</Text>
					</View>
					<View style={styles.PinButtonContainer}>
						<View style={styles.PinButton}>
							<Text style={styles.PinButtonText}>
								Save
							</Text>
						</View>
					</View>
				</View>

				<View style={styles.PinContent}>
					<Text style={styles.imagePlaceholder}>
						Placeholder
					</Text>
				</View>

				<View style={styles.PinMeta}>
					<View style={styles.PinMetaTextContainer}>
						<Text style={styles.PinMetaText}>
							Saved from
						</Text>
						<Text style={styles.PinMetaText}>
							website.com
						</Text>
					</View>

					<View style={styles.PinButtonContainer}>
						<View style={styles.PinButton}>
							<Text style={styles.PinButtonText}>
								Visit
							</Text>
						</View>
					</View>
				</View>

				<View style={styles.PinUser}>
					<View style={styles.PinUserAvatar}>
						<Text>Placeholder</Text>
					</View>
				</View>
				<View style={styles.PinUserContainer}>
					<Text style={styles.PinUserText}>
						<Text style={styles.TextBold}>
							User Name
						</Text> 
						saved to
						<Text style={styles.TextBold}>
							Space
						</Text>
					</Text>
					<Text style={styles.PinUserText}>Lorem Ipsum</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	PinContainer: {
		flex: 1,
		alignSelf: 'stretch'
	},
	PinHeader: {
		padding: 8,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		flex: 1,
	},
	UtilityNav: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
	},
	PinButton: {
		flexDirection: 'row',
		backgroundColor: 'red',
		padding: 8,
		borderRadius: 6,
		justifyContent: 'space-between'
	},
	PinButtonText: {
		color: 'white'
	},
	PinButtonContainer: {
		flex: 1,
		alignItems: 'flex-end'
	},
	PinContent: {
		backgroundColor: '#c9c9c9',
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 8,
		paddingRight: 8,
	},
	PinMeta: {
		flex: 1,
		backgroundColor: 'white',
	},
	PinUser: {
		flex: 5
	},
	imagePlaceholder: {
		backgroundColor: '#1e1e1e',
		flex: 1,
		alignSelf: 'stretch',
		borderRadius: 6
	}
})

export default Pin;