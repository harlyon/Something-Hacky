import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import styles from "../styles/Home.module.css";
import { Data } from "../public/data";
export const HomeScreen = () => {
  const [data, setData] = useState<string | null>("");
  const [showScanner, setShowScanner] = useState(false);

  const show = () => {
    setShowScanner(!showScanner);
  };

  return (
    <div className={styles.home}>
      <p>QR Scanner</p>
      <button onClick={show}>
        {!showScanner ? `ReveaL Scanner` : `Close Scanner`}
      </button>

      {showScanner && (
        <QrReader
          constraints={{ facingMode: "user" }}
          containerStyle={{ width: "80%" }}
          videoContainerStyle={{ height: "80%" }}
          onResult={(result: any, error: any) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
        />
      )}
      <p className="styles.paragraph">
        {showScanner
          ? `${data}`
          : "Click on the button above to show the scanner"
        }
      </p>
    </div>
  );
};
