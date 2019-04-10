import * as React from 'react';
import strings from '@config/strings';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import colors from '@config/colors';

class LoginScreen extends React.Component<{}> {
    render() {
        const name: string =
            'jesus';
        return (
            <View
                style={
                    styles.container
                }
            >
                <Text>
                    {
                        strings.WELCOME_TO_LOGIN
                    }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor:
                colors.WHITE,
            alignItems:
                'center',
            justifyContent:
                'center'
        }
    }
);

export default LoginScreen;
