import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { lazy } from 'react';

// Import your necessary components and providers here.
// Make sure you import the required components and providers related to the chatbot functionality.

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

// Lazy-load the necessary components here.
// You may need to import components specific to your chatbot features.

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;

  return (
    // You can include your chatbot components and providers here.
    // Depending on the architecture and structure of your chatbot, you may have different components and providers to integrate.

    <>
      {draftMode ? (
        // Render components and providers for draft mode.
        // You may have specific components and logic for draft mode.
        // Include them here.
        // Example: <DraftModeProvider token={token}>
        //              <Component {...pageProps} />
        //           </DraftModeProvider>
      ) : (
        // Render components and providers for regular mode.
        // Include the components and logic for regular mode here.
        // Example: <RegularModeProvider>
        //              <Component {...pageProps} />
        //           </RegularModeProvider>
      )}
    </>
  );
}
vider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
