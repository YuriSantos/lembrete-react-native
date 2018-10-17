import React from 'react';
import { Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    lembretes: []
  };

    componentDidMount () {
        fetch('https://devreminder.herokuapp.com/lembrete', { method: 'GET' })
            .then(T => T.json())
            .then(lembretes => this.setState({ lembretes }))
    }

  render() {
    return (
      <View>
        <Text>Lembrete</Text>
        <Button title='Adicionar' onPress={() => console.log('Criou o lembrete')}/>
        <View>
          <View>
            <Text>Lembrete 1</Text>
              <Button title='Editar' onPress={() => console.log('Editou')}/>
              <Button title='Excluir' onPress={() => console.log('Excluiu')}/>
          </View>
            <View>
                <Text>Lembrete 2</Text>
                <Button title='Editar' onPress={() => console.log('Editou')}/>
                <Button title='Excluir' onPress={() => console.log('Excluiu')}/>
            </View>

        </View>
      </View>
    );
  }
}

