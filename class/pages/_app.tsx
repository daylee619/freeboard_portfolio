// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// ////////// 파이어베이스 ///////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5U8JM4DumMAQiN8H9Smi8Au0x8XtZHqI",
  authDomain: "project-01-f25fc.firebaseapp.com",
  projectId: "project-01-f25fc",
  storageBucket: "project-01-f25fc.appspot.com",
  messagingSenderId: "416377068755",
  appId: "1:416377068755:web:226708579885e40cb74826",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// ////////////////////////////////////////////////

export default function App({ Component }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}
