import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { SignupComponent } from "react-wrapper";
import { db } from "./firebase";

import "./index.scss";

const App = () => {
  const [config, setConfig] = useState();

  const fetchConfig = async () => {
    await getDocs(collection(db, "themeConfig")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      //@ts-ignore
      setConfig(newData[0].themeConfig);
      console.log("NEW DATA", newData);
    });
  };

  useEffect(() => {
    fetchConfig();
  }, []);
  return (
    <div className='mx-auto h-screen'>
      {config && (
        <SignupComponent
          className='h-full'
          data={config}
        />
      )}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
