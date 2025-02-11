import { useCallback, useEffect, useState } from "react";
import { MDS } from "@minima-global/mds";
 
export function Balance() {
  const [balance, setBalance] = useState<string | undefined>("");
 
  const getBalance = useCallback(async () => {
    const balance = await MDS.cmd.balance();
    if (balance.response) {
      const minimaToken = balance.response.find((token) => token.token === "Minima");
      setBalance(minimaToken?.confirmed);
    }
  }, []);
 
  useEffect(() => {
    getBalance();
  }, [getBalance]);
 
  return (
    <div> 
      Balance Tutorial <br /> Your confirmed balance is: {balance} 
    </div> 
  );
}