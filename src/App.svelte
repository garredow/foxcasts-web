<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate, Route, Router } from 'svelte-routing';
  import Footer from './components/Footer.svelte';
  import Header from './components/Header.svelte';
  import { authClient } from './lib/authClient';
  import { graphClient } from './lib/graphClient';
  import Home from './routes/Home.svelte';
  import Profile from './routes/Profile.svelte';
  import { isAuthenticated, user } from './stores/auth';

  export let url = '';

  onMount(async () => {
    const loggedIn = await authClient.isAuthenticated();
    isAuthenticated.set(loggedIn);

    if (loggedIn) {
      const userObj: any = await authClient.getUser();
      userObj.token = await authClient.getTokenSilently();
      graphClient.setToken(userObj.token);
      user.set(userObj);
    }
  });

  $: {
    console.log('user', $user);
    if ($user) {
      graphClient.setToken($user.token);
      navigate('/profile');
    }
  }
</script>

<Router {url}>
  <Header />
  <Route path="/profile"><Profile /></Route>
  <Route path="/"><Home /></Route>
  <Footer />
</Router>
