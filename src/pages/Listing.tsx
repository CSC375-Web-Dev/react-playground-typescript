import { JSX, useState } from 'react'
import styles from './Listing.module.css'

export default function Listing() {
    const [shoppingList, setShoppingList] = useState([] as string[])
    const shoppingListItems = ['butter', 'milk', 'eggs', 'toilet paper']

    function addItemToList() {
        // calculate random index in shoppingListItemsArray
        const randomIndexInArray = Math.floor(Math.random() * shoppingListItems.length)

        // create new variable equal to item in shoppingListItems at random index
        const newItem = shoppingListItems[randomIndexInArray]

        // create a new shopping list array that consists of the original shopping list + the new item
        const newList = [...shoppingList, newItem]

        // update shopping list hook with updated list
        setShoppingList(newList)
    }

    function createShoppingListHTML(): JSX.Element {
        // if no items in shopping list, return "no items added yet" label
        if (shoppingList.length === 0) {
            return (
                <p className={styles['no-items-label']}>No items added yet...</p>
            )
        }
        
        // for each item in shopping list, create an associated li tag
        const listItemsHtml = shoppingList.map((item, index) => {
            return (
                <li key={`${item}-${index}`}>{item}</li>
            )
        })

        // return a ul tag with all shopping list li items inside
        return (
            <ul className={styles['shopping-list']}>
                { listItemsHtml }
            </ul>
        ) 
    }

    function clearList() {
        // update shopping list hook to an empty array
        setShoppingList([])
    }

    return (
        <div className={`${styles.flex} ${styles['flex-justify-content']}`}>
            <div className={styles.container}>
                <p>Click the button to add a new random item to the shopping list!</p>
                <div className={styles['button-container']}>
                    <button className={styles.button} onClick={addItemToList}>Add Item</button>
                    <button className={styles.button} onClick={clearList}>Clear List</button>
                </div>
                <p className={styles['shopping-list-label']}>Current shopping list:</p>
                { createShoppingListHTML() }
            </div>
        </div>
    )
}