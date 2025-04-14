import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import countingImage from '../assets/counting.jpg'
import shoppingListImage from '../assets/shopping-list.gif'
import animalCardsImage from '../assets/animal-cards.webp'
import apiImage from '../assets/api.jpg'

export default function Home() {
  return (
    <div className={`${styles.flex} ${styles['flex-justify-content']}`}>
      <div className={styles.container}>
        <h1>Welcome to the React Playground</h1>
        <p>Here you can play around with some example react features. So much fun!!!</p>
        <div className={styles['cards-container']}>

          { /* count card */ }
          <Link className={styles['card-link']} to="/count">
            <div className={styles.card}>
              <h2 className={styles['card-title']}>Count</h2>
              <p>The count example shows how to use a state "hook" to essentially tie a JavaScript variable to an HTML element.</p>
              <p>This is one of the main benefits of React, as it allows for seamless HTML updates as JavaScript variables are updated, which is very convenient and saves a ton of time.</p>
              <img className={styles['card-image']} src={countingImage} />
            </div>
          </Link>

          { /* list card */ }
          <Link className={styles['card-link']} to="/list">
            <div className={styles.card}>
              <h2 className={styles['card-title']}>List</h2>
              <p>The list example shows a more complex example of using a state hook with a JavaScript array-type variable.</p>
              <p>It also shows how to selectively show certain HTML elements based on a hook variable's state.</p>
              <img className={styles['card-image']} src={shoppingListImage} />
            </div>
          </Link>

          { /* "cards" card */ }
          <Link className={styles['card-link']} to="/cards">
            <div className={styles.card}>
              <h2 className={styles['card-title']}>Cards</h2>
              <p>The cards example shows how to create and utilize a reusable component.</p>
              <p>This essentially means creating a reusable piece self-encapsulating code (HTML, CSS, and JavaScript), and then using it other components wherever desired.</p>
              <img className={styles['card-image']} src={animalCardsImage} />
            </div>
          </Link>

          { /* API card */ }
          <Link className={styles['card-link']} to="/api">
            <div className={styles.card}>
              <h2 className={styles['card-title']}>API</h2>
              <p>The API example shows how to call an API inside of a React component through an "effect" hook.</p>
              <p>The key is setting up the "effect" hook correctly alongside a state hook to achieve desired results.</p>
              <img className={styles['card-image']} src={apiImage} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

