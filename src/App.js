import CryptoJS from 'crypto-js';
import './App.css';

function App() {

  const cifrar = (texto) =>{
    var textoCifrado = CryptoJS.AES.encrypt(texto,'MAHG').toString();
    return textoCifrado;
  }

  const decifrar = (texto) => {
    var bytes = CryptoJS.AES.decrypt(texto,'MAHG');
    var TextoDesifrado = bytes.toString(CryptoJS.enc.Utf8);
    return TextoDesifrado;
  }
  return (
    <div className="App">
      <p> Texto cifrado: { cifrar("Hola")}</p>
      <p> Texto decifrado : {decifrar(cifrar("Hola"))}</p>
    </div>
  );
}

export default App;
