
import Card from "./component/card";
import Spinner from "./component/spinner";

// Materi disini:
// JSX
// Functional Component
// Props and State
// Conditional rendering

const App = () => {
  const editMode = true;
  const isVerify = 1;

  const title = "Where does it come from?";
  const subtitle = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
  of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
  a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
  Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
  word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
  sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
  Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
  popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
  amet..", comes from a line in section 1.10.32.
  `;

  if (!editMode || isVerify === 0)
    return (
      <div style={{ textAlign: "center", paddingTop: "100px" }}>
        <Spinner />
      </div>
    );


    return (
      <div>
        {/* <Spinner /> */}
        {/* Calling other component */}
        <Card title="Arya" subtitle="Mahasiswa Kampus Merdeka" grade="A" />
        <Card title="Bill Delvin" subtitle="Mahasiswa Kampus Merdeka" />
        <Card title="Bill Delvin" subtitle="Mahasiswa Kampus Merdeka" />
        <Card title="Bill Delvin" subtitle="Mahasiswa Kampus Merdeka" />
        <Card title={title} subtitle={subtitle} />
        <Card title="Bill Delvin" subtitle="Mahasiswa Kampus Merdeka" />
      </div>
  );
  
};

// HANYA BERLAKU UNTUK 1 COMPONENT
// TIDAK UNTUK YANG LAIN
export default App;
