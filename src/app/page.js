
export default function Home() {
  return (
    <main >
      <h1>Welcome to the Prediction App</h1>
      <p>
        This app uses a machine learning model to make predictions based on your input.
      </p>
      <h1>Choose what service you want to use</h1>
      <ul>
        <li>
          <a href="/weather">Weather Prediction</a>
        </li>
        <li>
          <a href="/houses">House Price Prediction</a>
        </li>
      </ul>
      
      </main>
  );
}
