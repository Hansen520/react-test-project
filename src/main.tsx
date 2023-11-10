<<<<<<< HEAD

import '@/styles/global.less';
import "@/styles/reset.less";
import App from "./App";
=======
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.less";
import store from "@/store";
import { Provider as ProviderAuth } from "@/utils/useAuth.tsx";
>>>>>>> a59844b0c7aa2cc365fbd9680c48a7a17678a0af

const { Provider } = store;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/*<React.StrictMode>*/}
    <ProviderAuth value={{}}>
      <Provider>
        <App />
      </Provider>
    </ProviderAuth>
    {/*</React.StrictMode>*/}
  </>
);
