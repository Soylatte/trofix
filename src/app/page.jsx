import Main from './components/Main'
import Order from './components/Order'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Main />
     <Order />

    </main>
  );
}
