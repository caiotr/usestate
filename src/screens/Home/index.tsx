import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
    const [name,setname] = useState('')
    const [email,setemail]= useState('')
    function handleUserAdd(){
        console.log(
            "nome completo: "+name+"\nEmail: "+ email
        )
        Alert.alert(
            "Nome Completo: "+name+"\nEmail: "+email
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Preencha os Dados</Text>

            <TextInput style={styles.input}
            placeholder="Nome Completo"
            
            value={name}
            onChangeText={setname}

            />

            <TextInput style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setemail}

            />
            <TouchableOpacity style={styles.btn} onPress={ handleUserAdd}>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}