import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import GlobalStyle from "./global/globalstyle";
import GithubProvider from "./providers/github-provider";


function App() {
  return (
    <main>
      <GithubProvider>
        <GlobalStyle/>
        <Layout>
            <Profile></Profile>
            <Repositories></Repositories>
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
