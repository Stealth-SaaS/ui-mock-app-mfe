import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { SignupComponent } from "react-wrapper";
import { db } from "./firebase";

import "./index.scss";

const App = () => {
  const [config, setConfig] = useState();
  console.log(config);
  const fetchPost = async () => {
    await getDocs(collection(db, "todos")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      //@ts-ignore
      setConfig(newData[0].themeConfig);
      console.log(newData);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <h1 className='text-center'>Hello World</h1>
      {config && <SignupComponent data={config} />}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
