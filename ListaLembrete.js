import React from 'react';
import { Text, View, Button } from 'react-native';

export default class ListaLembrete extends React.Component {
    state = {
        lembretes: []
    };

    componentDidMount () {
        fetch('https://devreminder.herokuapp.com/lembrete', { method: 'GET' })
            .then(T => T.json())
            .then(lembretes => this.setState({ lembretes }))
    }

    render() {
        const {lembretes} = this.state
        return (
            <View>
                <Text>Lembrete</Text>
                <Button title='Adicionar' onPress={() => console.log('Criou o lembrete')}/>
                <View>
                    <View>
                        {lembretes.map((lembrete, key) =>(
                            <View key={key}>
                                <Text>{lembrete.conteudo}</Text>
                                <Button title='Editar' onPress={() => console.log('Editou')}/>
                                <Button title='Excluir' onPress={() => console.log('Excluiu')}/>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        );
    }
}

