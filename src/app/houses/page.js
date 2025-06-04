export default function HousesPage() {
  return (
    <main>
      <h1>Welcome to the Houses Prediction App</h1>
      <p>
        This app uses a machine learning model to predict house prices based on various features.
      </p>
      <p>
        You can input details about a house, and the app will provide an estimated price based on the trained model.
      </p>
      <h2>Choose area</h2>
      <ul>
        <li>
          <a href="/houses/cali">California</a>
        </li>
        <li>
          <a href="/houses/mel">Melbourne</a>
        </li>
        <li>
          <a href="/houses/mum">Mumbai</a>
        </li>
      </ul>
      
    </main>
  );
}