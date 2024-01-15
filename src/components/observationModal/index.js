import React from 'react';
import {
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Dimensions,
    StatusBar,
} from 'react-native';
import { styles } from './styles';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import { Styles } from '../../styles';
import { useProducts } from '../../store/useProducts';
import { useNavigation } from '@react-navigation/native';
const { height } = Dimensions.get('window')
const heightScrenn = Dimensions.get('screen')

export function ObservationModal() {

    const navigationBoxHeight = (heightScrenn.height - height) - StatusBar.currentHeight;
    const { goBack } = useNavigation();

    const hideObservationModal = useProducts((state) => state.hideObservationModal);
    const observationModal = useProducts((state) => state.observationModal);
    const observation = useProducts((state) => state.observation);
    const addObservation = useProducts((state) => state.addObservation);
    const cancelObservation = useProducts((state) => state.cancelObservation);
    const confirmObservation = useProducts((state) => state.
        confirmObservation);

    return (
        <Modal
            transparent={true}
            visible={observationModal}
            // Essa função é executada quando eu aperto o botão voltar do celular "onRequestClose". Porque se eu não usar ela, o botão voltar não funciona quando o modal está visível.
            onRequestClose={() => {
                cancelObservation();
                goBack();
            }}
        >
            <TouchableWithoutFeedback
                onPress={hideObservationModal}
            >

                <View
                    style={styles.container}
                >
                    <TouchableWithoutFeedback>
                        <View style={styles.box}>
                            <Text
                                style={styles.title}
                            >
                                observação
                            </Text>
                            <Text
                                style={styles.text}
                            >
                                {useTheFirstLetterCapitalized('adicionar observação')}
                            </Text>

                            <TextInput
                                style={styles.textInput}
                                value={observation.value}
                                onChangeText={text => addObservation(text)}
                                placeholder='Qual sua observação?'
                                placeholderTextColor={Styles.cor.beige}
                            />

                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity
                                    style={[styles.button, {
                                        borderRightWidth: 1,
                                        borderColor: Styles.cor.beige,
                                    }]}
                                    onPress={cancelObservation}
                                >
                                    <Text
                                        style={styles.buttonText}
                                    >
                                        cancelar
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={confirmObservation}
                                >
                                    <Text
                                        style={[styles.buttonText, {
                                            fontWeight: 'bold',
                                        }]}
                                    >
                                        confirmar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal >
    );
}