import { useAuthContext } from '../context/AuthContext';

export function ContextDisplay() {
  const { someText, status } = useAuthContext();
  return (
    <>
      <h2>Context</h2>
      <p><b>someText:</b> {someText}</p>
      <p><b>Status:</b> {status}</p>
    </>
  );
}
