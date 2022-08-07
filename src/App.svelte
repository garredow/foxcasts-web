<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate, Route, Router } from 'svelte-routing';
  import Footer from './components/Footer.svelte';
  import Header from './components/Header.svelte';
  import { authClient } from './lib/authClient';
  import { graphClient } from './lib/graphClient';
  import Dashboard from './routes/Dashboard.svelte';
  import Home from './routes/Home.svelte';
  import Library from './routes/Library.svelte';
  import Profile from './routes/Profile.svelte';
  import Search from './routes/Search.svelte';
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
      if (location.pathname === '/') navigate('dashboard');
    }
  });
</script>

<Router {url}>
  <Header />
  <Route path="/"><Home /></Route>
  <Route path="dashboard" component={Dashboard} />
  <Route path="profile" component={Profile} />
  <Route path="library" component={Library} />
  <Route path="search" component={Search} />
  <Footer />
</Router>
