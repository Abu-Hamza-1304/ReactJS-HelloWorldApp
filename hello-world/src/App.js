import "./App.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Hey from "./components/Hey";
// import PropsExample from "./components/PropsDemo";
// import StateDemo from "./components/StateDemo";
// import IncrementCounter from "./components/IncrementCounter";
// import DecrementCounter from "./components/DecrementCounter";
// import FunctionDestructure from "./components/FuncDestructure";
// import ClassDestructure from "./components/ClassDestructure";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import IfElseRendering from "./components/ConditionalRendering/IfElseRendering";
// import ElementVariables from "./components/ConditionalRendering/ElementVariables";
// import TernaryOperator from "./components/ConditionalRendering/TernaryOperator";
// import ShortCktOperator from "./components/ConditionalRendering/ShortCktOperator";
// import Homepage from "./components/ConditionalRendering/HomePage";
// import NameList from "./components/ListRendering/NameList";
// import PersonList from "./components/ListRendering/PersonList";
// import IndexAsKey from "./components/ListRendering/IndexAsKey";
// import StyleSheets from "./components/StylingReactComponents/StyleSheets";
// import Inline from "./components/StylingReactComponents/Inline";
// import CSSModules from "./components/StylingReactComponents/CSSModules";
// import Form from "./components/FormHandling/Form";
// import ReactForm from "./components/FormHandling/ReactForm";
// import LifecycleA from "./components/ComponentsLifeCycle/LifecycleA";
// import FragmentDemo from "./components/Fragments/FragmentDemo";
// import Table from "./components/Fragments/Table";
// import ParentPureComp from "./components/PureComponents/ParentPureComp";
// import ParentMemoComp from "./components/MemoComponents/ParentMemoComp";
// import RefsDemo from "./components/Refs/RefsDemo";
// import FRParentInput from "./components/Refs/FRParentInput";
// import PortalDemo from "./components/Portal/PortalDemo";
// import Hero from "./components/ErrorBoundary/Hero";
// import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
// import ClickCounter from "./components/HigherOrderComponent/ClickCounter";
// import HoverCounter from "./components/HigherOrderComponent/HoverCounter";
// import ClickCounterTwo from "./components/RenderProps/ClickCounterTwo";
// import HoverCounterTwo from "./components/RenderProps/HoverCounterTwo";
// // import User from "./components/RenderProps/User";
// import Counter from "./components/RenderProps/Counter";
import ComponentC from "./components/Context/ComponentC";
import { UserProvider } from "./components/Context/userContext";

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome />
      <Hello />
      <Hey />
      <hr />
      <PropsExample name="Bruce" heroName="Batman">
        <p>This is children props.</p>
      </PropsExample>
      <PropsExample name="Clark" heroName="Superman">
        <button>Action</button>
      </PropsExample>
      <PropsExample name="Diana" heroName="Wonder Woman" />
      <hr />
      <StateDemo />
      <hr />
      <IncrementCounter />
      <hr />
      <DecrementCounter />
      <hr />
      <FunctionDestructure firstName="Abu" lastName="Hamza" />
      <hr />
      <ClassDestructure firstName="Abu" lastName="Hamza" />
      <hr />
      <FunctionClick />
      <hr />
      <ClassClick />
      <hr />
      <EventBind />
      <hr />
      <ParentComponent />
      <hr />
      <IfElseRendering />
      <hr />
      <ElementVariables />
      <hr />
      <TernaryOperator />
      <hr />
      <ShortCktOperator />
      <hr />
      <Homepage />
      <hr />
      <NameList />
      <hr />
      <PersonList />
      <hr />
      <IndexAsKey />
      <hr />
      <StyleSheets primary={true} />
      <hr />
      <Inline />
      <hr />
      <CSSModules />
      <hr />
      <Form />
      <hr />
      <ReactForm />
      <hr />
      <LifecycleA />
      <hr />
      <FragmentDemo />
      <hr />
      <Table />
      <hr />
      <ParentPureComp />
      <hr />
      <ParentMemoComp />
      <hr />
      <RefsDemo />
      <hr />
      <FocusInput />
      <hr />
      <FRParentInput />
      <hr />
      <PortalDemo />
      <hr />
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <hr />
      <ClickCounter name="Abu" />
      <br />
      <HoverCounter name="Hamza" />
      <hr />
      // <ClickCounterTwo />
      // <br />
      // <HoverCounterTwo />
      // <br />
      // <User render={(isLoggedIn) => (isLoggedIn ? "Abu" : "Guest")} />
      // <hr />
      // <Counter
      //   render={(count, incrementCount) => (
      //     <ClickCounterTwo count={count} incrementCount={incrementCount} />
      //   )}
      // />
      // <br />
      // <Counter
      //   render={(count, incrementCount) => (
      //     <HoverCounterTwo count={count} incrementCount={incrementCount} />
      //   )}
      // />
      <hr /> */}
      <UserProvider value="Abu">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
