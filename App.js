import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Button, Switch} from 'react-native';

import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

export default function App() {
  
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [genero, setGenero] = useState('')
  const [valor, setValor] = useState(20)
  const [status, setStatus] = useState(false)
  const [opcao, setOpcao] = useState([
    {generoNome: 'Feminino', valor: 1},
    {generoNome: 'Masculino', valor: 2},
  ])


  function entrar(){

    if(nome === '' || idade === ''){
      alert("Digite os dados corretamente!")
      return;
    }

    alert(
      "Conta aberta com sucesso! \n\n" +
      "Nome: " + nome + "\n" +
      "Idade: " + idade + "\n" +
      "Sexo: " + opcao[genero].generoNome + "\n" + 
      "Limite: R$ " + valor.toFixed(2) + "\n" +"\n" +
      "Estudante: " + (status ? 'Sim' : 'Não')
      )

  }

  let generos = opcao.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.generoNome}/>
  })
  return (

    <View style={styles.container} >
      
      <Text style={styles.titulo}>Banco Sujeito</Text>

      <View style={{flex: 4, alignItems: 'stretch', top: 25, backgroundColor: '#D9D9D9'}}>
        <Text style={{ textAlign: 'center', fontSize: 20, marginHorizontal: 15, color: '#024959', marginTop: 8, fontWeight: 'bold'}}>Abertura de Contas</Text>
        <Text style={{ textAlign: 'justify', fontSize: 18, marginHorizontal: 15, color: '#024959', marginTop: 8, fontWeight: 'bold'}}>Nome</Text>
        <TextInput 
          style={styles.input}
          placeholder='Digite seu nome'
          onChangeText={(texto) => setNome(texto)}
        />

        <Text style={{ textAlign: 'justify', fontSize: 18, marginHorizontal: 15, color: '#024959', fontWeight: 'bold'}}>Idade</Text>
        <TextInput 
          style={styles.input}
          placeholder='Digite sua idade'
          onChangeText={(texto) => setIdade(texto)}
          keyboardType="numeric"
        />

        <Picker
          style={{ marginTop: -25}}
          selectedValue={genero}
          onValueChange={ (itemValue, itemIndex) => setGenero(itemValue)}>
          {generos}

        </Picker>

        <Text style={{ textAlign: 'justify', fontSize: 18, marginHorizontal: 15, color: '#024959', fontWeight: 'bold', top: -15}}>Limite</Text>
        <Slider
        style={{ marginHorizontal: 15, marginTop: -15}}
        minimumValue={500}
        maximumValue={10000}
        value={valor}
        onValueChange={ (valorSelecionado) => setValor(valorSelecionado) }
        minimumTrackTintColor="#037F8C"
        />
        <Text style={{ textAlign: 'center', fontSize: 18, marginHorizontal: 15, color: '#024959', fontWeight: 'bold'}}>R$ {valor.toFixed(2)}</Text>

        <Text style={{ fontSize: 18, marginHorizontal: 15, marginTop: 15, color: '#024959', fontWeight: 'bold'}}>
          Estudante? {status}

        </Text>
        
        <Switch
        style={{marginHorizontal: 15, top: 10}}
        value={status}
        onValueChange={ (statusSelecionado) => setStatus(statusSelecionado) }
        trackColor={{true: '#037F8C'}}
      />

      </View>

      <View style={{flex: 1, alignItems: 'stretch', top: 60, backgroundColor: '#024959'}}>
        <Button color={'#D9D9D9'} title='Criar Conta' onPress={ entrar } style={styles.botao}/>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#024959',
    flexDirection: 'column',
  },
  titulo:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#D9D9D9',
    marginTop: 50
  },
  input:{
    height: 50,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
    borderColor: '#025959'
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  },
})




