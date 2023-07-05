<script>
  import '../index.css'
  import '../styles/main.scss'
  import Header from './../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<Header />
<slot />
<Footer />
