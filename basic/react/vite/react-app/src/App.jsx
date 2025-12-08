// import './App.css'
import { useState } from "react";

function Header(props) {
  console.log("props", props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault(); /* 기본 이벤트 방지 */
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  // const lis = [
  //   <li><a href="/read/1">html</a></li>,
  //   <li><a href="/read/2">css</a></li>,
  //   <li><a href="/read/3">js</a></li>
  // ];
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(Number(e.target.id));
            //console.log(e.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // e.target -> <form>
          // e.target.title -> 폼의 name="title"
          // e.target.body -> 폼의 name="body"
          console.log(e.target.title.value);
          const title = e.target.title.value;
          const body = e.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create" />
        </p>
      </form>
    </article>
  );
} // function Create(props)

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.title.value);
          const title = e.target.title.value;
          const body = e.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => {
              console.log(e.target.value);
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            /* HTML의 onchange는 값이 바뀌거나 마우스 포인터가 바깥쪽으로 빠져나갈 때 호출되지만, 리액트의 onChange는 값을 입력할 때마다 호출된다. */
            onChange={(e) => {
              console.log(e.target.value);
              setBody(e.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Update" />
        </p>
      </form>
    </article>
  );
} // function Update(props)

// App 컴포넌트는 useState()로 지정한 변수 값이 변경되면 다시 실행된다.
function App() {
  // const [변수, set변수] = useState(변수의초기값);
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  // const _mode = useState("WELCOME");
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // console.log('_mode',_mode); // ['WELCOME', ƒ]
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]);
  // const topics = [
  //     { id: 1, title: "html", body: "html is ..." }, // topics[0]
  //     { id: 2, title: "css", body: "css is ..." }, // topics[1]
  //     { id: 3, title: "javascript", body: "javascript is ..." }, // topics[2]
  // ];

  let content = null;
  let contentControl = null;
  // CRUD(Create Read Update Delete)

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;

    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;

    contentControl = (
      <>
        <li>
          {/* 갱신(Update) 버튼 */}
          <a
            href={"/update/" + id}
            onClick={(e) => {
              e.preventDefault();
              setMode("UPDATE");
            }}
          >
            Update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="Delete"
            onClick={() => {
              const newTopics = [];
              for (let i = 0; i < topics.length; i++) {
                if (topics[i].id !== id) {
                  newTopics.push(topics[i]);
                }
              }
              setTopics(newTopics);
              setMode('WELCOME')
            }}
          />
        </li>
      </>
    );
    console.log("contentControl", contentControl);
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopic = { id: nextId, title: title, body: body };
          /* 
              const newValue = [...value]
              newValue 변경
              setValue(newValue)
          */
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode("READ");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );

    /* UPDATE = READ + CREATE */
  } else if (mode === "UPDATE") {
    let title,
      body = null;

    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          console.log("title=", title, "body=", body);

          const newTopics = [...topics];
          const updateTopic = { id: id, title: title, body: body };

          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updateTopic;
              break;
            }
          }
          setTopics(newTopics);
          setMode("READ");
        }}
      ></Update>
    );
  } // if end

  return (
    <div>
      {/* 헤더 */}
      {/* <Header /> */}
      <Header
        title="WEB"
        onChangeMode={() => {
          // mode = 'WELCOME';
          setMode("WELCOME");
        }}
      ></Header>
      {/* 내비게이션 */}
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          // mode = 'READ';
          setMode("READ");
          setId(_id);
        }}
      ></Nav>
      {/* 아티클 */}
      {content}
      <ul>
        <li>
          {/* 생성(Create) = 추가(Insert) 버튼 */}
          <a
            href="/create"
            onClick={(e) => {
              e.preventDefault();
              setMode("CREATE");
            }}
          >
            Create
          </a>
        </li>
        {contentControl}
      </ul>
    </div>
  );
}

export default App;
