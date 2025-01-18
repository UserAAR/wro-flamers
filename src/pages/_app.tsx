// import { SessionProvider, signOut } from "next-auth/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import getInitialProps from "@/lib/getInitialProps";
// import AuthProvider from "@/context/AuthProvider";
// import LayoutManager from "../../layouts";
// import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { trpc } from "@/server/trpc";
import { useEffect } from "react";
import { Toaster } from "sonner";
import "@/styles/globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

function App({
  Component,
  pageProps,
  auth,
}: AppProps & { initialLayout: string; messages: any; auth: any }) {
  // useEffect(() => {
  //   if (auth?._destroy) signOut();
  // }, [auth]);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      {/* <SessionProvider session={pageProps?.session}> */}
        {/* <AuthProvider initialAuth={auth}>
          <ThemeProvider attribute="class"> */}
            {/* <LayoutManager> */}
              <Toaster />
              <Component {...pageProps} />
            {/* </LayoutManager> */}
          {/* </ThemeProvider>
        </AuthProvider>
      </SessionProvider> */}
    </>
  );
}

const Template = trpc.withTRPC(App);
const tempInitial = Template.getInitialProps;

Template.getInitialProps = (appContext) =>
  getInitialProps(appContext, tempInitial);

export default Template;
