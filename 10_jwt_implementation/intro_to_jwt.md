# 📜 JSON Web Token (JWT) in Node.js

## What is JWT?

**JWT (JSON Web Token)** is a compact, URL-safe means of representing claims to be transferred between two parties. It is widely used for securely transmitting information between a client and a server, particularly for **authentication** and **authorization** purposes.

A JWT is essentially a **token** composed of three parts:
- **Header**: Contains metadata about the token, such as the type of token and the signing algorithm.
- **Payload**: Carries the claims or information, such as user ID, roles, and expiration time.
- **Signature**: Ensures that the token has not been tampered with, created by signing the header and payload with a secret key or a public/private key pair.

The three parts are base64 encoded and joined with dots (`.`), like this:
```
<Header>.<Payload>.<Signature>
```

---

## Why Use JWT in Node.js?

- **Stateless Authentication**: No need to store session data on the server.
- **Scalability**: Because the server doesn't need to track sessions, scaling horizontally (adding more servers) becomes easier.
- **Security**: Data is verifiable and can be protected against tampering.
- **Flexibility**: Can be used for APIs, web apps, and even microservices communication.

---

## Common JWT Workflow in Node.js

1. **User Login**: A user provides credentials (like email and password).
2. **Token Generation**: If credentials are valid, the server creates a JWT containing user information.
3. **Token Transmission**: The JWT is sent back to the client, usually stored in localStorage, sessionStorage, or cookies.
4. **Authenticated Requests**: For subsequent requests, the client sends the JWT (typically in the `Authorization` header).
5. **Token Verification**: The server verifies the token's signature and extracts user information to process the request.

---

## Important Considerations

- **Expiration**: Always set an expiration (`exp`) claim to limit token lifetime.
- **Secret Management**: Keep your secret keys secure.
- **Refresh Tokens**: Implement refresh tokens to allow users to stay logged in without issuing long-lived tokens.
- **Blacklist Tokens**: Consider strategies for invalidating tokens when needed (e.g., on logout).

---

> In summary, JWT provides a powerful, flexible, and stateless way to manage authentication and authorization in Node.js applications, making it a key component in modern web development.
