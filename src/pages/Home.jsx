import imgPhonebook from '../images/imgPhonebook.png';
import imgHomePage from '../images/imgHomePage.jpg';
const Home = () => {
    return (<>
      <div className="relative w-2/4 text-left  items-center mt-20 ">
        <img src={imgPhonebook} alt="Phonebook" width={100} className='mb-4'/>
        <h1 className="text-2xl font-black mb-2 fontFamily-serif text-justify">
        Welcome to the <span className="uppercase text-sky-600">phonebook</span> application!{' '}
        </h1>
        <p className="text-lg text-justify indent-9">
Allowing you to add new contacts and edit existing ones, view lists and more, and you'll never forget anyone!</p>
<p className='text-lg text-justify indent-9'>To start working with the Phonebook, you need to
</p><a className="text-lg text-sky-700 underline italic" href="/goit-react-hw-08-phonebook/register">Register.</a>
      </div>
      <div className='flex w-2/4'>
<img src={imgHomePage} alt='' className='object-cover'/>
      </div>
      </>
    );
  }
  export default Home;