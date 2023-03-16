// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

export default function App({ Component }: AppProps) {
  return (
    // { <Head> 모든 페이지에서 카카오맵을 다운로드 받으므로 비효율적임
    //   <script
    //     type="text/javascript"
    //     src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c614f32dcffc7d394e9014ffc620201c"
    //   ></script>
    // </Head> }
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
