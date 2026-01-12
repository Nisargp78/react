import Card from "./components/card";

const App = () => {
  return (
    <div className="app">
      <Card
        user="Nisarg"
        age={21}
        img="https://images.unsplash.com/photo-1766811474703-6e86727d7f95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Yashvi"
        age={20}
        img="https://plus.unsplash.com/premium_photo-1764546983128-48223ebc0330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
