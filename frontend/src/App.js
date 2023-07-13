import TrainDetails from "./Components/TrainDetails";

function App() {
    const dummyData = [
      {
          tn: "Delhi",
          trnum: 12,
          dep: {
              h: '9',
              m: '12',
              s: '12',
          },
          seat: {
              sleeper: 1,
              ac: 2,
          },
          price: {
              sleeper: 1,
              ac: 723,
          },
          delayedBy: 3,
      },
      {
          tn: "Delhi",
          trnum: 12,
          dep: {
              h: '9',
              m: '12',
              s: '12',
          },
          seat: {
              sleeper: 1,
              ac: 2,
          },
          price: {
              sleeper: 1,
              ac: 723,
          },
          delayedBy: 3,
      },
      {
          tn: "Delhi",
          trnum: 12,
          dep: {
              h: '9',
              m: '12',
              s: '12',
          },
          seat: {
              sleeper: 1,
              ac: 2,
          },
          price: {
              sleeper: 1,
              ac: 723,
          },
          delayedBy: 3,
      }
  ]
  return (
      <>
        <section className="info"></section>
        <section className="trains flex gap-5 justify-center items-center h-[100dvh]">
          {
            dummyData.map((train,i) => {
              return <TrainDetails key={i} details={train} />
            })
          }
        </section>
      </>
  );
}

export default App;
