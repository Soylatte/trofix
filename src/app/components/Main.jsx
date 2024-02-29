import Image from 'next/image'

const Main  = () => {

  return (
    <div className="hero min-h-screen relative w-full">
        <Image src="/Main.jpg" layout="fill" objectFit="cover" alt="main" />
        <div className="flex flex-col items-center justify-center h-full text-white absolute top-0 left-0 right-0 bottom-0">
            <h1>AWESOME POKÉ, AWESOME PEOPLE</h1>
            <p className="mb-5">BUILD YOUR OWN BOWL</p>
      <button className="btn btn-primary">ORDER NOW!</button>
        </div>
    </div>
  )
}

export default Main;