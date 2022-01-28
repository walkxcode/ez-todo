import React from 'react';
import { Text, HStack, Switch, useColorMode } from 'native-base';

export default function ThemeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<HStack space={2} alignItems="center">
			<Text>Light</Text>
			<Switch isChecked={colorMode === 'dark'} onToggle={toggleColorMode} />
			<Text>Dark</Text>
		</HStack>
	);
}
