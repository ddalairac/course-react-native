import { eAuthStatus, useAuthContext } from '../context/AuthContext';

export function ContextDisplay() {
  const { someText, status, isAuthLoading, loginWithEmailAndPassword, logout } =
    useAuthContext();

  if (isAuthLoading) {
    return <p>Loading...</p>;
  }
  if (status === eAuthStatus.inactive) {
    return (
      <>
        <h1>Login</h1>
        <input type='text' name='name' />
        <input type='password' name='pass' />
        <button
          type='button'
          onClick={() => loginWithEmailAndPassword('diego', '1234')}
        >
          Acept
        </button>
      </>
    );
  }

  return (
    <>
      <h2>Context</h2>
      <p>
        <b>someText:</b> {someText}
      </p>
      <p>
        <b>Status:</b> {status}
      </p>
      <button type='button' onClick={logout}>
        logout
      </button>
    </>
  );
}
