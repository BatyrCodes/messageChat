import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { isFirebaseConfigured } from "./lib/firebase";

const App = () => {
  if (!isFirebaseConfigured) {
    return (
      <main className="firebase-setup" role="alert">
        <h1>ChatAI needs Firebase configuration</h1>
        <p>
          Add your Firebase Web API key as the <code>VITE_API_KEY</code> Actions
          secret in the GitHub repository, then rerun the deployment workflow.
        </p>
      </main>
    );
  }

  const user = true;
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
