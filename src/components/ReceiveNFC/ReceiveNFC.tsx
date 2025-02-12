import React, { useEffect, useState } from 'react';
import './ReceiveNFC.css';

const ReceiveNFC: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>("Esperant missatge NFC...");

  useEffect(() => {
    if ('NDEFReader' in window) {
      const ndef = new (window as any).NDEFReader();
      ndef.scan()
        .then(() => {
          setStatusMessage("Escanejant NFC... Apropa una etiqueta o dispositiu.");
          ndef.onreading = (event: any) => {
            const decoder = new TextDecoder();
            for (const record of event.message.records) {
              setMessage(decoder.decode(record.data));
              setStatusMessage("Missatge rebut correctament.");
            }
          };
        })
        .catch((error: any) => {
          console.error("Error escanejant NFC:", error);
          setStatusMessage("Error escanejant NFC. Revisa si tens NFC habilitat.");
        });
    } else {
      setStatusMessage("El teu dispositiu o navegador no suporta NFC.");
    }
  }, []);

  return (
    <div className="receive-nfc">
      <h3>Missatge rebut:</h3>
      <p>{message || "Cap missatge encara."}</p>
      <p className="status-message">{statusMessage}</p>
    </div>
  );
};

export default ReceiveNFC;
