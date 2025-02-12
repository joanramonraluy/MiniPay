import React, { useState } from 'react';
import './SendNFC.css';

const SendNFC: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const sendMessage = async () => {
    if ('NDEFReader' in window) {
      try {
        const ndef = new (window as any).NDEFReader();
        await ndef.write("Hola món");
        setStatusMessage("Missatge enviat correctament: Hola món");
      } catch (error) {
        console.error("Error enviant el missatge:", error);
        setStatusMessage("Error enviant el missatge. Revisa si tens NFC habilitat.");
      }
    } else {
      setStatusMessage("El teu dispositiu o navegador no suporta NFC.");
    }
  };

  return (
    <div className="send-nfc">
      <button onClick={sendMessage}>Enviar "Hola món"</button>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default SendNFC;