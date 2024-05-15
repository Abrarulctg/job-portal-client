import { Helmet } from "react-helmet";


const TokenBlog = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Helmet>
                <title>Job Portal | Blogs</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div>
                <img src="https://i.ibb.co/82jsS0w/1686391647921.png" className="w-full h-96 rounded-xl my-6" alt="" />

                <h1 className="text-3xl font-bold mb-6">What is an access token and refresh token? How do they work and where should we store them on the client side?"</h1>
                <h1 className="text-2xl font-semibold">
                    Access Token
                </h1>
                <p className="mb-6">Access tokens serve as credentials to access protected resources on behalf of users or clients. Once a user authenticates and receives an access token, they can include it in subsequent requests to access protected endpoints or resources. These tokens typically have a limited lifespan, expiring after a certain period, often short-lived, such as minutes or hours. Additionally, access tokens may contain information about the permissions granted to the client, determining the resources it can access.
                </p>
                <h1 className="text-2xl font-semibold">
                    Refresh Token
                </h1>
                <p className="mb-6">
                    On the other hand, refresh tokens are credentials used to obtain new access tokens when the current ones expire. They are typically long-lived compared to access tokens and are used to acquire fresh access tokens without requiring users to reauthenticate. Refresh tokens are securely stored on the client side and exchanged with the authorization server for new access tokens. Like access tokens, refresh tokens also have an expiration period, but it is usually longer.
                </p>
                <p className="bg-[#2848ff28] py-10 px-6 rounded-xl border-l-8 border-[#2847ff] my-8 text-3xl">
                    Access tokens and refresh tokens are essential components of token-based authentication systems, commonly employed in web applications and APIs.
                </p>
                <h1 className="text-2xl font-semibold">
                    Functionality
                </h1>
                <p className="mb-6">
                    Initially, users authenticate with the server using their credentials. Upon successful authentication, the server generates both an access token and a refresh token. The access token is then utilized to access protected resources by including it in the authorization header of HTTP requests. When the access token expires, the client can utilize the refresh token to request a new access token from the authorization server without requiring the user to log in again. However, if the refresh token expires or is revoked, the user needs to reauthenticate to obtain new tokens.
                </p>
                <p className="mb-6">
                    The workflow of access tokens and refresh tokens involves several steps. When a user logs in or authenticates, the authentication server validates their credentials and issues both an access token and a refresh token. The access token is then used to access protected resources, while the refresh token is securely stored on the client side. When the access token expires, the client sends the refresh token to the authentication server to obtain a new access token, maintaining the user's session without requiring them to log in again.
                </p>

                <h1 className="text-2xl font-semibold">
                    Storage on the Client Side:
                </h1>
                <p className="mb-6">
                    To ensure security, access tokens and refresh tokens should be stored securely on the client side. Access tokens are typically stored in memory or local storage due to their short lifespan and frequent usage. Conversely, refresh tokens, being long-lived and sensitive, necessitate secure storage mechanisms such as HTTP-only cookies or secure storage APIs provided by the platform.
                </p>
                <p className="mb-6">
                    By implementing robust authentication mechanisms using access tokens and refresh tokens, developers can ensure the security and integrity of their web applications and APIs, providing users with a seamless and secure authentication experience while protecting sensitive resources from unauthorized access.
                </p>

            </div>

        </div>
    );
};

export default TokenBlog;