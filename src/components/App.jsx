// import Footer from "./Footer/Footer";
import Button from "./Button/Button";
import Header from "./Header/Header";
import List from "./List/List";
// import Message from "./Message/Message";
import Modal from "./Modal/Modal";
// import Section from "./Section/Section";

const App = () => {
  const isOnline = false;
  const age = 5;
  const filmData = [
    { id: "1", title: "Terminator" },
    { id: "2", title: "Mr/Bean" },
    { id: "3", title: "Mr.Bean" },
    { id: "3", title: "Mr.Bean" },
  ];
  const goodData = [
    { id: "1", title: "Крем" },
    { id: "2", title: "Окуляри" },
    { id: "3", title: "Нигири" },
    { id: "3", title: "Теплий костюм" },
  ];
  return (
    <div>
      <Header />
      {isOnline && <h1>Welcome!</h1>}
      {age > 18 ? <h2>Ти диви який вимахав!</h2> : <h2>Іди їж кашу</h2>}
      <List title="My films" data={filmData} />
      <List title="My goods" data={goodData} />
      <Modal title="Children how it works">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis
          quos voluptatum harum unde? Inventore saepe, voluptatibus consequuntur
          eius non itaque odio esse quo. Cum dolorem itaque sapiente dolor
          recusandae.
        </h2>
        <button>Clicker</button>
      </Modal>
      <Modal title="Here you are">
        <input />
        <input />
        <input />
        <button>Push</button>
      </Modal>
      {/* <Modal title="Messages box">
        <Message text="Куплю праску!" author="Олена" />
        <Message text="Куплю золото!" author="Серж" />
        <Message text="Продам дом!" author="Вероника" />
      </Modal> */}
      <Button>CLICKKKKKK </Button>
      <Button>HRRRRRR </Button>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
