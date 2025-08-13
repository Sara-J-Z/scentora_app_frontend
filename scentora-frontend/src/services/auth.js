export async function SignInUser(credentials) {
  const response = await fetch('http://127.0.0.1:8000/api/signin/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  if (!response.ok) {
    throw new Error('Sign in failed');
  }
  return await response.json();
}


export async function RegisterUser(userData) {
  const response = await fetch('http://127.0.0.1:8000/api/register/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }
  return await response.json();
}
