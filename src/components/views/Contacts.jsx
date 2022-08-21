import ContactList from '../contacts/ContactList';
import Search from '../contacts/Search';
import Button from '../global/Button';
import Header from '../layout/Header';
import Navbar from '../layout/Navbar';

const Contacts = () => {
  return (
    <>
      <div className="container">
        <Header>
          <img src="/assets/settings-icon.svg" alt="Settings" />
        </Header>
        <div className="flex justify-between items-center mt-12">
          <div className="flex flex-col">
            <span></span>
            <h1 className="text-2xl leading-none">Contacts</h1>
          </div>

          <Button link="/add-contact">+ New Contact</Button>
        </div>
        <div className="pt-10 pb-8">
          <Search />
        </div>
        <div>
          <ContactList />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Contacts;
