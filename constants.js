// Twitch Constants
export const TWITCH_SECRET = "t550rvgdfbyxt0y6d7r7j3a89u276c";
export const TWITCH_CLIENT_ID = "pdpnwoaaf1osp8ik9aa364qvc5oeze";
export const TWITCH_OAUTH_URI = "https://id.twitch.tv/oauth2/authorize?"
export const TWITCH_CLIENT_ID_PARAM = "client_id";
export const TWITCH_REDIRECT_URI_PARAM = "redirect_uri";
export const TWITCH_REDIRECT_URI_LOCAL_DEV = "https://localhost:80/";
export const TWITCH_RESPONSE_TYPE_PARAM = "response_type";
export const TWITCH_RESPONSE_TYPE_TOKEN = "token";
export const TWITCH_SCOPE_PARAM = "scope";
export const TWITCH_FORCE_VERIFY_PARAM = "force_verify";
export const TWITCH_STATE_PARAM = 'state';
export const TWITCH_TOKEN_BEARER_QUERY_VALUE = "bearer";
// genRandomValues is cryptographically secure and can be used for strongly-seeded PRNG. It returns an array
// so just take the first value as your token.
// export const TWITCH_STATE_CSRF_TOKEN_DEV = window.crypto.getRandomValues(new Uint32Array(1))[0].toString();
