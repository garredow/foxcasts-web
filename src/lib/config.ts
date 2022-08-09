type Config = {
  apiUrl: string;
  apiToken?: string;
  authDomain: string;
  authClientId: string;
  authRedirectUri: string;
  authScope: string;
  authAudience: string;
};

export const config: Config = {
  apiUrl: 'http://localhost:3005',
  authDomain: 'foxcasts.us.auth0.com',
  authClientId: '55YoJp810kRcRcavhU5RkzUuxRJs4gW9',
  authRedirectUri: window.location.origin,
  authScope: 'read:current_user update:current_user_metadata offline_access openid',
  authAudience: 'https://api.foxcasts.com',
};
